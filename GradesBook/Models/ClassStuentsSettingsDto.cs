using GradesBook.Entities;

namespace GradesBook.Models
{
    public class ClassStuentsSettingsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<SelectOption> Students { get; set; } = new List<SelectOption>();

        public string SupervisingTeacherName { get; set; }


    }
}
