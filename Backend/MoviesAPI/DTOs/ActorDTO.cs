namespace MoviesAPI.DTOs
{
    public class ActorDTO
    {
        public int Id{get;set;}
        public string Name { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string  Biography { get; set; } = string.Empty;
        public string Picture {get;set;} = string.Empty;

    }
}