using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;

namespace GradesBook.Services
{
    public interface ITeachersService
    {
        public UserCurrentSettingsDto GetCurrentUserSettings(int id);
        public bool UpdateUserSettings(int id, NewUserSettingsDto dto);
        public IEnumerable<SelectOption> GeAllTeachers();

    }
    public class TeachersService: ITeachersService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        public TeachersService(GradesBookDbContext dbContext, IMapper mapper, IPasswordHasher<User> passwordHasher )
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
        }

     

        public UserCurrentSettingsDto GetCurrentUserSettings(int id)
        {
            var user = _dbContext.Teachers.FirstOrDefault(p => p.Id == id);
            if (user != null)
            {
                var settings = _mapper.Map<UserCurrentSettingsDto>(user);
                return settings;
            }
            return null;
        }

        public bool UpdateUserSettings(int id, NewUserSettingsDto dto)
        {
            if (dto.Password != dto.RepeatedPassword)
            {
                return false;
            }

            var user = _dbContext.Teachers.FirstOrDefault(u => u.Id == id);

            if (user == null)
            {
                return false;
            }
           
            Helpers.ChangeuserSettings(user, dto);
            if(dto.Password != "")
            {
                Helpers.ChangeUserPassword(user, dto, _passwordHasher);
            }
            _dbContext.Update(user);
            var changes = _dbContext.SaveChanges();

            if (changes == 0)
            {
                return false;
            }
            return true;
        }

        public IEnumerable<SelectOption> GeAllTeachers()
        {
            var teachers = _mapper.Map<IEnumerable<SelectOption>>(_dbContext.Teachers);
            return teachers;
        }
    }
}
