// Total Phone Bill Function
function airtimeCalculator() {
  return {
    usageString: "",
    availableAirtime: 0,
    remainingAirtime: "0.00",

    calculateRemainingAirtime() {
      const usageArray = this.usageString.split(",");
      let totalCost = 0;

      const costs = {
        call: 1.88,
        data: 12.0,
        sms: 0.75,
      };

      usageArray.forEach((usage) => {
        totalCost += costs[usage] || 0;
      });

      const remainingAirtime = this.availableAirtime - totalCost;
      this.remainingAirtime =
        remainingAirtime > 0 ? remainingAirtime.toFixed(2) : "0.00";
    },
  };
}
//Word game
function wordPuzzleHelper() {
  return {
    sentence: "",
    longestWord: "",
    shortestWord: "",
    totalLength: 0,

    findLongestWord() {
      const words = this.sentence.split(/\s+/);
      this.longestWord = words.reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        ""
      );
    },

    findShortestWord() {
      const words = this.sentence.split(/\s+/);
      this.shortestWord = words.reduce(
        (shortest, word) => (word.length < shortest.length ? word : shortest),
        words[0] || ""
      );
    },

    calculateWordLengths() {
      const words = this.sentence.split(/\s+/);
      this.totalLength = words.reduce((sum, word) => sum + word.length, 0);
    },
  };
}
