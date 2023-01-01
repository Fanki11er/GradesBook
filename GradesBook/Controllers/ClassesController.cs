using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Controllers
{
    [Route("Class")]
    public class ClassesController : ControllerBase
    {
        
        private readonly IClassService _classService;

        public ClassesController(GradesBookDbContext dbContext, IMapper mapper, IClassService classService)
        {
            
            _classService = classService;
        }

        public ActionResult<IEnumerable<Class>> GetAll()
        {
            var classes = _classService.GetAllClasses();
            
            return Ok(classes);

        }


        [HttpGet("{id}")]
        public ActionResult<Class> Get([FromRoute] int id)
        {
            var selectedClass = _classService.GetClassById(id);
            
            if(selectedClass is null)
            {
                return NotFound();
            }
            return Ok(selectedClass);
        }


        [HttpGet("Settings/{id}")]
        public ActionResult<ClassStuentsSettingsDto> GetClassSettings([FromRoute] int id)
        {
            var selectedClass = _classService.GetClassSettings(id);

            if (selectedClass == null)
            {
                return NotFound();
            }
                return Ok(selectedClass); 
        }
       

        [HttpGet("LightClassInfo")]
        public ActionResult<IEnumerable<ClassNameWithSupervisorDto>> GetClassesNamesWithSuperviosrs()
        {
            var info = _classService.GetClassnamesWithSupervisorDto();

            return Ok(info);
        }


        [HttpPost]
        public ActionResult CreateClass([FromBody] CreateClassDto dto)
        {

            var index = _classService.CreateClass(dto);

            if(index>= 0)
            {
                return Created($"/Class/{index}", null);
            }
            return Conflict();
   
        }

        [HttpGet("ClassStudentsInfo/{id}")]
        public ActionResult<ClassWithStudentsAndProgramDto> GetClassStudentsInfo([FromRoute] int id)
        {
            var info = _classService.GetClassStudentsInfo(id);

            if (info is null)
            {
                return NotFound();
            }
          
                return Ok(info);    
        }

        [HttpPost("AddStudents/{id}")]
        public ActionResult AddStudentsToClass([FromRoute] int id,[FromBody] List<int> newStudents)
        {
            
            var result = _classService.AddStudentsToClass(id, newStudents);
            if (result == 0)
            {
                return NotFound();
            }

            return Ok();
        }


        [HttpPost("RemoveStudents/{id}")]
        public ActionResult RemoveStudentsFromClass([FromRoute] int id, [FromBody] List<int> removedStudents)
        {

            var result = _classService.RemoveStudentFromClass(id, removedStudents);
            if (result == 0)
            {
                return NotFound();
            }

            return Ok();
        }

    }
}



