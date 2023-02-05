export default function MenuItem({ name, icon }) {
  return (
    <div className="d-flex my-3">
      <div style={{ width: 28, height: 28 }}>{icon}</div>
      <p className="mx-3" style={{ fontSize: 20 }}>
        {name}
      </p>
    </div>
  );
}
