using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Student: User
    {
     
        public int? ClassId { get; set; }
        public int ParrentId { get; set; }
        public Class? StudentClass { get; set; }
        public Parent Parent { get; set; }

        public  List<Grade> Grades { get; set; } = new List<Grade>();

    }
}
