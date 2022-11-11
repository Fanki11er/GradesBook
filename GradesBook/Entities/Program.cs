namespace GradesBook.Entities
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Subject> Subjects { get; set; } = new List<Subject>();
        public List<Class> Classs { get; set; } = new List<Class>();

    }
}
