using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;


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
        public IEnumerable<Server> Get(){
            return _dataContext.Servers.ToList();
        }

        [HttpGet("{id:int}")]
        public Server Get(int id){
            return _dataContext.Servers.Find(id);
        }
    }
}