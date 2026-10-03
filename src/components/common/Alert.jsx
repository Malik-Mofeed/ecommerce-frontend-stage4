function Alert({ type = "info", message }) {
  if (!message) {
    return null;
  }

  return (
    <div role="alert" data-type={type}>
      {message}
    </div>
  );
}

export default Alert;