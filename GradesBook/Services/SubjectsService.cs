using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;

namespace GradesBook.Services
{

    public interface ISubjetcsService
    {
        public IEnumerable<SelectOption> GetAllSubjects();
   
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

    }
}
