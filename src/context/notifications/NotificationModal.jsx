import AccountAccessModal from "./modals/AccountAccessModal/AccountAccessModal";
import ConfirmModal from "./modals/confirmModal/confirmModal";
import ValidationModal from "./modals/ValidationModal.jsx/ValidationModal";
import useNotification from "./useNotification";

export default function NotificationModal() {
  const { notification, closeNotification } = useNotification();

  if (!notification) {
    return null;
  }

  if (notification.type === "confirm") {
    return (
      <ConfirmModal notification={notification} onClose={closeNotification} />
    );
  }

  if (notification.type === "validation") {
    return (
      <ValidationModal
        notification={notification}
        onClose={closeNotification}
      />
    );
  }

  if (
    notification.type === "account-limit" ||
    notification.type === "account-feature"
  ) {
    return (
      <AccountAccessModal
        notification={notification}
        onClose={closeNotification}
      />
    );
  }

  return null;
}
