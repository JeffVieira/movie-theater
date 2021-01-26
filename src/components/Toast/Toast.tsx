import React from "react";
import style from "./Toast.module.scss";

type Props = {
  closeToast?: () => void;
  message: string;
};

function Toast({ closeToast, message }: Props) {
  return (
    <div onClick={closeToast} className={style.toast} data-testid="toast">
      <p className={style.message}>{message}</p>
    </div>
  );
}

export default Toast;
