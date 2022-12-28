using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Student: User
    {
     
        public int? ClassId { get; set; }
        public int ParrentId { get; set; }
        override public string Role { get; set; } = "Student";
        virtual public  Class? StudentClass { get; set; }
        public  Parent Parent { get; set; }
       virtual public  List<Grade> Grades { get; set; } = new List<Grade>();

    }
}
