using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{
    public interface IClassService
    {
        int CreateClass(CreateClassDto dto);
        IEnumerable<Class> GetAllClasses();
        Class GetClassById(int id);
        public ClassStuentsSettingsDto GetClassSettings(int id);
        public IEnumerable<ClassNameWithSupervisorDto> GetClassnamesWithSupervisorDto();
        public ClassWithStudentsAndProgramDto GetClassStudentsInfo(int id);
    }

    public class ClassService : IClassService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        public ClassService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public Class GetClassById(int id)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault((c) => c.Id == id);

            if (selectedClass is null) return null;
            return selectedClass;
        }

        public IEnumerable<Class> GetAllClasses()
        {
            var classes = _dbContext.Classes
               .ToList();
            return classes;

        }

        public int CreateClass(CreateClassDto dto)
        {
            var test = _dbContext.Classes.FirstOrDefault(c => c.Name == dto.Name);
            if (test == null)
            {
                var newClass = _mapper.Map<Class>(dto);
                _dbContext.Classes.Add(newClass);
                _dbContext.SaveChanges();
                 return newClass.Id;
            }
            return -1;

        }

        public ClassStuentsSettingsDto GetClassSettings(int id)
        {
            var selectedClass = _dbContext.Classes.FirstOrDefault((c) => c.Id == id);

            if (selectedClass == null)
            {
                return null;
            }
            else
            {

                var classStudents = _dbContext.Students.Where(s => s.StudentClass.Id == id);

                var settings = _mapper.Map<ClassStuentsSettingsDto>(selectedClass);

                settings.Students = classStudents.Select(s => _mapper.Map<SelectOption>(s)).ToList();

               return settings;
            }
        }

        public IEnumerable<ClassNameWithSupervisorDto> GetClassnamesWithSupervisorDto()
        {
            var info = _dbContext.Classes.Select(s => _mapper.Map<ClassNameWithSupervisorDto>(s)).ToList();
           
            return info;
        }

        public ClassWithStudentsAndProgramDto GetClassStudentsInfo(int id)
        {
            var selectedClass = _dbContext.Classes
                .Include(i => i.Students)
                .Include(i => i.Program)
                .Include(i => i.Supervisingteacher).  
                FirstOrDefault((c) => c.Id == id);

            if (selectedClass == null)
            {
                return null;
            }
            else
            {

                //var classStudents = _dbContext.Students.Where(s => s.StudentClass != null && s.StudentClass.Id == id);

                //var classStudents = classStudents.Select(s => _mapper.Map<StudentWithGradesAverageDto>(s)).ToList();

                var classStudentsInfo = _mapper.Map<ClassWithStudentsAndProgramDto>(selectedClass);
                classStudentsInfo.StudentsList = _mapper.Map<List<SelectOption>>(selectedClass.Students);
               

                return classStudentsInfo;
            }
        }
    }
}
