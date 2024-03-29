using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using MoviesAPI;
using MoviesAPI.APIBehabior;
using MoviesAPI.Filters;
using MoviesAPI.Helpers;

namespace MoviessAPI;
public class Startup
{
 public Startup(IConfiguration configuration)
 {
  Configuration = configuration;
 }
 public IConfiguration Configuration { get; }
 public void ConfigureServices(IServiceCollection services)
 {

        services.AddControllersWithViews();       
      

        services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        services.AddControllers(options =>
        {
            options.Filters.Add(typeof(MyExceptionFilter));
            options.Filters.Add(typeof(ParseBadRequest));

        }).ConfigureApiBehaviorOptions(BadRequestsBehavior.Parse);


        services.AddCors(options =>
        {
            var frontendURL = Configuration.GetValue<string>("frontend_url");
            options.AddDefaultPolicy(builder =>
            {
                builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader()
                .WithExposedHeaders(new string[] { "totalAmountOfRecords" });
            });

        });

        services.AddAutoMapper(typeof(Startup));
        services.AddScoped<IFileStorageService,AzureStorageService>();
        


        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
       

  // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
  services.AddEndpointsApiExplorer();
  services.AddSwaggerGen();
       
 }

 public void Configure(IApplicationBuilder app, IWebHostEnvironment env,ILogger<Startup>logger)
 {

  if (env.IsDevelopment())
  {
   app.UseSwagger();
   app.UseSwaggerUI();
  }

  app.UseHttpsRedirection();
  app.UseRouting();
  app.UseCors(x=>x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().WithExposedHeaders("totalAmountOfRecords")); 
  app.UseAuthentication();
  app.UseAuthorization();
  app.UseEndpoints(endpoints =>{
   endpoints.MapControllers();
  });
 }
}