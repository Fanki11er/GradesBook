using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Parent: User
    {
      virtual public List<Student> Students { get; set; } = new List<Student>(); 

    }

}
