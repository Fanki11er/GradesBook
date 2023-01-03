namespace GradesBook.Entities
{
    public class Announcement
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public  DateTime Date { get; set; }
        public  int TypeId { get; set; }

        public AnnouncementType AnnouncementType { get; set; }
      }
}
