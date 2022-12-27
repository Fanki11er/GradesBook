namespace GradesBook.Entities
{
    public class ProgramSubject
    {
        public int Id { get; set; }
        public int ProgramId { get; set; }
        public int SubjectId { get; set; }

        virtual public Subject Subject { get; set;}
        virtual public Program Program { get; set;}
    }
}
