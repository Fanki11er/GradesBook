using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Controllers
{
    [Route("Class")]
    public class ClassesController : ControllerBase
    {
        
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;

        public ClassesController(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext; 
            _mapper = mapper;
        }

        public ActionResult<IEnumerable<Class>> GetAll()
        {
            
            var classes = _dbContext.Classes
               .ToList();
            return Ok(classes);

        }

       

        [HttpGet("{id}")]
        public ActionResult<Class> Get([FromRoute] int id)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault((c) => c.Id == id);
            
            if(selectedClass == null)
            {
                return NotFound();
            }
            return Ok(selectedClass);
        }


        [HttpGet("Settings/{id}")]
        public ActionResult<ClassStuentsSettingsDto> GetClassSettings([FromRoute] int id)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault((c) => c.Id == id);

            if (selectedClass == null)
            {
                return NotFound();
            }
            else
            {
               var settings =  _mapper.Map<ClassStuentsSettingsDto>(selectedClass);

               settings.FreeStudents = _dbContext.Students.Where(s => s.StudentClass != null).ToList();

                return Ok(settings);
            }
        }

        [HttpGet("Settings{id}")]
       

        [HttpGet("LightClassInfo")]
        public ActionResult<IEnumerable<int>> GetIds()
        {
            var info = _dbContext.Classes.Select(x => new ClassNameWithSupervisorDto()
            {
                Name = x.Name,
                SupervisorName = x.Supervisingteacher.FirstName + " " + x.Supervisingteacher.LastName,
                StudentsNumber = x.Students.Count()
            });

            return Ok(info);
        }

        [HttpPost]
        public ActionResult CreateClass([FromBody] CreateClassDto dto)
        {

            var test = _dbContext.Classes.FirstOrDefault(c => c.Name == dto.Name);
            if(test == null)
            {
                var newClass = _mapper.Map<Class>(dto);
                _dbContext.Classes.Add(newClass);
                _dbContext.SaveChanges();
                return Created($"/Class/{newClass.Id}", null);
            }
            return Conflict();
           
            
        }

    }
}
