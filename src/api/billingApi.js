import apiRequest from "./apiClient";

export async function resolveCheckoutContext(contextId) {
  return apiRequest("/billing/checkout-context/resolve", {
    method: "POST",

    body: JSON.stringify({
      contextId,
    }),
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
