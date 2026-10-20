import apiRequest from "./apiClient";

export async function resolveCheckoutContext(contextId) {
  return apiRequest("/billing/checkout-context/resolve", {
    method: "POST",

    body: JSON.stringify({
      contextId,
    }),
  });
}

export async function getRegionalPricing() {
  return apiRequest("/billing/pricing", {
    method: "GET",
  });
}

export async function getBillingStatus({ checkoutContextId } = {}) {
  return apiRequest("/billing/status", {
    method: "POST",

    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,
    }),
  });
}

export async function createCheckout({ checkoutContextId, tierKey }) {
  return apiRequest("/billing/checkout", {
    method: "POST",

    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,

      tierKey,
    }),
  });
}

export async function changePlan({ checkoutContextId, tierKey }) {
  return apiRequest("/billing/change-plan", {
    method: "POST",

    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,

      tierKey,
    }),
  });
}

export async function cancelSubscription({ checkoutContextId } = {}) {
  return apiRequest("/billing/cancel", {
    method: "POST",

    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,
    }),
  });
}

export async function verifyRazorpayAuthorization({
  checkoutContextId,
  subscriptionId,
  paymentId,
  signature,
}) {
  return apiRequest("/billing/razorpay/verify-authorization", {
    method: "POST",
    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,
      subscriptionId,
      paymentId,
      signature,
    }),
  });
}

export async function abandonRazorpayCheckout({
  checkoutContextId,
  subscriptionId,
}) {
  return apiRequest("/billing/cancel", {
    method: "POST",
    body: JSON.stringify({
      checkoutContextId: checkoutContextId || undefined,
      abandonedCheckoutSubscriptionId: subscriptionId,
    }),
  });
}
