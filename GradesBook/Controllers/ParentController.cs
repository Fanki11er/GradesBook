using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Parent")]

    public class ParentController : ControllerBase
    {
        private readonly IParentService _parentService;
        public ParentController( IParentService parentSrvice)
        {
            _parentService = parentSrvice;
        }

        [HttpGet("Children/{id}")]
        public ActionResult<IEnumerable<StudentWithClassAndGradesAverageDto>> GetParentsChildren ([FromRoute] int id)
        {
            var children = _parentService.GetParentsChildren(id);

            if(children == null)
            {
                return NotFound();
            }
 
            return Ok(children);
        }

        [HttpPost("RegisterChildren/{id}")]
        public ActionResult RegisterChild([FromRoute] int id, [FromBody] CreateUserDto dto)
        {

            if (!dto.Email.Contains("@student.school.pl")){
                return Unauthorized();
            }
            if(dto.Password != dto.RepeatedPassword)
            {
                return BadRequest();
            }
           var index =  _parentService.RegisterChild(dto, id);

            if(index >= 0)
            {
                return Ok();
            }
            return BadRequest();
           
        }

        [HttpGet("Settings/{id}")]
        public ActionResult<UserCurrentSettingsDto> GetCurrentUserSettings ([FromRoute] int id)
        {
            var settings = _parentService.GetCurrentUserSettings(id);
            if(settings == null)
            {
                return BadRequest();
            }
            return Ok(settings);

          
        }
    }



}
