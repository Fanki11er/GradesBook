namespace GradesBook.Entities
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Subject> Subjects { get; set; }
    }
}
