﻿using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.AspNetCore.Identity;

namespace GradesBook.Services
{
   

        public interface IStudentService
        {
        public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id);
        public UserCurrentSettingsDto GetCurrentUserSettings(int id);
        public bool UpdateUserSettings(int id, NewUserSettingsDto dto);

        }

        public class StudentService : IStudentService
        {
            private readonly GradesBookDbContext _dbContext;
            private readonly IMapper _mapper;
            private readonly IPasswordHasher<User> _passwordHasher;
        public StudentService(GradesBookDbContext dbContext, IMapper mapper, IPasswordHasher<User> passwordHasher)
            {
                _dbContext = dbContext;
                _mapper = mapper;
                _passwordHasher = passwordHasher;
            }

            public IEnumerable<StudentWithGradesAverageDto> GetParentStudents(int id)
        {
            var parent = _dbContext.Parents.FirstOrDefault(p => p.Id == id);
            if (parent is null) return null;

            var students = parent.Students.Select(p => _mapper.Map<StudentWithGradesAverageDto>(p)).ToList();
            
            return students;

        }

        public UserCurrentSettingsDto GetCurrentUserSettings(int id)
        {
            var user = _dbContext.Students.FirstOrDefault(p => p.Id == id);
            if (user != null)
            {
                var settings = _mapper.Map<UserCurrentSettingsDto>(user);
                return settings;
            }
            return null;
        }

        public bool UpdateUserSettings(int id, NewUserSettingsDto dto)
        {
            if (dto.Password != dto.RepeatedPassword)
            {
                return false;
            }

            var user = _dbContext.Students.FirstOrDefault(u => u.Id == id);

            if (user == null)
            {
                return false;
            }
           
            Helpers.ChangeuserSettings(user, dto);
            if(dto.Password != "")
            {
                Helpers.ChangeUserPassword(user, dto, _passwordHasher);
            }

            _dbContext.Update(user);
            var changes = _dbContext.SaveChanges();

            if (changes == 0)
            {
                return false;
            }
            return true;
        }



    }
    
}
