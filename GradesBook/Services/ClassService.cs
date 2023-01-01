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
        public int AddStudentsToClass(int id, List<int> newStudents);
        public int RemoveStudentFromClass(int id, List<int> removedStudents);
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
            var exists = _dbContext.Classes.FirstOrDefault(c => c.Name == dto.Name);
            if (exists == null)
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
            var info = _dbContext.Classes.Include(i=> i.Students).Include(i=> i.SupervisingTeacher).Select(s => _mapper.Map<ClassNameWithSupervisorDto>(s)).ToList();
           
            return info;
        }

        public ClassWithStudentsAndProgramDto GetClassStudentsInfo(int id)
        {
            var selectedClass = _dbContext.Classes
                .Include(i => i.Students)
                .Include(i => i.Program)
                .Include(i => i.SupervisingTeacher).  
                FirstOrDefault((c) => c.Id == id);

            if (selectedClass == null)
            {
                return null;
            }
           
                var classStudentsInfo = _mapper.Map<ClassWithStudentsAndProgramDto>(selectedClass);
                classStudentsInfo.StudentsList = _mapper.Map<List<SelectOption>>(selectedClass.Students);
               

                return classStudentsInfo;
            

           
        }
        public int AddStudentsToClass(int id, List<int> newStudents)
        {
            var newStudentsList = new List<Student>();
            var selectedClass = _dbContext.Classes.Include(i=> i.Students).FirstOrDefault(s => s.Id == id);
            if(selectedClass == null)
            {
                return 0;
            }

            newStudents.ForEach(id =>
            {
                var student = _dbContext.Students.FirstOrDefault(s => s.Id == id);
                if(student != null)
                {
                    newStudentsList.Add(student);
                }
            });

            selectedClass.Students.AddRange(newStudentsList);
            _dbContext.Classes.Update(selectedClass);
            var result = _dbContext.SaveChanges();

            return result;

            
        }

        public int RemoveStudentFromClass(int id, List<int> removedStudents)
        {
            var selectedClass = _dbContext.Classes.Include(i => i.Students).FirstOrDefault(s => s.Id == id);
            if (selectedClass == null)
            {
                return 0;
            }

            removedStudents.ForEach(id =>
            {
                var student = _dbContext.Students.FirstOrDefault(s => s.Id == id);
                if (student != null)
                {
                    selectedClass.Students.Remove(student);
                }
            });

            _dbContext.Classes.Update(selectedClass);
            var result = _dbContext.SaveChanges();

            return result;


        }
    }
}
