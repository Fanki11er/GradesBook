using System.ComponentModel.DataAnnotations;

namespace GradesBook.Models
{
    public class RegisterUserDto
    {   [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string RepeatedPassword { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
