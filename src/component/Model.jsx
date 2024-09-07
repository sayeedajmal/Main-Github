// Modal.js
import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 50,
};

const modalContentStyle = {
  backgroundColor: '#075143',
  padding: '1.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  maxWidth: '90vw',
  maxHeight: '90vh',
  width: '100%',
  height: '100%',
  overflow: 'auto',
};

const closeButtonStyle = {
  position: 'fixed',
  top: '1rem',
  width: "2rem",
  right: '2.5rem',
  borderRadius: "20px",
  fontSize: '1.5rem',
  color: 'green',
  background: "white",
  border: 'none',
  cursor: 'pointer',
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
