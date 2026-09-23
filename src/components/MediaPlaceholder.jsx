export default function MediaPlaceholder({ className = '', aspect = 'wide' }) {
  return (
    <div
      className={`media-placeholder media-placeholder--${aspect} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
