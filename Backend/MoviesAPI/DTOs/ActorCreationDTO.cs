using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class ActorCreationDTO
    {
        [Required]
        [StringLength(120)]
        public string Name { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string  Biography { get; set; } = string.Empty;
        public IFormFile Picture {get;set;}
    }
}