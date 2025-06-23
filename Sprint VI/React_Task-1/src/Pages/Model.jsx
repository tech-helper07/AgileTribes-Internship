import React, { useState } from 'react';
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-container">
      <h3 className="modal-title">Modal Container</h3>
      <button 
        onClick={() => setIsOpen(true)}
        className="modal-trigger-btn"
      >
        Open Box
      </button>
      
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-content-title">Magical Box</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="modal-close-btn"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Surprise! This is a modal dialog box</p>
            </div>
            <div className="modal-footer">
              <button 
                onClick={() => setIsOpen(false)}
                className="modal-btn cancel"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="modal-btn confirm"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;