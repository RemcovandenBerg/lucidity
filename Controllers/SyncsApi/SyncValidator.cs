using FluentValidation;

public class SyncValidator : AbstractValidator<Sync>
{


    public SyncValidator()
    {
        RuleFor(x => x.QueryId).NotEmpty();

        RuleFor(x => x.SourceServerId).NotEmpty();
        RuleFor(x => x.TargetServerId).NotEmpty();

        RuleFor(x => x.CronSchedule).NotEmpty().When(x => x.IsScheduleEnabled);

        RuleFor(x => x.RowVersion).NotEmpty().When(c => c.Id != 0);
    }
}