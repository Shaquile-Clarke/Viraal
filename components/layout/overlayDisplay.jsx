import { createPortal } from "react-dom";
import LoginForm from "../layout/login-form";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  if (open) {
    return createPortal(
      <>
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-black/80 z-10 "
          onClick={onClose}
        />
        <LoginForm onClose={onClose} />
      </>,
      document.getElementById("modal")
    );
  }
}
