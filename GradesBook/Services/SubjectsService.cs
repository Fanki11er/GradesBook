using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{

    public interface ISubjetcsService
    {
        public IEnumerable<SelectOption> GetAllSubjects();
        public IEnumerable<SelectOption> GetStudentsSubjects(int id);


    }
    public class SubjectsService: ISubjetcsService
    {

        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        public SubjectsService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<SelectOption> GetAllSubjects()
        {
            var subjects = _mapper.Map<IEnumerable<SelectOption>>(_dbContext.Subjects);
            return subjects;
        }

        public IEnumerable<SelectOption> GetStudentsSubjects(int id)
        {
            var student = _dbContext.Students.FirstOrDefault(x => x.Id == id);
            if(student == null)
            {
                return null;
            }
            var studentClass = _dbContext.Classes.FirstOrDefault(c=> c.Id == student.ClassId);
            if(studentClass == null)
            {
                return null;
            }
            var program = _dbContext.Programs.FirstOrDefault(p=> p.Id == studentClass.ProgramId);
            if(program == null)
            {
                return null;
            }
            var subjects = _dbContext.ProgramSubjects.Include(i => i.Subject).Where(ps => ps.ProgramId == program.Id).Select(i => i.Subject).ToList();

            return _mapper.Map<IEnumerable<SelectOption>>(subjects);
        }

    }
}
