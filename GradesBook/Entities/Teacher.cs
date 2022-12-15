using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Teacher :User
    {
        virtual  public List<Class> SupervisingClasses { get; set; } = new List<Class>();
        public int? SubjectId { get; set; }
      virtual   public Subject? Subject { get; set; }    




    }

}
