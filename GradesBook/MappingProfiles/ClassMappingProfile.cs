using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;

namespace GradesBook.MappingProfiles
{
    public class ClassMappingProfile : Profile
    {
        public ClassMappingProfile()
        {
            CreateMap<CreateClassDto, Class>();

            CreateMap<Class, ClassStuentsSettingsDto>();
               
        }
    }
}
