namespace GradesBook.Entities
{
    public class Grade
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public int SubjectId { get; set; }
        public DateTime Date { get; set; }

    }
}
