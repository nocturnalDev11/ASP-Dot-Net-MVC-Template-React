using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ASP_Dot_Net_MVC_CRUD_Template.Models.Dto;
using System.Security.Claims;

[ApiController]
[Route("api/[controller]")]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
public class UserApiController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public UserApiController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet("profile")]
    public async Task<ActionResult<UserProfileDto>> GetProfile()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (string.IsNullOrEmpty(userIdClaim))
            return Unauthorized(new { error = "Unauthorized" });

        var userId = int.Parse(userIdClaim);
        var user = await _dbContext.Users.FindAsync(userId);
        if (user == null) return NotFound(new { error = "User not found" });

        return Ok(new UserProfileDto
        {
            FirstName = user.FirstName ?? "",
            LastName = user.LastName ?? "",
            UserName = user.UserName ?? "",
            Email = user.Email,
            PhoneNumber = user.PhoneNumber,
            Address = user.Address,
            BirthDate = user.BirthDate
        });
    }
}
