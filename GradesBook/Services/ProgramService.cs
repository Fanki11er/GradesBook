using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;

namespace GradesBook.Services
{

   public interface IProgramService {
        public IEnumerable<SelectOption> GetAllPrograms();
        public Entities.Program GetProgram(int id);
        public int CreateProgram(NewProgramDto dto);
    }

    public class ProgramService : IProgramService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        public ProgramService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public IEnumerable<SelectOption> GetAllPrograms()
        {
            var programs = _mapper.Map<IEnumerable<SelectOption>>(_dbContext.Programs);
            return programs;
        }

        public Entities.Program GetProgram( int id)
        {
            var program = _dbContext.Programs.FirstOrDefault((c) => c.Id == id);

            if (program == null)
            {
                return null;
            }
            return program;
        }

        public int CreateProgram(NewProgramDto dto)
        {
            var program = new Entities.Program()
            {
                Name = dto.Name,
            };

            _dbContext.Programs.Add(program);
            _dbContext.SaveChanges();

            var programSubjects = new List<ProgramSubject>();

            dto.SubjectsIds.ForEach(id =>
            {
                programSubjects.Add(new ProgramSubject()
                {
                    SubjectId = id,
                    ProgramId = program.Id
                });

            });
            _dbContext.ProgramSubjects.AddRange(programSubjects);
            _dbContext.SaveChanges();

            return program.Id;
          
        }
    }
}
