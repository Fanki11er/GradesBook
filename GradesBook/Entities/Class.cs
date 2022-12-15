namespace GradesBook.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? PrgoramId { get; set; }
        public int? SupervisingteacherId { get; set; }
        virtual public  List<Student> Students { get; set; } = new List<Student>();
        virtual public  Program? Program { get; set; }
        virtual public  Teacher? Supervisingteacher { get; set; }
    }
}
