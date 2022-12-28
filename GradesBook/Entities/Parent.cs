using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Parent: User
    {
       override  public string Role { get; set; } = "Parent";
        virtual public List<Student> Students { get; set; } = new List<Student>(); 

    }

}
