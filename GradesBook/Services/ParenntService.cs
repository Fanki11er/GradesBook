using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{

    public interface IParentService
    {
        public IEnumerable<StudentWithClassAndGradesAverageDto> GetParentsChildren(int id);
        public int RegisterChild(CreateUserDto dto, int id);
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


        public int RegisterChild(CreateUserDto dto, int id)
        {

            var parent = _dbContext.Parents.FirstOrDefault(p => p.Id == id);

            var student = _mapper.Map<Student>(dto);
            student.Parent = parent;
            student.ParrentId = parent.Id;
            
            
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();

            return student.Id;
            
        }
    }
}
