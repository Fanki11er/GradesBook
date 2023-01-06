namespace GradesBook.Models
{
    public class StudentsPeriodSetOfGrades
    {
        public string StudentName { get; set; }
        public List<StudentGrades> Grades { get; set; } = new List<StudentGrades>();
    }
}
