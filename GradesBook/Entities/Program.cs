namespace GradesBook.Entities
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
       virtual  public List<Subject> Subjects { get; set; } = new List<Subject>();
       virtual public List<Class> Classs { get; set; } = new List<Class>();

    }
}
