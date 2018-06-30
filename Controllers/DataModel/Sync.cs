

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using lucidity.Controllers;

[Table("Sync")]
public class Sync
{
    public int Id { get; set; }

    [Column("SourceServer_Id")]
    public int SourceServerId { get; set; }

    [ForeignKey("SourceServerId")]
    public Server SourceServer { get; set; }


    [Column("TargetServer_Id")]
    public int TargetServerId { get; set; }

    [ForeignKey("TargetServerId")]

    public Server TargetServer { get; set; }

    [Column("Query_Id")]
    public int QueryId { get; set; }
    public Query Query { get; set; }

    public bool IsScheduleEnabled { get; set; }

    public string CronSchedule { get; set; }

    [Timestamp]
    [ConcurrencyCheck]
    public byte[] RowVersion { get; set; }
}
