﻿using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Helpers;

namespace MoviesAPI.Controllers
{
 [Route("api/genres")]
 [ApiController]
 public class GenresController : ControllerBase
 {


  private readonly ILogger<GenresController> logger;
  private readonly ApplicationDbContext context;
  private readonly IMapper mapper;

  public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
  {

   this.logger = logger;
   this.context = context;
   this.mapper = mapper;
  }

  [HttpGet("GetAllGenres")]
  public async Task<ActionResult<List<GenreDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
  {
   var queryable = context.Genres.AsQueryable();
   await HttpContext.InsertParametersPaginationInHeader(queryable);
   var genres = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
   return mapper.Map<List<GenreDTO>>(genres);
  }


  [HttpGet("{Id:int}")]
  public async Task<ActionResult<GenreDTO>> Get(int Id)
  {
   var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);
   if (genre == null)
   {
    return NotFound();
   }
   return mapper.Map<GenreDTO>(genre);

  }


  [HttpPost]
  public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)

  {
   var genre = mapper.Map<Genre>(genreCreationDTO);
   context.Add(genre);
   await context.SaveChangesAsync();
   return NoContent();

  }
  [HttpPut("{id:int}")]
  public async Task <ActionResult> Put(int id,[FromBody] GenreCreationDTO genreCreationDTO)
  {
   var genre = await context.Genres.FirstOrDefaultAsync(x=>x.Id == id);
   if(genre==null){
    return NotFound();
   }
   genre = mapper.Map(genreCreationDTO,genre);
   await context.SaveChangesAsync();
   return NoContent();
  }

  [HttpDelete("{id:int}")]
  public async Task <ActionResult> Delete(int id)
  {
   //look if record exists
   var exists = await context.Genres.AnyAsync(x => x.Id == id);
   if(!exists)
   {
    return NotFound();
   }
   //creating instance of genre class 
   //pass it to remove method of entity framework core
   //pass record of id to be deleted
   //save changes - save query you want to delete
   context.Remove(new Genre(){Id = id});
   await context.SaveChangesAsync();
   return NoContent();
  }
 }
}
