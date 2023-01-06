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

            CreateMap<Class, ClassStuentsSettingsDto>()
                .ForMember(x => x.SupervisingTeacherName, m => m.MapFrom(t => t.SupervisingTeacher != null ? t.SupervisingTeacher.FirstName + " " + t.SupervisingTeacher.LastName: "" ));

            CreateMap<Student, LightStudentDto>().ForMember(s => s.StudentName, m => m.MapFrom(x => x.FirstName + " " + x.LastName));

            CreateMap<Student, StudentWithGradesAverageDto>()
                .ForMember(s => s.StudentId, m => m.MapFrom(x => x.Id))
                .ForMember(s => s.StudentName, m => m.MapFrom(x => x.FirstName + " " + x.LastName))
                .ForMember(s => s.GradesAverage, m => m.MapFrom(x=> x.Grades.Count() == 0 ? 0 : x.Grades.Average(a => a.Value)));

            CreateMap<Class, ClassWithStudentsAndProgramDto>()
                .ForMember(c => c.ClassName, m => m.MapFrom(v => v.Name))
                .ForMember(c => c.ProgramName, m => m.MapFrom(v => v.Program != null ? v.Program.Name : null))
                .ForMember(c => c.SupervisingTeacher, m => m.MapFrom(v => v.SupervisingTeacher != null ? v.SupervisingTeacher.FirstName + " " + v.SupervisingTeacher.LastName : null));

            CreateMap<Class, ClassNameWithSupervisorDto>()
                .ForMember(c => c.SupervisorName, m => m.MapFrom(s => s.SupervisingTeacher != null ? s.SupervisingTeacher.FirstName + " " + s.SupervisingTeacher.LastName : ""))
                .ForMember(c => c.StudentsNumber, m => m.MapFrom(s => s.Students != null? s.Students.Count() : 0   ));

            CreateMap<Student, StudentWithClassAndGradesAverageDto>()
                .ForMember(s => s.StudentId, m => m.MapFrom(x => x.Id))
                .ForMember(s => s.StudentName, m => m.MapFrom(x => x.FirstName + " " + x.LastName))
                .ForMember(s => s.GradesAverage, m => m.MapFrom(x => x.Grades.Count() == 0? 0 : float.Parse(x.Grades.Average(a => a.Value).ToString("0.0"))))
                .ForMember(s => s.ClassName, m => m.MapFrom(x => x.StudentClass == null ? "" : x.StudentClass.Name));

            CreateMap<RegisterUserDto, Student>();


            
            CreateMap<User, UserCurrentSettingsDto>();
            CreateMap<Entities.Program, SelectOption>()
                .ForMember(s => s.Id, m => m.MapFrom(p => p.Id))
                .ForMember(s => s.Value, m => m.MapFrom(p => p.Name));

            CreateMap<Subject, SelectOption>()
                .ForMember(s => s.Id, m => m.MapFrom(p => p.Id))
                .ForMember(s => s.Value, m => m.MapFrom(p => p.Name));

            CreateMap<User, SelectOption>()
                 .ForMember(s => s.Id, m => m.MapFrom(p => p.Id))
                 .ForMember(s => s.Value, m => m.MapFrom(p => p.FirstName + " " + p.LastName));

            CreateMap<Announcement, GeneralAnnouncement>()
                .ForMember(d=>d.Date, m => m.MapFrom(d => d.Date.ToString("dd-MM-yyyy")));
            CreateMap<int, SelectOption>()
                .ForMember(s => s.Id, m => m.MapFrom(t => t))
                .ForMember(s => s.Value, m=> m.MapFrom(t=> t.ToString()));

            CreateMap<ClassAnnouncement, ClassAnnouncementDto>()
              .ForMember(d => d.Date, m => m.MapFrom(d => d.Date.ToString("dd-MM-yyyy")))
              .ForMember(d => d.ClassName, m => m.MapFrom(n => n.Class.Name));
            
            CreateMap<StudentRateDto, Grade>();


        }


    }
}
