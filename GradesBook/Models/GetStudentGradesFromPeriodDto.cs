namespace GradesBook.Models
{
    public class GetStudentGradesFromPeriodDto
    {
        public List<int> Subjects { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
}

