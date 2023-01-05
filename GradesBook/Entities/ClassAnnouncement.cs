namespace GradesBook.Entities
{
    public class ClassAnnouncement
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public DateTime Date { get; set; }
        public int ClassId { get; set; }
        virtual public Class Class { get; set; }
    }
}
