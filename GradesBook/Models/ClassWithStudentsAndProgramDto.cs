namespace GradesBook.Models
{
    public class ClassWithStudentsAndProgramDto
    {
        public string ClassName { get; set; }
        public int ClassId { get; set; }
        public string?  SupervisingTeacher { get; set; }
        public string? ProgramName { get; set; }
        public List<StudentWithGradesAverageDto> StudentsList { get; set; }
    }
}
