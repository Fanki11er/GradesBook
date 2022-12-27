namespace GradesBook.Entities
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
       virtual  public List<ProgramSubject> ProgramSubjects { get; set; } = new List<ProgramSubject>();
       virtual public List<Class> Classs { get; set; } = new List<Class>();

    }
}
