namespace GradesBook.Entities
{
    public class Grade
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public int SubjectId { get; set; }
         public Subject Subject { get; set; }
        public DateTime Date { get; set; }
        virtual  public Student Student { get; set; }
        public int StudentId { get; set; }


    }
}
