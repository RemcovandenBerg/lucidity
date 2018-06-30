using FluentValidation;

public class QueryValidator: AbstractValidator<Query> {


    public QueryValidator()
    {
        RuleFor(x => x.Text).NotEmpty();
        RuleFor(x => x.Name).NotEmpty();
    
        RuleFor(x => x.RowVersion).NotEmpty().When( c=> c.Id != 0 );
    }
}