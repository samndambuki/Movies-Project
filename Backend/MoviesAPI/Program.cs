
using MoviesAPI.Controllers;
using MoviessAPI;

namespace MoviesAPI;
public class Program
{

 public static void Main(string[] args)
 {
        //var weatherForecastController = new WeatherForecastController();
        //weatherForecastController.Get();
        //var genresController = new GenresController(new InMemoryRepository(new Logger()));


  CreateHostBuilder(args).Build().Run();

 }
 public static IHostBuilder CreateHostBuilder(string[] args) =>
 Host.CreateDefaultBuilder(args)
 .ConfigureWebHostDefaults(WebHostBuilder =>
 {
     
  WebHostBuilder.UseStartup<Startup>();
 });
}