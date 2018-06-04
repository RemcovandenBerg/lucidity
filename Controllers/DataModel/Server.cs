using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lucidity.Controllers
{
    [Table("Server")]
    public class Server
    {
        public int Id { get; set; }

        public string Hostname { get; set; }

        public int Portnumber { get; set; }

        public string Database { get; set; }

        public DatabaseType Type { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}