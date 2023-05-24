import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary">
      {children}
      <button className="btn-close" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Alert;
