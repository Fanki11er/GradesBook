namespace GradesBook.Entities
{
    public class AnnouncementType
    {
        public int Id { get; set; }
        public string Type { get; set; }

        public List<Announcement> Announcements { get; set; } =  new List<Announcement>();
    }
}
