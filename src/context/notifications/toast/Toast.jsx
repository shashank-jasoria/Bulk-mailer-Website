import "./toast.css";
export default function Toast({ toast, onClose }) {
  const { type, title, message, progress } = toast;

  const config = {
    uploading: {
      icon: "●",
      defaultTitle: "uploading",
    },
    success: {
      icon: "✓",
      defaultTitle: "success",
    },
    error: {
      icon: "!",
      defaultTitle: "error",
    },
    warning: {
      icon: "!",
      defaultTitle: "warning",
    },
    info: {
      icon: "i",
      defaultTitle: "information",
    },
  };

  const current = config[type] || config.info;

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-accent" />

      <div className="toast-content">
        <div className="toast-main">
          <span className="toast-icon">{current.icon}</span>

          <div className="toast-text">
            <div className="toast-title">{title || current.defaultTitle}</div>

            {message && <div className="toast-message">{message}</div>}
          </div>
        </div>

        <button
          type="button"
          className="toast-close"
          onClick={() => onClose(toast.id)}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>

      {type === "uploading" && typeof progress === "number" && (
        <div className="toast-progress-wrapper">
          <div className="toast-progress">
            <div
              className="toast-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="toast-progress-value">{progress}%</span>
        </div>
      )}
    </div>
  );
}
