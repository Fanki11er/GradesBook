using GradesBook.Entities;

namespace GradesBook.Models
{
    public class ClassStuentsSettingsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Student> Students { get; set; }
        public List<Student> FreeStudents { get; set; }

        public Teacher? Supervisingteacher { get; set; }


    }
}
