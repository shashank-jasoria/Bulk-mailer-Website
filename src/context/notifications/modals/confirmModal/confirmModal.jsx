import "./confirmmodal.css";

export default function ConfirmModal({ notification, onClose }) {
  async function handleConfirm() {
    try {
      if (notification.onConfirm) {
        await notification.onConfirm();
      }

      onClose();
    } catch (error) {
      console.error("Notification action failed:", error);
    }
  }

  return (
    <div className="delete-modal-overlay">
      <div
        className="delete-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
      >
        {/* Close Button */}
        <button
          className="delete-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Delete Icon */}
        <div className="delete-modal-icon">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5" />
            <path d="M14 11v5" />
          </svg>
        </div>

        {/* Heading */}
        <h2 id="delete-modal-title" className="delete-modal-title">
          {notification.title}
        </h2>

        {/* Description */}
        <p className="delete-modal-description">{notification.message}</p>

        {/* Item Information */}
        {/* <div className="delete-modal-details">
          {item.name && (
            <div className="delete-detail-row">
              <span className="delete-detail-label">Name</span>
              <span className="delete-detail-value">{item.name}</span>
            </div>
          )}

          {item.company && (
            <div className="delete-detail-row">
              <span className="delete-detail-label">Company</span>
              <span className="delete-detail-value">{item.company}</span>
            </div>
          )}

          {item.url && (
            <div className="delete-detail-row">
              <span className="delete-detail-label">URL</span>
              <span
                className="delete-detail-value delete-detail-url"
                title={item.url}
              >
                {item.url}
              </span>
            </div>
          )}
        </div> */}

        {/* Actions */}
        <div className="delete-modal-actions">
          <button
            type="button"
            className="delete-modal-button delete-modal-cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="delete-modal-button delete-modal-confirm"
            onClick={handleConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
