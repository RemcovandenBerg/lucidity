    using lucidity.Controllers;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }

    protected DataContext(): this(null)
    {

    }


    public DbSet<Server> Servers { get; set; }

    public DbSet<Query> Queries { get; set; }

    public DbSet<Sync> Syncs { get; set; }

}
