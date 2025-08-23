using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using ASP_Dot_Net_MVC_CRUD_Template.Models;
using System.Security.Claims; 
using System.Linq;

namespace ASP_Dot_Net_MVC_CRUD_Template.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ItemController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll() => Ok(_context.Items.ToList());

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var item = _context.Items.Find(id);
            return item == null ? NotFound() : Ok(item);
        }

        [Authorize]
        [HttpPost]
        public IActionResult Create([FromBody] Item item)
        {
            item.UserId = int.Parse(User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value);
            _context.Items.Add(item);
            _context.SaveChanges();
            return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Item item)
        {
            var existing = _context.Items.Find(id);
            if (existing == null) return NotFound();

            existing.SampleString = item.SampleString;
            existing.SampleNumber = item.SampleNumber;
            existing.SampleDecimal = item.SampleDecimal;
            existing.SampleDouble = item.SampleDouble;
            existing.SampleFloat = item.SampleFloat;
            existing.SampleBool = item.SampleBool;
            existing.SampleCharacter = item.SampleCharacter;

            _context.Items.Update(existing);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = _context.Items.Find(id);
            if (item == null) return NotFound();

            _context.Items.Remove(item);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
