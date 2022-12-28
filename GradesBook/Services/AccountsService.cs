using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GradesBook.Services
{

    public interface IAccountsService
    {
        public int RegisterUser(RegisterUserDto dto);
        public int RegisterChild(RegisterUserDto dto, int id);
        public AuthUserDto LoginUser(LoginUserDto dto);
    }
    public class AccountsService: IAccountsService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly AuthenticationSettings _authenticationSettings;

        public AccountsService(GradesBookDbContext dbContext, IMapper mapper, IPasswordHasher<User> passwordHasher, AuthenticationSettings authenticationSettings)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _authenticationSettings = authenticationSettings;
        }

        public int RegisterUser(RegisterUserDto dto)
        {
            if(dto.Password != dto.RepeatedPassword)
            {
                return -1;
            }
          

          
            if (dto.Email.Contains("@parent.school.pl")){
                var existing = _dbContext.Parents.FirstOrDefault(p => p.Email == dto.Email);

                if (existing != null) {
                    return -1;
                }
                
                var parent = new Parent()
                {
                    Email = dto.Email,
                    FirstName = dto.FirstName,
                    LastName = dto.LastName,
                };
                var password = _passwordHasher.HashPassword(parent, dto.Password);
                parent.Password = password;
                _dbContext.Parents.Add(parent);
                _dbContext.SaveChanges();
                return parent.Id;
            }

            if (dto.Email.Contains("@teacher.school.pl"))
                {
                var existing = _dbContext.Teachers.FirstOrDefault(p => p.Email == dto.Email);

                if (existing != null)
                {
                    return -1;
                }

                var teacher =  new Teacher()
                 {
                  Email = dto.Email,
                  FirstName = dto.FirstName,
                  LastName = dto.LastName,

                 };
                var password = _passwordHasher.HashPassword(teacher, dto.Password);
                teacher.Password = password;
                _dbContext.Teachers.Add(teacher);
                _dbContext.SaveChanges();
                 return teacher.Id;

            }
            return -1;

        }

        public int RegisterChild(RegisterUserDto dto, int id)
        {

            var parent = _dbContext.Parents.FirstOrDefault(p => p.Id == id);
            if (parent == null)
            {
                return -1;
            }

            var existing = _dbContext.Students.FirstOrDefault(p => p.Email == dto.Email);

            if (existing != null)
            {
                return -1;
            }

            var student = _mapper.Map<Student>(dto);
            student.Parent = parent;
            student.ParrentId = parent.Id;

            var password = _passwordHasher.HashPassword(student, dto.Password);
            student.Password = password;


            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();

            return student.Id;

        }

        public AuthUserDto LoginUser(LoginUserDto dto)
        {


            var user = FindUser(dto.Email);

            if (user == null)
            {
                return null;
            }
            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, dto.Password);
            if (result == PasswordVerificationResult.Failed)
            {
                return null;
            }

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.FirstName + " " + user.LastName),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.Email, user.Email)

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_authenticationSettings.JwtKey));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(_authenticationSettings.JwtExpireMinutes);
            var token = new JwtSecurityToken(_authenticationSettings.JwtIssuer, _authenticationSettings.JwtIssuer,
                claims,
                expires: expires,
                signingCredentials: cred);
            var authToken = new JwtSecurityTokenHandler().WriteToken(token);

            var authUser = new AuthUserDto()
            {
                Id = user.Id,
                Name = user.FirstName + " " + user.LastName,
                Token = authToken,
                Role = user.Role,
            };

            return authUser;
        }

        private User? FindUser(string email)
        {
            User? user = null;
            if (email.Contains("@parent"))
            {
                user = _dbContext.Parents.FirstOrDefault(x => x.Email == email);
            }
            else if (email.Contains("@teacher"))
            {
                user = _dbContext.Teachers.FirstOrDefault(x => x.Email == email);
            }
            else if (email.Contains("@student"))
            {
                user = _dbContext.Students.FirstOrDefault(x => x.Email == email);
            }
            return user;
        }
    }
}
