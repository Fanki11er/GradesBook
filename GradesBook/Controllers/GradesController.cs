using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Grades")]
    public class GradesController : Controller
    {
        private readonly IGradesService _gradesService;

        public GradesController(IGradesService gradesService)
        {
            _gradesService = gradesService;
        }
        [HttpGet("PossibleGrades")]
        public ActionResult<IEnumerable<SelectOption>> GetPossibleGrades()
        {
            var possibleGrades = _gradesService.GetPossibleGrades();
            return Ok(possibleGrades);
        }

        [HttpPost("Rate/{id}")]
        public ActionResult RateStudent([FromRoute] int id, [FromBody] StudentRateDto dto)
        {
            var result = _gradesService.RateStudent(id, dto);
            if(result == 0)
            {
                return BadRequest();
            }
            return Ok();
        }

    }
}
