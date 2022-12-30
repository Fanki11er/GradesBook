using GradesBook.Models;
using GradesBook.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GradesBook.Controllers
{
   

        [Route("Accounts")]
        public class AccountsController : ControllerBase
        {

            private readonly IAccountsService _accountsService;
           

            public AccountsController(IAccountsService accountsService)
            {
                _accountsService = accountsService;
          
            }

        [HttpPost("Register")]

        public ActionResult RegisterUser([FromBody] RegisterUserDto dto)
        {
            var index = _accountsService.RegisterUser(dto);
            if(index >= 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("RegisterChildren/{id}")]
        public ActionResult RegisterChild([FromRoute] int id, [FromBody] RegisterUserDto dto)
        {

            if (!dto.Email.Contains("@student.school.pl"))
            {
                return Unauthorized();
            }
            if (dto.Password != dto.RepeatedPassword)
            {
                return BadRequest();
            }
            var index = _accountsService.RegisterChild(dto, id);

            if (index >= 0)
            {
                return Ok();
            }
            return BadRequest();

        }

        [HttpPost("Login")]
        public ActionResult<AuthUserDto> LoginUser([FromBody] LoginUserDto dto)
        {
            
            var user = _accountsService.LoginUser(dto);
            if (user == null)
            {
                return BadRequest("Logowanie nie powiodło się");
            }
            return Ok(user);
        }

    }
    
}
