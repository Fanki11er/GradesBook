using AutoMapper;
using GradesBook.Entities;

namespace GradesBook.Services
{

    public interface IStuentService
    {

    }

    public class ParenntService: IStuentService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        public ParenntService(GradesBookDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
    }
}
