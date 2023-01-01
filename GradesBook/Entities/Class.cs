namespace GradesBook.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ProgramId { get; set; }
        public int? SupervisingTeacherId { get; set; }
        virtual public  List<Student> Students { get; set; } = new List<Student>();
        virtual public  Program? Program { get; set; }
        virtual public  Teacher? SupervisingTeacher { get; set; }
    }
}
