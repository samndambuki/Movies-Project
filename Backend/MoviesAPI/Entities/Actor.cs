using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Actor
    {
        public int Id { get; set; }
        [Required]
        [StringLength(120)]
        public string Name { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string  Biography { get; set; } = string.Empty;
        public string Picture {get;set;} = string.Empty;
    }
}