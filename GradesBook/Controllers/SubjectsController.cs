using GradesBook.Entities;
using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Subjects")]
    public class SubjectsController : ControllerBase
    {

        private readonly ISubjetcsService _subjectsService;

        public SubjectsController(ISubjetcsService subjetcsService)
        {
            _subjectsService = subjetcsService;
        }

    
            [HttpGet]
            public ActionResult<IEnumerable<SelectOption>> GetAll()
            {
                var subjects = _subjectsService.GetAllSubjects();
                return Ok(subjects);
            }

             [HttpGet("StudentsSubjects/{id}")]
            public ActionResult<IEnumerable<SelectOption>> GetStudentsSubjects([FromRoute]int id)
            {
                var subjects = _subjectsService.GetStudentsSubjects(id);
                if(subjects == null)
                {
                return BadRequest();
                }
                return Ok(subjects);
               
            }


    }

    
}
