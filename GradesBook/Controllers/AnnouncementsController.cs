using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Announcement")]
    public class AnnouncementsController : ControllerBase
    {
        private readonly IAnnouncementsService _announcementsService;

        public AnnouncementsController (IAnnouncementsService announcementsService)
        {
            _announcementsService = announcementsService;   
        }

        [HttpGet("Main")]
        public ActionResult<IEnumerable<GeneralAnnouncement>> GetMainPageAnnouncements()
        {
            var announcements = _announcementsService.GetMainPageAnnouncements();
            return Ok(announcements);
        }



        [HttpPost("Main")]
        public ActionResult AddAnnouncementToMainPage([FromBody] string content)
        {
            var result = _announcementsService.AddAnnouncementToMainPage(content);
            if(result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("Class/{id}")]
        public ActionResult AddAnnouncementToClass([FromRoute] int id, [FromBody] string content)
        {
            var result = _announcementsService.AddAnnouncementToClass(id, content); 
            if (result > 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("Class/{id}")]
        public ActionResult<IEnumerable<ClassAnnouncementDto>>GetClassAnnouncements([FromRoute] int id)
        {
            var announcements = _announcementsService.GetClassAnnouncements(id);

            if(announcements == null)
            {
                return NotFound();
            }
            return Ok(announcements);
        }
    }

}

