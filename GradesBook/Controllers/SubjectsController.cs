using GradesBook.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Subjects")]
    public class SubjectsController : ControllerBase
    {

        private readonly GradesBookDbContext _dbContext;

            public SubjectsController(GradesBookDbContext dbContext)
            {
                _dbContext = dbContext;
            }

            public ActionResult<IEnumerable<Subject>> GetAll()
            {
                var subjects = _dbContext.Subjects.ToList();
                return Ok(subjects);
            }
            

        }

    
}
