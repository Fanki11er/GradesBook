using GradesBook.Entities;

namespace GradesBook.Models
{
    public class ClassStuentsSettingsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<LightStudentDto> StudentsLIst { get; set; }
        public List<LightStudentDto> FreeStudentsList { get; set; }

        public string? SupervisingTeacherName { get; set; }


    }
}
