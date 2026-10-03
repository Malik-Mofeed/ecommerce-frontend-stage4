function EmptyState({
  title = "Nothing here",
  message = "There is no data to display.",
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;