import { useState } from "react";
import NotificationContext from "./NotificationContext";
import NotificationModal from "./NotificationModal";

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [toasts, setToasts] = useState([]);
  function showNotification(notificationData) {
    setNotification(notificationData);
  }

  function showConfirm({
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
  }) {
    setNotification({
      type: "confirm",
      title,
      message,
      confirmText,
      cancelText,
      onConfirm,
    });
  }

  function showValidation(data) {
    setNotification({
      type: "validation",
      ...data,
    });
  }

  function showToast({
    type = "success",
    title = "",
    message = "",
    progress = null,
    duration = 4000,
  }) {
    const id = crypto.randomUUID();

    const newToast = {
      id,
      type,
      title,
      message,
      progress,
    };

    setToasts((previous) => [...previous, newToast]);

    // duration = 0 means:
    // don't automatically remove the toast
    if (duration > 0) {
      setTimeout(() => {
        closeToast(id);
      }, duration);
    }

    return id;
  }

  function updateToast(id, updates) {
    setToasts((previous) =>
      previous.map((toast) =>
        toast.id === id
          ? {
              ...toast,
              ...updates,
            }
          : toast,
      ),
    );

    if (updates.type === "success" || updates.type === "error") {
      setTimeout(() => {
        closeToast(id);
      }, 4000);
    }
  }

  function closeToast(id) {
    setToasts((previous) => previous.filter((toast) => toast.id !== id));
  }

  function closeNotification() {
    setNotification(null);
  }

  function showLimitReached({
    title,
    message,
    actionText = null,
    onAction = null,
    icon = null,
  }) {
    setNotification({
      type: "account-limit",
      title,
      message,
      actionText,
      onAction,
      icon,
    });
  }

  function showLockedFeature({
    title,
    message,
    actionText = null,
    onAction = null,
    startingPrice = null,
    billingPeriod = "month",
    modalWidth = 260,
    cancelText = "Continue Free",
  }) {
    setNotification({
      type: "account-feature",
      title,
      message,
      actionText,
      onAction,
      startingPrice,
      billingPeriod,
      modalWidth,
      cancelText,
    });
  }

  return (
    <NotificationContext.Provider
      value={{
        notification,
        showNotification,
        showConfirm,
        closeNotification,
        showValidation,
        showLimitReached,
        showLockedFeature,
        toasts,
        showToast,
        updateToast,
        closeToast,
      }}
    >
      {children}

      {/* Notification is rendered above the sidebar content */}
      <NotificationModal />
    </NotificationContext.Provider>
  );
}
