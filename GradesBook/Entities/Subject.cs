namespace GradesBook.Entities
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
       virtual  public List<Grade> Grades { get; set; } = new List<Grade>();
       virtual public Teacher? Teacher { get; set; }
       virtual   public List<Program> Programs { get; set; } = new List<Program>();

    }
}
