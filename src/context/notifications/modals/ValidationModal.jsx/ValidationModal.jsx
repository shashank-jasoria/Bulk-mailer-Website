import { useState } from "react";
import "./validationModal.css";

export default function ValidationModal({ notification, onClose }) {
  const {
    title,
    message,
    fields = [],
    checkbox,
    submitText = "Save",
    cancelText = "Cancel",
    onSubmit,

    // Everything below is OPTIONAL
    variant = "default",
    infoBox = null,
    modalWidth = null,
    submitIcon = null,
    headerIcon = null,
  } = notification;

  const isUnverifiedEmail = variant === "unverified-email";

  const [values, setValues] = useState(() => {
    const initialValues = {};

    fields.forEach((field) => {
      initialValues[field.name] = field.value || "";
    });

    return initialValues;
  });

  const [checkboxValue, setCheckboxValue] = useState(checkbox?.value ?? false);

  function handleChange(fieldName, value) {
    setValues((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  }

  async function handleSubmit() {
    for (const field of fields) {
      if (field.required && !values[field.name]?.trim()) {
        return;
      }
    }

    if (!onSubmit) {
      onClose();
      return;
    }

    try {
      onClose();

      await onSubmit({
        ...values,

        ...(checkbox
          ? {
              [checkbox.name]: checkboxValue,
            }
          : {}),
      });
    } catch (error) {
      console.error("Validation modal submit failed:", error);
    }
  }

  const modalStyle = modalWidth
    ? {
        "--required-modal-width":
          typeof modalWidth === "number" ? `${modalWidth}px` : modalWidth,
      }
    : undefined;

  return (
    <div
      className={`required-modal-overlay ${
        isUnverifiedEmail ? "required-modal-overlay--unverified" : ""
      }`}
    >
      <div
        className={`required-modal ${
          isUnverifiedEmail ? "required-modal--unverified" : ""
        }`}
        style={modalStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="required-modal-title"
        aria-describedby="required-modal-message"
      >
        {/* Close */}
        <button
          type="button"
          className="required-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          {isUnverifiedEmail ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="required-close-svg"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            "×"
          )}
        </button>

        {/* =========================
            OPTIONAL / SPECIAL ICON
           ========================= */}

        {isUnverifiedEmail ? (
          headerIcon || <UnverifiedEmailIcon />
        ) : (
          <div className="required-modal-icon">
            {headerIcon || <span>!</span>}
          </div>
        )}

        {/* Header */}
        <div className="required-modal-header">
          <h2 id="required-modal-title">{title}</h2>

          {message && <p id="required-modal-message">{message}</p>}
        </div>

        {/* Dynamic Fields */}
        {(fields.length > 0 || checkbox) && (
          <div className="required-modal-fields">
            {fields.map((field) => (
              <div className="required-field" key={field.name}>
                <label htmlFor={field.name}>
                  {field.label}

                  {field.required !== false && (
                    <span className="required-star">*</span>
                  )}
                </label>

                <div className="required-input-wrapper">
                  {field.icon && (
                    <span className="required-input-icon">{field.icon}</span>
                  )}

                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type || "text"}
                    value={values[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                  />
                </div>

                {field.error && (
                  <span className="required-field-error">{field.error}</span>
                )}
              </div>
            ))}

            {/* Optional Checkbox */}
            {checkbox && (
              <label
                className={`required-checkbox ${
                  checkbox.card ? "required-checkbox--card" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkboxValue}
                  onChange={(event) => setCheckboxValue(event.target.checked)}
                />

                {/* Custom checkbox visual only for enhanced design */}
                {isUnverifiedEmail && checkbox.card && (
                  <span
                    className="required-checkbox-control"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20">
                      <path
                        d="m4 10 4 4 8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}

                <span className="required-checkbox-content">
                  <span className="required-checkbox-label">
                    {checkbox.label}
                  </span>

                  {checkbox.description && (
                    <span className="required-checkbox-description">
                      {checkbox.description}
                    </span>
                  )}
                </span>
              </label>
            )}
          </div>
        )}

        {/* =========================
            OPTIONAL INFO BOX
           ========================= */}

        {infoBox && (
          <div className="required-info-box">
            <div className="required-info-icon" aria-hidden="true">
              <span>i</span>
            </div>

            <div className="required-info-content">
              {infoBox.title && (
                <div className="required-info-title">{infoBox.title}</div>
              )}

              {infoBox.description && (
                <div className="required-info-description">
                  {infoBox.description}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="required-modal-actions">
          <button
            type="button"
            className="required-btn required-btn-cancel"
            onClick={onClose}
          >
            {cancelText}
          </button>

          <button
            type="button"
            className="required-btn required-btn-submit"
            onClick={handleSubmit}
          >
            {submitIcon === "send" && (
              <svg
                className="required-submit-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M21 3 9.5 14.5M21 3l-7 18-4.5-6.5L3 10 21 3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            <span>{submitText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Special header illustration

   This only renders for variant="unverified-email".
   ========================================================= */

function UnverifiedEmailIcon() {
  return (
    <div className="required-unverified-illustration" aria-hidden="true">
      <div className="required-unverified-glow" />

      <svg className="required-envelope-icon" viewBox="0 0 100 100">
        {/* Back letter */}
        <rect
          x="29"
          y="23"
          width="48"
          height="43"
          rx="7"
          className="required-envelope-paper"
        />

        <path d="M36 34h32M36 42h24" className="required-envelope-lines" />

        {/* Envelope body */}
        <path
          d="M20 43c0-5 4-9 9-9h45c5 0 9 4 9 9v31c0 5-4 9-9 9H29c-5 0-9-4-9-9V43Z"
          className="required-envelope-body"
        />

        <path d="m23 42 28 23 29-23" className="required-envelope-fold" />

        <path d="m22 77 22-19M81 77 59 58" className="required-envelope-fold" />
      </svg>

      <div className="required-question-badge">?</div>

      <span className="required-spark required-spark-one" />
      <span className="required-spark required-spark-two" />
    </div>
  );
}
