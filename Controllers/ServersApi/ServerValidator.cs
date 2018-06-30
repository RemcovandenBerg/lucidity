using FluentValidation;
using lucidity.Controllers;

public class ServerValidator: AbstractValidator<Server>
{
    public ServerValidator()
    {
        RuleFor(x => x.Database).NotEmpty().MaximumLength(100);
        RuleFor(x => x.Hostname).NotEmpty().MaximumLength(200);
        RuleFor(x => x.Portnumber).NotEmpty().GreaterThanOrEqualTo(1);

        RuleFor(x => x.RowVersion).NotEmpty().When( c=> c.Id != 0 );
    }

}
