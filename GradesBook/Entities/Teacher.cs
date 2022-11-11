using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Teacher :User
    {
        public List<Class> SupervisingClasses { get; set; } = new List<Class>();
        public int? SubjectId { get; set; }
        public Subject? Subject { get; set; }    




    }

}
