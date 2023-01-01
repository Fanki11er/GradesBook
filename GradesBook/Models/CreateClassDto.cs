namespace GradesBook.Models
{
    public class CreateClassDto
    {
        public string Name { get; set; }
        public int ProgramId { get; set; }
        public int SupervisingteacherId { get; set; }
    }
}
