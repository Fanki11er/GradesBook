namespace GradesBook.Models
{
    public class StudentWithClassAndGradesAverageDto
    {
        public int StudentId { get; set; }
        public float GradesAverage { get; set; }
        public string StudentName { get; set; }
        public string ClassName { get; set; }
    }
}
