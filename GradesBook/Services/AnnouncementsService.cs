using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{
    public interface IAnnouncementsService
    {
        public int AddAnnouncementToMainPage(string content);
        public IEnumerable<GeneralAnnouncement> GetMainPageAnnouncements();
        public int AddAnnouncementToClass(int id, string content);

        public IEnumerable<ClassAnnouncementDto> GetClassAnnouncements(int id);
    };
    public class AnnouncementsService : IAnnouncementsService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;

        public AnnouncementsService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<GeneralAnnouncement> GetMainPageAnnouncements()
        {
            var announcements = _dbContext.Announcements;
            return _mapper.Map<IEnumerable<GeneralAnnouncement>>(announcements);
        }

        public int AddAnnouncementToMainPage(string content)
        {


            var announcement = new Announcement()
            {

                Value = content,
                Date = DateTime.Now,
            };

            _dbContext.Announcements.Add(announcement);
            var result = _dbContext.SaveChanges();
            return result;
        }

        public int AddAnnouncementToClass(int id, string content)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault(c => c.Id == id);
            if (selectedClass == null)
            {
                return 0;
            }
            selectedClass.ClassAnnouncements.Add(new ClassAnnouncement()
            {
                Value = content,
                Date = DateTime.Now,

            });


            _dbContext.Classes.Update(selectedClass);
            var result = _dbContext.SaveChanges();
            return result;
        }

        public IEnumerable<ClassAnnouncementDto> GetClassAnnouncements(int id)
        {
            var announcements = new List<ClassAnnouncementDto>();
            var parent = _dbContext.Parents.Include(i => i.Students).FirstOrDefault(f => f.Id == id);
            if (parent == null)
            {
                return null;
            }

            parent.Students.ForEach(student =>
            {
                var selectedClass = _dbContext.Classes.Include(i => i.ClassAnnouncements).FirstOrDefault(c => c.Id == student.ClassId);
                if (selectedClass != null)
                {
                    announcements.AddRange(_mapper.Map<List<ClassAnnouncementDto>>(selectedClass.ClassAnnouncements));
                }
            });

            return announcements.Distinct().Select(a => a).ToList();

        }
    }
};
