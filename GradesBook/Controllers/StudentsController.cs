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

        [HttpGet("{id}")]

        public ActionResult<IEnumerable<StudentWithGradesAverageDto>> GetParentChidren([FromRoute] int id)
        {
            var students = _studentService.GetParentStudents(id);
            if(students is null) return NotFound();
            return Ok(students);
        }

    }
}
