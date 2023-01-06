using AutoMapper;
using GradesBook.Entities;
using GradesBook.Models;
using Microsoft.EntityFrameworkCore;

namespace GradesBook.Services
{
    public class PeriodicService: BackgroundService
    {
        private IServiceScopeFactory _Services { get; }

        public PeriodicService(IServiceScopeFactory Services)
        {
            _Services = Services;
           
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                using (var scope = _Services.CreateScope())
                {
                    var parentService = scope.ServiceProvider.GetRequiredService<IParentService>();
                    var periodStatistics = parentService.ConvertToStatisticsEmail();

                    var emailService = scope.ServiceProvider.GetRequiredService<IEmailSrvice>();

                    emailService.SendStats(periodStatistics);
                }



                await Task.Delay(1200000);
            }
        }
    }
}
