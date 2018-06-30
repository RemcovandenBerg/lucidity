using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lucidity.Controllers
{

    //TODO Refactor to generic CrudController..<T>

    [Route("api/[controller]")]
    public class SyncsController : Controller
    {
        private readonly DataContext dataContext;


        public SyncsController(DataContext dtc)
        {
            dataContext = dtc;
        }


        [HttpGet]
        public IEnumerable<Sync> Get()
        {
            return dataContext.Syncs.ToList();
        }

        [HttpGet("{id:int}")]
        public Sync Get(int id)
        {
            return dataContext.Syncs.Find(id);
        }

        [HttpPost]
        public ActionResult<Sync> Post([FromBody] Sync sync)
        {
            sync.SourceServer = null;
            sync.TargetServer = null;
            sync.Query = null;

            if (sync.Id == 0)
                dataContext.Syncs.Add(sync);
            else
                dataContext.Syncs.Update(sync);
            try
            {
                dataContext.SaveChanges();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Conflict(UserMessages.Conflict(nameof(sync)));
            }
            catch (SqlException)
            {
                // TODO: handle errors in generic error handlers:
                // example code
                // https://www.devtrends.co.uk/blog/handling-errors-in-asp.net-core-web-api
                throw;
            }
        }
        // As POST, cause HTTP delete should not accept a body ( and we need the rowversion)
        [HttpPost("{id:int}/delete")]
        public ActionResult Delete([FromBody] Sync sync)
        {
            if (sync.Id == 0) return NotFound();
            try
            {
                //Op deze manier wordt ook de rowversion meegecheck
                dataContext.Syncs.Attach(sync);
                dataContext.Syncs.Remove(sync);
                dataContext.SaveChanges();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Conflict(UserMessages.Conflict(nameof(sync)));
            }
        }
    }
}
