namespace GradesBook.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PrgoramId { get; set; }
        public int? SupervisingteacherId { get; set; }
        public  List<Student> Students { get; set; } = new List<Student>();
        public  Program? Program { get; set; }
        public  Teacher? Supervisingteacher { get; set; }
    }
}
