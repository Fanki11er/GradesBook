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

            CreateMap<Student, LightStudentDto>().ForMember(s => s.StudentName, m => m.MapFrom(x => x.FirstName + " " + x.LastName));

            CreateMap<Student, StudentWithGradesAverageDto>()
                .ForMember(s => s.StudentId, m => m.MapFrom(x => x.Id))
                .ForMember(s => s.StudentName, m => m.MapFrom(x => x.FirstName + " " + x.LastName))
                .ForMember(s => s.GradesAverage, m => m.MapFrom(x => x.Grades.Average(a => a.Value)));

            CreateMap<Class, ClassWithStudentsAndProgramDto>()
                .ForMember(c => c.ClassName, m => m.MapFrom(v => v.Name))
                .ForMember(c => c.ClassId, m => m.MapFrom(v => v.Id))
                .ForMember(c => c.ProgramName, m => m.MapFrom(v => v.Program != null ? v.Program.Name : null))
                .ForMember(c => c.SupervisingTeacher, m => m.MapFrom(v => v.Supervisingteacher != null ? v.Supervisingteacher.FirstName + " " + v.Supervisingteacher.LastName : null));
        }
    }
}
