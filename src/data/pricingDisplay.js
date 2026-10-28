const internationalOldPrices = {
  core: "$3.99",
  pro: "$7.99",
};

export function getLaunchOldPrice(planId, currency, indianOldPrice = null) {
  if (currency === "USD") {
    return internationalOldPrices[planId] ?? null;
  }

  if (currency === "INR") {
    return indianOldPrice ?? null;
  }

  return null;
}
