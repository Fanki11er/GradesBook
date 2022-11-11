namespace GradesBook.Entities
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Grade> Grades { get; set; } = new List<Grade>();
        public Teacher? Teacher { get; set; }
        public List<Program> Programs { get; set; } = new List<Program>();

    }
}
