using GradesBook.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Class")]
    public class ClassesController : ControllerBase
    {
        
        private readonly GradesBookDbContext _dbContext;

        public ClassesController(GradesBookDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public ActionResult<IEnumerable<Class>> GetAll()
        {
            var classes = _dbContext.Classes.ToList();
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

    }
}
