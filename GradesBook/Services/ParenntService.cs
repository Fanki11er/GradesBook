using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{

    public interface IParentService
    {
        public IEnumerable<StudentWithClassAndGradesAverageDto> GetParentsChildren(int id);
        //public int RegisterChild(CreateUserDto dto, int id);
        public UserCurrentSettingsDto GetCurrentUserSettings(int id);
        public bool UpdateUserSettings(int id, NewUserSettingsDto dto);
    }

    public class ParenntService: IParentService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        public ParenntService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<StudentWithClassAndGradesAverageDto> GetParentsChildren(int id) {
            var children = _dbContext.Students.Where(s => s.ParrentId == id);
            var students =  _mapper.Map<IEnumerable<StudentWithClassAndGradesAverageDto>>(children).ToList();
            return students;
        }


        /*public int RegisterChild(CreateUserDto dto, int id)
        {

            var parent = _dbContext.Parents.FirstOrDefault(p => p.Id == id);
            if (parent == null) {
                return -1;
            }

            var student = _mapper.Map<Student>(dto);
            student.Parent = parent;
            student.ParrentId = parent.Id;
            
            
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();

            return student.Id;
            
        }*/

       public UserCurrentSettingsDto GetCurrentUserSettings(int id)
        {
            var user = _dbContext.Parents.FirstOrDefault(p=> p.Id == id);
            if(user != null)
            {
                var settings = _mapper.Map<UserCurrentSettingsDto>(user);
                return settings;
            }
            return null;
        }

        public bool UpdateUserSettings(int id,NewUserSettingsDto dto)
        {
            if(dto.Password != dto.RepeatedPassword)
            {
                return false;
            }

            var user = _dbContext.Parents.FirstOrDefault(u=> u.Id == id);

            if(user == null)
            {
                return false;
            }
            if(user.FirstName != dto.FirstName)
            {
                user.FirstName = dto.FirstName;
            }
            if(user.LastName != dto.LastName)
            {
                user.LastName = dto.LastName;
            }
            if(dto.Email != dto.Email)
            {
                dto.Email = dto.Email;
            }
            _dbContext.Update(user);
           var changes = _dbContext.SaveChanges();

           if(changes == 0)
            {
                return false;
            }
           return true;
        }
    }
}
