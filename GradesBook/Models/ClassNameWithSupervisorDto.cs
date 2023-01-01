namespace GradesBook.Models
{
    public class ClassNameWithSupervisorDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? SupervisorName { get; set; }
        public int StudentsNumber { get; set; }
    }
}
