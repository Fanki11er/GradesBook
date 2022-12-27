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

    

            public ActionResult<IEnumerable<SelectOption>> GetAll()
            {
                var subjects = _subjectsService.GetAllSubjects();
                return Ok(subjects);
            }
            

        }

    
}
