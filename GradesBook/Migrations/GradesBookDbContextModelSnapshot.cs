﻿// <auto-generated />
using System;
using GradesBook.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GradesBook.Migrations
{
    [DbContext(typeof(GradesBookDbContext))]
    partial class GradesBookDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("GradesBook.Entities.Announcement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AnnouncementTypeId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("TypeId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AnnouncementTypeId");

                    b.ToTable("Announcements");
                });

            modelBuilder.Entity("GradesBook.Entities.AnnouncementType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AnnouncementTypes");
                });

            modelBuilder.Entity("GradesBook.Entities.Class", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(2)
                        .HasColumnType("nvarchar(2)");

                    b.Property<int?>("PrgoramId")
                        .HasColumnType("int");

                    b.Property<int?>("ProgramId")
                        .HasColumnType("int");

                    b.Property<int?>("SupervisingteacherId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("SupervisingteacherId");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("GradesBook.Entities.Grade", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("Date")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValueSql("getutcdate()");

                    b.Property<int>("StudentId")
                        .HasColumnType("int");

                    b.Property<int>("SubjectId")
                        .HasColumnType("int");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("StudentId");

                    b.HasIndex("SubjectId");

                    b.ToTable("Grades");
                });

            modelBuilder.Entity("GradesBook.Entities.Parent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Parents");
                });

            modelBuilder.Entity("GradesBook.Entities.Program", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Programs");
                });

            modelBuilder.Entity("GradesBook.Entities.ProgramSubject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ProgramId")
                        .HasColumnType("int");

                    b.Property<int>("SubjectId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProgramId");

                    b.HasIndex("SubjectId");

                    b.ToTable("ProgramSubjects");
                });

            modelBuilder.Entity("GradesBook.Entities.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("ClassId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ParrentId")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("ClassId");

                    b.HasIndex("ParrentId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("GradesBook.Entities.Subject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Subjects");
                });

            modelBuilder.Entity("GradesBook.Entities.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SubjectId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SubjectId")
                        .IsUnique()
                        .HasFilter("[SubjectId] IS NOT NULL");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("GradesBook.Entities.Announcement", b =>
                {
                    b.HasOne("GradesBook.Entities.AnnouncementType", "AnnouncementType")
                        .WithMany("Announcements")
                        .HasForeignKey("AnnouncementTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("AnnouncementType");
                });

            modelBuilder.Entity("GradesBook.Entities.Class", b =>
                {
                    b.HasOne("GradesBook.Entities.Program", "Program")
                        .WithMany("Classs")
                        .HasForeignKey("ProgramId");

                    b.HasOne("GradesBook.Entities.Teacher", "Supervisingteacher")
                        .WithMany("SupervisingClasses")
                        .HasForeignKey("SupervisingteacherId");

                    b.Navigation("Program");

                    b.Navigation("Supervisingteacher");
                });

            modelBuilder.Entity("GradesBook.Entities.Grade", b =>
                {
                    b.HasOne("GradesBook.Entities.Student", "Student")
                        .WithMany("Grades")
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GradesBook.Entities.Subject", "Subject")
                        .WithMany("Grades")
                        .HasForeignKey("SubjectId")
                        .IsRequired();

                    b.Navigation("Student");

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("GradesBook.Entities.ProgramSubject", b =>
                {
                    b.HasOne("GradesBook.Entities.Program", "Program")
                        .WithMany("ProgramSubjects")
                        .HasForeignKey("ProgramId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GradesBook.Entities.Subject", "Subject")
                        .WithMany("ProgramSubjects")
                        .HasForeignKey("SubjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Program");

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("GradesBook.Entities.Student", b =>
                {
                    b.HasOne("GradesBook.Entities.Class", "StudentClass")
                        .WithMany("Students")
                        .HasForeignKey("ClassId");

                    b.HasOne("GradesBook.Entities.Parent", "Parent")
                        .WithMany("Students")
                        .HasForeignKey("ParrentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Parent");

                    b.Navigation("StudentClass");
                });

            modelBuilder.Entity("GradesBook.Entities.Teacher", b =>
                {
                    b.HasOne("GradesBook.Entities.Subject", "Subject")
                        .WithOne("Teacher")
                        .HasForeignKey("GradesBook.Entities.Teacher", "SubjectId");

                    b.Navigation("Subject");
                });

            modelBuilder.Entity("GradesBook.Entities.AnnouncementType", b =>
                {
                    b.Navigation("Announcements");
                });

            modelBuilder.Entity("GradesBook.Entities.Class", b =>
                {
                    b.Navigation("Students");
                });

            modelBuilder.Entity("GradesBook.Entities.Parent", b =>
                {
                    b.Navigation("Students");
                });

            modelBuilder.Entity("GradesBook.Entities.Program", b =>
                {
                    b.Navigation("Classs");

                    b.Navigation("ProgramSubjects");
                });

            modelBuilder.Entity("GradesBook.Entities.Student", b =>
                {
                    b.Navigation("Grades");
                });

            modelBuilder.Entity("GradesBook.Entities.Subject", b =>
                {
                    b.Navigation("Grades");

                    b.Navigation("ProgramSubjects");

                    b.Navigation("Teacher");
                });

            modelBuilder.Entity("GradesBook.Entities.Teacher", b =>
                {
                    b.Navigation("SupervisingClasses");
                });
#pragma warning restore 612, 618
        }
    }
}
