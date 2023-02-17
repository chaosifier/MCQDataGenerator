public class WeightedChanceExecutor
{
    public WeightedChanceParam[] Parameters { get; }
    private Random r;

    public double RatioSum
    {
        get { return Parameters.Sum(p => p.Ratio); }
    }

    public WeightedChanceExecutor(WeightedChanceParam[] parameters)
    {
        Parameters = parameters;
        r = new Random();
    }

    public string Execute()
    {
        double numericValue = r.NextDouble() * RatioSum;

        foreach (var parameter in Parameters)
        {
            numericValue -= parameter.Ratio;

            if (!(numericValue <= 0))
                continue;

            return parameter.OptionText;
        }

        return string.Empty;
    }
}
public class WeightedChanceParam
{
    public string OptionText { get; }
    public double Ratio { get; }

    public WeightedChanceParam(string optionText, double ratio)
    {
        OptionText = optionText;
        Ratio = ratio;
    }
}