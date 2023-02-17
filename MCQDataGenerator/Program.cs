using System.Text;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Welcome to MCQ Data Generator!");

        while (true)
            begin();
    }

    private static void begin()
    {
        string csvFilePath = getFilePath();

        StreamReader sr = new StreamReader(csvFilePath);

        // skip header
        var header = sr.ReadLine();

        var headerCols = header.Split(new[] { ',' });
        var noOfCols = headerCols.Length;

        var recordsWithOptions = new List<string>[noOfCols];
        for (int i = 0; i < recordsWithOptions.Length; i++)
        {
            recordsWithOptions[i] = new List<string>();
        }

        int noOfRecords = 0;
        while (!sr.EndOfStream)
        {
            var curRow = sr.ReadLine();
            var cols = curRow.Split(new[] { ',' }).ToList();

            for (int i = 0; i < noOfCols; i++)
            {
                var curColVal = cols[i];
                recordsWithOptions[i].Add(curColVal);
            }
            noOfRecords++;
        }

        sr.Close();

        for (int i = 0; i < noOfRecords; i++)
        {
            Console.WriteLine($"Question {i + 1} options : [{string.Join(", ", recordsWithOptions[i])})]");
        }

        var colOptionsWithProbabilities = new List<WeightedChanceParam>[noOfCols];
        for (int i = 0; i < colOptionsWithProbabilities.Length; i++)
        {
            var curRecWithOptions = recordsWithOptions[i];
            var optionGroups = curRecWithOptions.GroupBy(o => o);

            colOptionsWithProbabilities[i] = optionGroups
            .Select(og => new WeightedChanceParam(og.Key, (double)og.Count() / curRecWithOptions.Count))
            .ToList();
        }

        int noOfResponsesToGenerate = 0;
        while (noOfResponsesToGenerate <= 0)
        {
            Console.WriteLine("Enter the number of new responses to generate.");
            try
            {
                noOfResponsesToGenerate = int.Parse(Console.ReadLine().Trim());
            }
            catch
            {
                Console.WriteLine("Invalid number!");
            }
        }

        Console.WriteLine(new string('#', 20));
        Console.WriteLine($"Generating {noOfResponsesToGenerate} responses based on data provided.");

        TextReader tr = new StreamReader(csvFilePath);
        StringBuilder newFileContents = new StringBuilder(tr.ReadToEnd());
        tr.Close();

        for (int i = 0; i < noOfResponsesToGenerate; i++)
        {
            List<string> newRecordAnswers = new List<string>();
            foreach (var colOptionWithProb in colOptionsWithProbabilities)
            {
                var wce = new WeightedChanceExecutor(colOptionWithProb.ToArray());
                var selectedOption = wce.Execute();

                newRecordAnswers.Add(selectedOption);
            }

            string newRow = string.Join(",", newRecordAnswers);

            newFileContents.Append(Environment.NewLine + newRow);
            Console.WriteLine($"New response {i + 1} : {newRow}");
        }

        // write to new file
        string curFilePath = Path.GetDirectoryName(csvFilePath);
        string curFileName = Path.GetFileNameWithoutExtension(csvFilePath);
        string newFileName = curFileName + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") + ".csv";
        string newFilePath = Path.Combine(curFilePath, newFileName);

        File.WriteAllText(newFilePath, newFileContents.ToString());

        Console.WriteLine($"Changes written to new file : {newFilePath}");

        Console.WriteLine("Done!");
        Console.ReadKey();
    }

    private static string getFilePath()
    {
        var csvFilePath = string.Empty;
        while (string.IsNullOrWhiteSpace(csvFilePath))
        {
            Console.WriteLine("Please enter the full path of the csv file.");
            csvFilePath = Console.ReadLine();

            if (!File.Exists(csvFilePath) || Path.GetExtension(csvFilePath).ToLowerInvariant() != ".csv")
            {
                Console.WriteLine("Invalid csv file.");
                csvFilePath = string.Empty;
            }
        }
        return csvFilePath;
    }
}