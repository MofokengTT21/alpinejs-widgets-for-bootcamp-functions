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
