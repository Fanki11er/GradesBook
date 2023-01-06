using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{

    public interface IParentService
    {
        public IEnumerable<StudentWithClassAndGradesAverageDto> GetParentsChildren(int id);
        //public int RegisterChild(CreateUserDto dto, int id);
        public UserCurrentSettingsDto GetCurrentUserSettings(int id);
        public bool UpdateUserSettings(int id, NewUserSettingsDto dto);
        public List<ParentsStudentsStatistics> GetStudentsPeriodSetOfGrades();
        public string ConvertToStatisticsEmail();
    }

    public class ParenntService: IParentService
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IPasswordHasher<User> _passwordHasher;
        public ParenntService(GradesBookDbContext dbContext, IMapper mapper, IPasswordHasher<User> passwordHasher)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
        }

        public IEnumerable<StudentWithClassAndGradesAverageDto> GetParentsChildren(int id) {
            var children = _dbContext.Students.Include(i=> i.Grades).Where(s => s.ParrentId == id);
            var students =  _mapper.Map<IEnumerable<StudentWithClassAndGradesAverageDto>>(children).ToList();
            return students;
        }


    

       public UserCurrentSettingsDto GetCurrentUserSettings(int id)
        {
            var user = _dbContext.Parents.FirstOrDefault(p=> p.Id == id);
            if(user != null)
            {
                var settings = _mapper.Map<UserCurrentSettingsDto>(user);
                return settings;
            }
            return null;
        }

        public bool UpdateUserSettings(int id,NewUserSettingsDto dto)
        {
            if(dto.Password != dto.RepeatedPassword)
            {
                return false;
            }

            var user = _dbContext.Parents.FirstOrDefault(u=> u.Id == id);

            if(user == null)
            {
                return false;
            }
            Helpers.ChangeuserSettings(user, dto);

            if (dto.Password != "")
            {
                Helpers.ChangeUserPassword(user, dto, _passwordHasher);
            }

            _dbContext.Update(user);
           var changes = _dbContext.SaveChanges();

           if(changes == 0)
            {
                return false;
            }
           return true;
        }

        public List<ParentsStudentsStatistics> GetStudentsPeriodSetOfGrades()
        {
            var parentsStudentsStatisticsList = new List<ParentsStudentsStatistics>();
            //var studentsPeriodSetOfGradesList = new List<StudentsPeriodSetOfGrades>();
            var parents = _dbContext.Parents.Include(i => i.Students).ToList();
            parents.ForEach(p =>
            {
                var parentStats = new ParentsStudentsStatistics()
                {
                    ParentName = p.FirstName + " " + p.LastName,
                   
                };

                var students = p.Students.ToList();

                students.ForEach(student =>
                {
                    var periodGrades = new StudentsPeriodSetOfGrades();
                    var grades = _dbContext.Grades.Include(i => i.Subject).Where(s => s.StudentId == student.Id).ToList();
                    var subjects = _dbContext.Grades.Include(i => i.Subject).Where(s => s.StudentId == student.Id).Select(s=> s.Subject).Distinct().ToList();
                    

                   

                    subjects.ForEach(subject =>
                    {
                        var studentGrades = new StudentGrades()
                        {
                            SubjectName = subject.Name,
                           
                        };
                      
                            var gradesLIst = grades.Where(x => x.StudentId == student.Id && x.SubjectId == subject.Id).Select(t=> t.Value).ToList();
                            studentGrades.Grades = gradesLIst;
                        
                        periodGrades.Grades.Add(studentGrades);
                    });


                    periodGrades.StudentName = student.FirstName + " " + student.LastName;
                 
                    parentStats.ParentStudentsStatistics.Add(periodGrades);
                   

                });
                parentsStudentsStatisticsList.Add(parentStats);
            });
            return parentsStudentsStatisticsList;
        }

        public string ConvertToStatisticsEmail()
        {
            var stats = GetStudentsPeriodSetOfGrades();
            var emailContent = "";

            stats.ForEach(stat =>
            {
                emailContent += $"Rodzic: {stat.ParentName}\n";
                emailContent += "----------\n";
                stat.ParentStudentsStatistics.ForEach(ps =>
                {
                    emailContent += $"Uczeń: {ps.StudentName}\n";
                    ps.Grades.ForEach(g =>
                    {
                        emailContent += $"Przedmiot: {g.SubjectName}\n";
                        emailContent += "Oceny: ";
                        g.Grades.ForEach(grade =>
                        {
                            emailContent += $"{grade} ";
                        });
                        emailContent += "\n\n";
                    });
                    
                });
            });
            return emailContent;
        }
    }
}
