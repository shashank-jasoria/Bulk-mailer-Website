import "./AccountAccessModal.css";

export default function AccountAccessModal({ notification, onClose }) {
  const {
    type,
    title,
    message,
    actionText,
    onAction,
    startingPrice,
    billingPeriod = "month",
    modalWidth = 360,
    cancelText = "Continue Free",
    icon,
  } = notification;

  const isFeature = type === "account-feature";

  function handleAction() {
    if (onAction) {
      onAction();
    }

    onClose();
  }

  return (
    <div className="account-modal-overlay" role="presentation">
      <div
        className="account-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-modal-title"
        aria-describedby="account-modal-message"
        style={{
          "--account-modal-width":
            typeof modalWidth === "number" ? `${modalWidth}px` : modalWidth,
        }}
      >
        {/* Close */}
        <button
          type="button"
          className="account-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M18 6 6 18M6 6l12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Icon */}
        <div
          className={`account-modal-icon ${
            isFeature
              ? "account-modal-icon--feature"
              : "account-modal-icon--limit"
          }`}
        >
          {isFeature ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="account-modal-crown"
            >
              <path
                d="M4.2 17.5h15.6l1.2-9-5.1 3.2L12 5.3l-3.9 6.4L3 8.5l1.2 9Z"
                fill="currentColor"
              />
              <path
                d="M5 19.2h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            icon || <span aria-hidden="true">!</span>
          )}
        </div>

        {/* Content */}
        <div className="account-modal-content">
          <h2 id="account-modal-title" className="account-modal-title">
            {title}
          </h2>

          <p id="account-modal-message" className="account-modal-message">
            {message}
          </p>
        </div>

        {/* Dynamic plan price */}
        {startingPrice && (
          <div className="account-modal-plan">
            <svg
              className="account-modal-plan-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20 13 13 20 4 11V4h7l9 9Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" />
            </svg>

            <span>
              Plans starting from{" "}
              <strong>
                {startingPrice}/{billingPeriod}
              </strong>
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="account-modal-actions">
          <button
            type="button"
            className="account-modal-cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>

          {actionText && (
            <button
              type="button"
              className="account-modal-action"
              onClick={handleAction}
            >
              {actionText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
