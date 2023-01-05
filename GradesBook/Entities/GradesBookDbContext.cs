using Microsoft.EntityFrameworkCore;

namespace GradesBook.Entities
{
    public class GradesBookDbContext : DbContext
    {
        public GradesBookDbContext(DbContextOptions<GradesBookDbContext> options): base(options) { }
        public DbSet<Announcement> Announcements { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<ProgramSubject> ProgramSubjects { get; set; }
        public DbSet<ClassAnnouncement> ClassAnnouncements { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Student>(eb =>
            {
                eb.HasMany(st => st.Grades).WithOne(gr => gr.Student);
                eb.HasOne(st => st.Parent).WithMany(pr => pr.Students).HasForeignKey(k => k.ParrentId);
            });

            modelBuilder.Entity<Announcement>(eb =>
            {
                eb.Property(an => an.Value).IsRequired();
                //eb.Property(an => an.AnnouncementType).IsRequired();
              
            });

           

            modelBuilder.Entity<Class>(eb =>
            {
                eb.Property(cl => cl.Name).IsRequired().HasMaxLength(2);
                eb.HasMany(cl => cl.Students).WithOne(st => st.StudentClass);
                eb.HasOne(cl => cl.Program).WithMany(pr => pr.Classs);
                eb.HasMany(cl => cl.ClassAnnouncements).WithOne(ca => ca.Class);
            });


            modelBuilder.Entity<Grade>(eb =>
            {
                eb.Property(gr => gr.Value).IsRequired();
                eb.Property(gr => gr.Date).IsRequired();
                eb.Property(gr => gr.Date).HasDefaultValueSql("getutcdate()");
                eb.HasOne(gr => gr.Subject).WithMany(su => su.Grades).OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Subject>(eb =>
            {
                eb.Property(su => su.Name).IsRequired().HasMaxLength(50);
                eb.HasMany(su => su.ProgramSubjects).WithOne(gr => gr.Subject);
                
               
            });


            modelBuilder.Entity<Teacher>(eb =>
            {
                eb.HasMany(tr => tr.SupervisingClasses).WithOne(cl => cl.SupervisingTeacher);
                eb.HasOne(tr => tr.Subject).WithOne(su => su.Teacher).HasForeignKey<Teacher>(tr => tr.SubjectId);
            });

            modelBuilder.Entity<Program>(eb =>
            {
                eb.HasMany(pr => pr.ProgramSubjects).WithOne(su => su.Program);
            });

           
        }

      
    }
}
