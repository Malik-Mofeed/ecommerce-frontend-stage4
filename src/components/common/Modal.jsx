function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div role="dialog" aria-modal="true">
      <div>
        <div>
          <h2>{title}</h2>

          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;