namespace GradesBook.Entities
{
    public class Class
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PrgoramId { get; set; }

        public int SupervisingteacherId { get; set; }
    }
}
