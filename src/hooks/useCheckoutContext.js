import { useEffect, useState } from "react";
import { consumeCheckoutContext } from "../api/billingApi";

export function useCheckoutContext(user, authLoading) {
  const [checkoutContext, setCheckoutContext] = useState(null);
  const [checkoutContextLoading, setCheckoutContextLoading] = useState(false);

  useEffect(() => {
    if (authLoading) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const contextId = params.get("checkout_context");

    if (!contextId) {
      return;
    }

    // Don't consume until website authentication is known.
    if (!user) {
      return;
    }

    let cancelled = false;

    async function consume() {
      try {
        setCheckoutContextLoading(true);

        const data = await consumeCheckoutContext(contextId);

        if (!cancelled) {
          setCheckoutContext(data.context);
        }
      } catch (error) {
        console.error("Failed to consume checkout context:", error);
      } finally {
        if (!cancelled) {
          setCheckoutContextLoading(false);
        }
      }
    }

    consume();

    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  return {
    checkoutContext,
    checkoutContextLoading,
  };
}
