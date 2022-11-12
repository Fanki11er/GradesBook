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


                var freeStudents = _dbContext.Students.Where(s => s.StudentClass != null);
                var classStudents = _dbContext.Students.Where(s => s.StudentClass.Id == id);

                var settings = _mapper.Map<ClassStuentsSettingsDto>(selectedClass);

                settings.StudentsLIst = classStudents.Select(s => _mapper.Map<LightStudentDto>(s)).ToList();
                settings.FreeStudentsList = freeStudents.Select(s => _mapper.Map<LightStudentDto>(s)).ToList();


                if (selectedClass.Supervisingteacher != null)
                {
                    settings.SupervisingTeacherName = selectedClass.Supervisingteacher.FirstName + " " + selectedClass.Supervisingteacher.LastName;
                }
                else
                {
                    settings.SupervisingTeacherName = null;
                }



                return Ok(settings);
            }
        }
       

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

        [HttpGet("ClassStudentsInfo/{id}")]
        public ActionResult<ClassWithStudentsAndProgramDto> GetClassStudentsInfo([FromRoute] int id)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault((c) => c.Id == id);

            if (selectedClass == null)
            {
                return NotFound();
            }
            else
            {


                var classStudents = _dbContext.Students.Where(s => s.StudentClass.Id == id);

                var classStudentsWithGradesAverages = classStudents.Select(s => _mapper.Map<StudentWithGradesAverageDto>(s)).ToList();

                var classStudentsInfo = _mapper.Map<ClassWithStudentsAndProgramDto>(selectedClass);

                classStudentsInfo.StudentsList = classStudentsWithGradesAverages;

                return Ok(classStudentsInfo);
            }
        }

    }
}
