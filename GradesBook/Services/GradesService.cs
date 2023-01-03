using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{

    public interface IGradesService
    {
        public IEnumerable<SelectOption> GetPossibleGrades();
        public int RateStudent(int id, StudentRateDto dto);

    }
    public class GradesService: IGradesService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;

        public GradesService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<SelectOption> GetPossibleGrades()
        {   

            var grades = new List<int>()
            {
                1,
                2,
                3,
                4,
                5,
                6
            };

            var possibleGrades = _mapper.Map <IEnumerable<SelectOption>>(grades);
            return possibleGrades;
           
        }

        public int RateStudent(int id,StudentRateDto dto)
        {
            var student = _dbContext.Students.FirstOrDefault(x => x.Id == id);
            if(student == null)
            {
                return 0;
            }

            var grade =_mapper.Map<Grade>(dto);
            grade.Student = student;
            grade.Date = DateTime.Now;

            _dbContext.Grades.Add(grade);
            var result = _dbContext.SaveChanges();

            return result;
        }
    }
}
