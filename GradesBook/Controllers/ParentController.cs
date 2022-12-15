using GradesBook.Services;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
    [Route("Parent")]

    public class ParentController : ControllerBase
    {
        private readonly IStuentService _parentService;
        public ParentController( IStuentService parentSrvice)
        {
            _parentService = parentSrvice;
        }
    }
}
