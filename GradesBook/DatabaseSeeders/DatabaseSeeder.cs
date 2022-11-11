using GradesBook.Entities;

namespace GradesBook.DatabaseSeaders
{
    public class DatabaseSeeder
    {
        private readonly GradesBookDbContext _dbContext;

        public DatabaseSeeder(GradesBookDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Seed()
        {
            bool areChanges = false;

            if (_dbContext.Database.CanConnect())
            {
                if (!_dbContext.Subjects.Any())
                {
                    var subjects = GetSubjects();
                    _dbContext.Subjects.AddRange(subjects);
                    areChanges = true;
                   
                }

                if (!_dbContext.Classes.Any())
                {
                    var classes = GetClasses();
                    _dbContext.Classes.AddRange(classes);
                    areChanges = true;
                    
                }

                if(areChanges == true)
                {
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

            };
            return subjects;
        }

        private IEnumerable<Class> GetClasses()
        {
            var classes = new List<Class>()
            {
                new Class() {Name = "1A"},
                new Class() {Name = "1B"},
                new Class() {Name = "1C"},
                new Class() {Name = "2A"},
                new Class() {Name = "2B"},
                new Class() {Name = "3A"},
                new Class() {Name = "4A"},
                new Class() {Name = "4B"},

            };
            return classes;

        }
    }
}
