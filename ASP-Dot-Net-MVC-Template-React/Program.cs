using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// =======================
//  CONFIGURATION
// =======================
var configuration = builder.Configuration;

// JWT Settings
var jwtSettings = configuration.GetSection("Jwt");
var key = Encoding.UTF8.GetBytes(jwtSettings["Key"]!);

// API Base URL
var authApiBase = configuration["AuthApi:BaseUrl"];

// =======================
//  SERVICES
// =======================

builder.Services.AddControllersWithViews();

// Database (MySQL)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 36))
    ));

// JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(key)
    };
});

// Authorization
builder.Services.AddAuthorization();

// Session
builder.Services.AddSession();

// Named HTTP Client (Auth API)
builder.Services.AddHttpClient("AuthClient", client =>
{
    client.BaseAddress = new Uri(authApiBase ?? "http://localhost:5054");
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

builder.Services.AddControllers();


var app = builder.Build();

// =======================
//  MIDDLEWARE PIPELINE
// =======================
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseSession();
app.UseStaticFiles();
app.UseRouting();

// Enable CORS
app.UseCors("AllowFrontend");

app.UseAuthentication();
app.UseAuthorization();

// API controllers
app.MapControllers();

// MVC default route
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// SPA fallback
app.MapFallback(context =>
{
    var path = context.Request.Path.Value ?? "";
    if (path.StartsWith("/api"))
    {
        context.Response.StatusCode = 404;
        return Task.CompletedTask;
    }

    context.Response.ContentType = "text/html";
    return context.Response.SendFileAsync(
        Path.Combine(app.Environment.WebRootPath, "index.html"));
});

app.Run();