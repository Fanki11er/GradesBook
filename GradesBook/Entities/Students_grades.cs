namespace GradesBook.Entities
{
    public class Students_grades
    {
        public int Id { get; set; }
        public int StudentId { get; set;}
        public int GradeId { get; set; }
        public int SubjectId    { get; set; }
        public DateTime Date { get; set; }
}
}
