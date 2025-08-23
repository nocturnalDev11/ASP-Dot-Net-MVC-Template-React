using System.Text.Json.Serialization;

namespace ASP_Dot_Net_MVC_CRUD_Template.Models.Dto
{
    public class RegisterDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public DateTime? BirthDate { get; set; }
        public string Address { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
