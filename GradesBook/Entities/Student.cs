using GradesBook.Models;

namespace GradesBook.Entities
{
    public class Student: User
    {
        /*public Student(string firstName, string lastName, string email, string password): base(firstName, lastName, email, password)
        {
            
             
        }*/
        public int ClassId { get; set; }
        public int ParrentId { get; set; }

        public virtual List<Grade> Grades { get; set; }

    }
}
