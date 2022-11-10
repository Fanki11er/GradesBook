using Microsoft.EntityFrameworkCore;

namespace GradesBook.Entities
{
    public class GradesBookDbContext : DbContext
    {

        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<AnnouncementType> AnnouncementTypes { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Announcement>().Property(an=> an.Value).IsRequired();
            modelBuilder.Entity<AnnouncementType>().Property(at => at.Type).IsRequired();
            modelBuilder.Entity<Class>().Property(cl => cl.Name).IsRequired().HasMaxLength(2);
            modelBuilder.Entity<Grade>().Property(gr => gr.Value).IsRequired();
            modelBuilder.Entity<Grade>().Property(gr => gr.Date).IsRequired();
            modelBuilder.Entity<Subject>().Property(su => su.Name).IsRequired().HasMaxLength(50);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=GradesBookDB;Trusted_Connection=True;");
        }
    }
}
