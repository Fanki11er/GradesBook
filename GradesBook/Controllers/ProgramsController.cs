using GradesBook.Entities;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Program")]
    public class ProgramsController : ControllerBase
    {

        private readonly IProgramService _programService;

        public ProgramsController(IProgramService programService)
        {
            _programService = programService;
        }

        public ActionResult<IEnumerable<Entities.Program>> GetAll()
        {
            return Ok(_programService.GetAllPrograms());
        }
        [HttpGet("{id}")]
        public ActionResult<Entities.Program> Get([FromRoute] int id)
        {
            var program = _programService.GetProgram(id);

            if (program is null)
            {
                return NotFound();
            }
            return Ok(program);
        }


    }
}
