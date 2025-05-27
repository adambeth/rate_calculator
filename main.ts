type InvestmentData = {
  initialAmount: number;
  anualContributions: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResults = {
  year: number;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

let data: InvestmentData = {
  initialAmount: 2000,
  anualContributions: 3000,
  expectedReturn: 12,
  duration: 12,
};

type CalculationResults = InvestmentResults[] | string;
let results: InvestmentResults[] = [];

function calculateInvestment(
  data: InvestmentData
): InvestmentResults[] | string {
  const { initialAmount, anualContributions, expectedReturn, duration } = data;

  if (!initialAmount || !anualContributions || !expectedReturn || !duration) {
    return "Invalid Data";
  } else {
    let resultsCalculated: InvestmentResults = {
      year: 10,
      totalAmount: 200,
      totalContributions: 2000,
      totalInterestEarned: 20,
    };
    results = [...results, resultsCalculated];
    return results;
  }
}
function printResults(resultsArray: CalculationResults): void {
  if (typeof resultsArray === "string") {
    console.log("nope");
  } else {
    resultsArray.forEach((element) => {
      console.log("NEW ELELEMT");
      console.log(element);
    });
    console.log("s");
  }
}
console.log(calculateInvestment(data));
console.log(calculateInvestment(data));
console.log(calculateInvestment(data));
printResults(results);
