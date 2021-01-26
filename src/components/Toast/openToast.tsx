import React from "react";
import { toast } from "react-toastify";
import Toast from "./Toast";
import "react-toastify/dist/ReactToastify.css";

import style from "./Toast.module.scss";

toast.configure({
  toastClassName: style.reset,
  position: toast.POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
  autoClose: 5000,
  closeOnClick: true,
  closeButton: false,
  draggable: false,
});

type ToastProps = {
  closeToast: () => void;
};

type ToastParams = {
  message: string;
  autoClose: number | false;
};

function openToast({ message, autoClose }: ToastParams) {
  toast(
    ({ closeToast }: ToastProps) => (
      <Toast message={message} closeToast={closeToast} />
    ),
    { autoClose }
  );
}

function openErrorToast(message: string, autoClose: number | false = 5000) {
  openToast({ message, autoClose });
}

export { openErrorToast };
