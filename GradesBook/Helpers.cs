using GradesBook.Models;
using Microsoft.AspNetCore.Identity;

namespace GradesBook
{
    public static class Helpers
    {
        public static void ChangeuserSettings(User user, NewUserSettingsDto dto)
        {
            if (user.FirstName != dto.FirstName)
            {
                user.FirstName = dto.FirstName;
            }
            if (user.LastName != dto.LastName)
            {
                user.LastName = dto.LastName;
            }
            if (dto.Email != dto.Email)
            {
                dto.Email = dto.Email;
            }

        }

        public static bool ChangeUserPassword(User user, NewUserSettingsDto dto, IPasswordHasher<User> hasher)
        {

            var result = hasher.VerifyHashedPassword(user, user.Password, dto.OldPassword);
            if (result == PasswordVerificationResult.Failed)
            {
                return false;
            }
            if(dto.Password == "")
            {
                return false;
            }

            if(dto.Password != dto.RepeatedPassword)
            {
                return false;
            }

            user.Password = hasher.HashPassword(user, dto.Password);
            return true;

        }

    }
}
