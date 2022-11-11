using GradesBook.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    public class ProgramsController : ControllerBase
    {

        private readonly GradesBookDbContext _dbContext;

        public ProgramsController(GradesBookDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public ActionResult<IEnumerable<Entities.Program>> GetAll()
        {
            var programs = _dbContext.Programs.ToList();
            return Ok(programs);
        }
        [HttpGet("{id}")]
        public ActionResult<Entities.Program> Get([FromRoute] int id)
        {
            var program = _dbContext.Programs.FirstOrDefault((c) => c.Id == id);

            if (program == null)
            {
                return NotFound();
            }
            return Ok(program);
        }


    }
}
