
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("query")]
public class Query
{
    public int Id { get; set; }

    public string Text { get; set; }

    [Timestamp]
    [ConcurrencyCheck]

    public byte[] RowVersion { get; set; }

}
