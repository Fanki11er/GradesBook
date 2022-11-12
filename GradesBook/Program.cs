using GradesBook.DatabaseSeaders;
using GradesBook.Entities;
using GradesBook.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<GradesBookDbContext>(
    option => option.UseSqlServer(builder.Configuration.GetConnectionString("GradesBookConnectionString"))
   
    );

builder.Services.AddScoped<DatabaseSeeder, DatabaseSeeder>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IClassService, ClassService>();

var app = builder.Build();



SeedDatabase(); 
//can be placed above app.UseStaticFiles();  
    void SeedDatabase() //can be placed at the very bottom under app.Run()
{
    using (var scope = app.Services.CreateScope())
    {
        var dbInitializer = scope.ServiceProvider.GetRequiredService<DatabaseSeeder>();
        dbInitializer.Seed();
    };
}


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    
  //  app.UseMigrationsEndPoint();
}
else
{
    app.UseHsts();
}



app.UseCors(x => x
               .AllowAnyMethod()
               .AllowAnyHeader()
               .SetIsOriginAllowed(origin => true) // allow any origin
               .AllowCredentials());
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
