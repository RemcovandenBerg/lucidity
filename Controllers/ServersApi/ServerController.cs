using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lucidity.Controllers
{
    [Route("api/[controller]")]
    public class ServersController : Controller
    {
        private readonly DataContext _dataContext;

        public ServersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public IEnumerable<Server> Get()
        {
            return _dataContext.Servers.ToList();
        }

        [HttpGet("{id:int}")]
        public Server Get(int id)
        {
            return _dataContext.Servers.Find(id);
        }

        [HttpPost]
        public ActionResult<Server> Post(Server server)
        {
            if (server.Id == 0)
                _dataContext.Servers.Add(server);
            else
                _dataContext.Servers.Update(server);
            try
            {
                _dataContext.SaveChanges();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Conflict("Server has already been changed, reload and try again.");
            }
        }
    }
}
