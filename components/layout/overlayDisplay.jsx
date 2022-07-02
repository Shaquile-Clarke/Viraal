import { createPortal } from "react-dom";
import LoginFormDisplay from "./login-display";

export default function Modal({ open, onClose, loginShow, signUpShow }) {
  if (!open) return null;

  if (open) {
    return createPortal(
      <>
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-black/80 z-20 "
          onClick={onClose}
        />
        <LoginFormDisplay
          onClose={onClose}
          loginShow={loginShow}
          signUpShow={signUpShow}
        />
      </>,
      document.getElementById("modal")
    );
  }
}
