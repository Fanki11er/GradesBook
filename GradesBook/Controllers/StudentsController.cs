using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Student")]
    public class StudentsController : Controller
    {
        private readonly IStudentService _studentService;

        public StudentsController(IStudentService studentService)
        {
            _studentService = studentService;
        }

       /* [HttpGet("{id}")]

        public ActionResult<IEnumerable<StudentWithGradesAverageDto>> GetParentChidren([FromRoute] int id)
        {
            var students = _studentService.GetParentStudents(id);
            if(students is null) return NotFound();
            return Ok(students);
        }*/

        [HttpGet("Settings/{id}")]
        public ActionResult<UserCurrentSettingsDto> GetCurrentUserSettings([FromRoute] int id)
        {
            var settings = _studentService.GetCurrentUserSettings(id);
            if (settings == null)
            {
                return BadRequest();
            }
            return Ok(settings);


        }

        [HttpPost("Settings/{id}")]
        public ActionResult UpdateUserSettings([FromRoute] int id, [FromBody] NewUserSettingsDto dto)
        {
            var result = _studentService.UpdateUserSettings(id, dto);
            if (result == false)
            {
                return BadRequest();
            }
            return Ok();



        }

        [HttpGet("FreeStudents")]
        public ActionResult<IEnumerable<SelectOption>> GetFreeStudents()
        {
            var result = _studentService.GetFreeStudents();
           
            return Ok(result);



        }

        [HttpGet("ClassStudents/{id}")]
        public ActionResult<IEnumerable<SelectOption>> GetClassStudents([FromRoute]int id)
        {
            var result  = _studentService.GetClassStudents(id);
            
           if(result == null)
            {
                return NotFound();
            }
            return Ok(result);

        }



    }
}
