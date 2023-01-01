using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Teacher")]
    public class TeachersController : Controller
    {
        private readonly ITeachersService _teachersService;

        public TeachersController(ITeachersService teachersService)
        {
            _teachersService = teachersService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<SelectOption>> GeAllTeachers()
        {
            var teachers = _teachersService.GeAllTeachers();
            if (teachers == null)
            {
                return BadRequest();
            }
            return Ok(teachers);


        }



        [HttpGet("Settings/{id}")]
        public ActionResult<UserCurrentSettingsDto> GetCurrentUserSettings([FromRoute] int id)
        {
            var settings = _teachersService.GetCurrentUserSettings(id);
            if (settings == null)
            {
                return BadRequest();
            }
            return Ok(settings);


        }

        [HttpPost("Settings/{id}")]
        public ActionResult UpdateUserSettings([FromRoute] int id, [FromBody] NewUserSettingsDto dto)
        {
            var result = _teachersService.UpdateUserSettings(id, dto);
            if (result == false)
            {
                return BadRequest();
            }
            return Ok();



        }

        [HttpGet("Subject/{id}")]
        public ActionResult<SelectOption> GetTeacherSubjects ([FromRoute] int id)
        {
            var subject = _teachersService.GetTeacherSubject(id);
            if(subject == null)
            {
                return Ok(null);
            }
            
            return Ok(subject);

        }

        [HttpPost("Subject/{userId}")]
        public ActionResult ChangeUserSubject([FromRoute] int userId, [FromBody] int  subjectId)
        {
            var subject = _teachersService.ChangeUserSubject(userId, subjectId);
            if (subject == 0)
            {
                return BadRequest();
            }


            return Ok();



        }
    }
}
