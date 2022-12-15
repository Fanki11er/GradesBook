using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;

namespace GradesBook.Services
{
   

        public interface IStudentService
        {
        public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id);

        }

        public class StudentService : IStudentService
        {
            private readonly GradesBookDbContext _dbContext;
            private readonly IMapper _mapper;
            public StudentService(GradesBookDbContext dbContext, IMapper mapper)
            {
                _dbContext = dbContext;
                _mapper = mapper;
            }

            public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id)
        {
            var parent = _dbContext.Parents.FirstOrDefault(p => p.Id == id);
            if (parent is null) return null;

            var students = parent.Students.Select(p => _mapper.Map<StudentWithGradesAverageDto>(p)).ToList();
            
            return students;

        }
        }
    
}
