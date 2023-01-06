using GradesBook.Models;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace GradesBook.Services
{

    public interface IEmailSrvice
    {
        public void SendClassAnnoncemnent(EmailAnnouncementDto dto);
        public void SendStats(string content);
    }
    public class EmailService: IEmailSrvice
    {
        private readonly ISendGridClient _sendGridClient;

        public EmailService(ISendGridClient sendGridClient)
        {
            _sendGridClient = sendGridClient;
        }

        public async void SendClassAnnoncemnent(EmailAnnouncementDto dto)
        {
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("dziedzic.k@hotmail.com", dto.FromClass),
                Subject = "Class announcement",
                PlainTextContent = dto.Content + "\n\n" + dto.Recipient
            };
            msg.AddTo("dziedzic.k@hotmail.com");

            var response = await _sendGridClient.SendEmailAsync(msg);

        }

        public async void SendStats(string content)
        {
            var msg = new SendGridMessage()
            {
                From = new EmailAddress("dziedzic.k@hotmail.com"),
                Subject = "Students Statistics",
                PlainTextContent = content
            };
            msg.AddTo("dziedzic.k@hotmail.com");

            var response = await _sendGridClient.SendEmailAsync(msg);

        }

    }
}
