using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lucidity.Controllers
{

    //TODO Refactor to generic CrudController..<T>

    [Route("api/[controller]")]
    public class QueriesController : Controller
    {
        private readonly DataContext dataContext;


        public QueriesController(DataContext dtc)
        {
            dataContext = dtc;
        }


        [HttpGet]
        public IEnumerable<Query> Get()
        {
            return dataContext.Queries.ToList();
        }

        [HttpGet("{id:int}")]
        public Query Get(int id)
        {
            return dataContext.Queries.Find(id);
        }

        [HttpPost]
        public ActionResult<Query> Post([FromBody] Query query)
        {
            if (query.Id == 0)
                dataContext.Queries.Add(query);
            else
                dataContext.Queries.Update(query);
            try
            {
                dataContext.SaveChanges();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)    
            {
                return Conflict(UserMessages.Conflict(nameof(query)));
            }
        }
        // As POST, cause HTTP delete should not accept a body ( and we need the rowversion)
        [HttpPost("{id:int}/delete")] 
        public ActionResult Delete([FromBody] Query query)
        {
            if (query.Id == 0) return NotFound();
            try {
                //Op deze manier wordt ook de rowversion meegecheck
                dataContext.Queries.Attach(query);
                dataContext.Queries.Remove(query);
                dataContext.SaveChanges(); 
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                 return Conflict(UserMessages.Conflict(nameof(query)));
            }
        }



    }
}
