function Loader({ message = "Loading..." }) {
  return (
    <div role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default Loader;