namespace GradesBook.Models
{
    public class ClassWithStudentsAndProgramDto
    {
        public string ClassName { get; set; }
        public int Id { get; set; }
        public string  SupervisingTeacher { get; set; }
        public string ProgramName { get; set; }
        public List<SelectOption> StudentsList { get; set; } = new List<SelectOption>();
    }
}
