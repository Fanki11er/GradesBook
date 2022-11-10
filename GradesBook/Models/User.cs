namespace GradesBook.Models
{
    public class User
    {

       public User(string firstName, string lastName, string email, string password )
        {
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            Password = password;
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        
    }
}
