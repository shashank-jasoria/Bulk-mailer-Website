import useNotification from "../useNotification";
import Toast from "./toast";
import "./toast.css";
export default function ToastContainer() {
  const { toasts, closeToast } = useNotification();

  if (!toasts.length) {
    return null;
  }

  return (
    <>
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={closeToast} />
      ))}
    </>
  );
}
