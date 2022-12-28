using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Teacher :User
    {
       override public string Role { get; set; } = "Teacher";
       virtual  public List<Class> SupervisingClasses { get; set; } = new List<Class>();
       public int? SubjectId { get; set; }
       virtual   public Subject? Subject { get; set; }    




    }

}
