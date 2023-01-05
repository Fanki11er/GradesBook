using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;

namespace GradesBook.DatabaseSeaders
{
    public class DatabaseSeeder
    {
        private readonly GradesBookDbContext _dbContext;
        private readonly IPasswordHasher<User> _passwordHasher;

        public DatabaseSeeder(GradesBookDbContext dbContext, IPasswordHasher<User> passwordHasher)
        {
            _dbContext = dbContext;
            _passwordHasher = passwordHasher;
        }

        public void Seed()
        {

            
            if (_dbContext.Database.CanConnect())
            {
             

                if (!_dbContext.Subjects.Any())
                {
                    var subjects = GetSubjects();
                    _dbContext.Subjects.AddRange(subjects);
                    _dbContext.SaveChanges();

                }

                if (!_dbContext.Programs.Any())
                {
                    var programs = GetPrograms();
                    _dbContext.Programs.AddRange(programs);
                    _dbContext.SaveChanges();

                }
                if (!_dbContext.ProgramSubjects.Any())
                {
                    var programs = GetProgramSubjects();
                    _dbContext.ProgramSubjects.AddRange(programs);
                    _dbContext.SaveChanges();

                }

                if (!_dbContext.Teachers.Any())
                {
                    var teachers = GetTeachers();
                    _dbContext.Teachers.AddRange(teachers);
                    _dbContext.SaveChanges();

                }

                if (!_dbContext.Classes.Any())
                {
                    var classes = GetClasses();
                    _dbContext.Classes.AddRange(classes);
                    _dbContext.SaveChanges();

                }

                if (!_dbContext.Parents.Any())
                {
                    var parents = GetParents();
                    _dbContext.Parents.AddRange(parents);
                    _dbContext.SaveChanges();

                }




            }
        }

        private IEnumerable<Subject> GetSubjects()
        {
            var subjects = new List<Subject>()
            {
                new Subject() { Name = "Matematyka"},
                new Subject() { Name ="Historia"},
                new Subject() { Name ="Geografia"},
                new Subject() {Name ="Język Polski"},
                new Subject() {Name ="Język Angielski"},
                new Subject() {Name ="Wychowanie fizyczne"},
                new Subject() {Name ="Informatyka"},
                new Subject() {Name ="Biologia"},
                new Subject() {Name ="Fizyka"},
                new Subject() {Name ="Plastyka"},
                new Subject() {Name ="WOS"},
                new Subject() {Name ="Technika"},


            };
            return subjects;
        }

        private IEnumerable<Class> GetClasses()
        {
            var classes = new List<Class>()
            {
                new Class()
                {Name = "1A",
                 SupervisingTeacherId = 1,
                 ProgramId = 1,

                
                },
                new Class() {
                 Name = "1B",
                 SupervisingTeacherId = 1,
                 ProgramId = 1,
                },
                

            };
            return classes;

        }

        private IEnumerable<Parent> GetParents()
        {
            var parents = new List<Parent>()
            {
             new Parent()
            {
                FirstName = "Marcin",
                LastName = "Bigos",
                Email = "m.bigos@parent.school.pl",
            },

        };
            parents.ForEach(p =>
            {
                p.Password = _passwordHasher.HashPassword(p, "qwerty");
            });



            return parents;

        }

        private IEnumerable<Teacher> GetTeachers()
        {
            var teachers = new List<Teacher>()
            {
                new Teacher()
                {
                    FirstName = "Krzysztof",
                    LastName = "Kapusta",
                    Email = "k.kapusta@teacher.school.pl",
                },
            };
            teachers.ForEach(t =>
            {
                t.Password = _passwordHasher.HashPassword(t, "qwerty");
            });

            return teachers;

        }

        private IEnumerable<Entities.Program> GetPrograms()
        {
            var programs = new List<Entities.Program>()
            {
                new Entities.Program()
                {
                     Name = "Humanistyka"
                }


            };
            return programs;

        }

        private IEnumerable<ProgramSubject> GetProgramSubjects()
        {
            var programs = new List<ProgramSubject>()
            {
                new ProgramSubject()
                {
                 ProgramId  =1,
                 SubjectId =2,
                },
                new ProgramSubject()
                {
                 ProgramId  =1,
                 SubjectId =3,
                },
                new ProgramSubject()
                {
                 ProgramId  =1,
                 SubjectId =4,
                },
                new ProgramSubject()
                {
                 ProgramId  =1,
                 SubjectId =5,
                },
                new ProgramSubject()
                {
                 ProgramId  =1,
                 SubjectId =10,
                }


            };
            return programs;

        }

        
    }
}
