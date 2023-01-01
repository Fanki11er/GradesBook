namespace GradesBook.Models
{
    public class NewUserSettingsDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string Password { get; set; }
        public string RepeatedPassword { get; set; }
    }
}
