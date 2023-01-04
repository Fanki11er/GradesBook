using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{
   

        public interface IStudentService
        {
        //public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id);
        public UserCurrentSettingsDto GetCurrentUserSettings(int id);
        public bool UpdateUserSettings(int id, NewUserSettingsDto dto);
        public IEnumerable<SelectOption> GetFreeStudents();
        public IEnumerable<SelectOption> GetClassStudents(int id);

        }

        public class StudentService : IStudentService
        {
            private readonly GradesBookDbContext _dbContext;
            private readonly IMapper _mapper;
            private readonly IPasswordHasher<User> _passwordHasher;
        public StudentService(GradesBookDbContext dbContext, IMapper mapper, IPasswordHasher<User> passwordHasher)
            {
                _dbContext = dbContext;
                _mapper = mapper;
                _passwordHasher = passwordHasher;
            }

         /*   public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id)
        {
            var parent = _dbContext.Parents.Include(i=> i.Students).FirstOrDefault(p => p.Id == id);
            if (parent is null) return null;

            var students = _mapper.Map<IEnumerable<StudentWithGradesAverageDto>>(parent.Students);
            
            return students;

        }*/

        public UserCurrentSettingsDto GetCurrentUserSettings(int id)
        {
            var user = _dbContext.Students.FirstOrDefault(p => p.Id == id);
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

            var user = _dbContext.Students.FirstOrDefault(u => u.Id == id);

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

        public IEnumerable<SelectOption> GetFreeStudents()
        {
            var freeStudents = _dbContext.Students.Where(sc => sc.ClassId == null);
            return _mapper.Map<IEnumerable<SelectOption>>(freeStudents);
        }

        public IEnumerable<SelectOption> GetClassStudents(int id)
        {
            var selectedClass = _dbContext.Classes.Include(i=> i.Students).FirstOrDefault(c=> c.Id == id);
           if(selectedClass != null)
            {
                return _mapper.Map<IEnumerable<SelectOption>>(selectedClass.Students);
            }
            return null;
            
          
        }

       

        }
   
}
