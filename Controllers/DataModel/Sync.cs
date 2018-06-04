

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Sync")]
public class Sync
{

    public int Id { get; set; }

    
    [Timestamp]
    public byte[] RowVersion { get; set; }
}
