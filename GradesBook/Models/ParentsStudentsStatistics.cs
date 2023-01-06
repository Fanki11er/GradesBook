namespace GradesBook.Models
{
    public class ParentsStudentsStatistics
    {
        public string ParentName { get; set; }
        public List<StudentsPeriodSetOfGrades> ParentStudentsStatistics { get; set; } = new List<StudentsPeriodSetOfGrades>();
    }
}
