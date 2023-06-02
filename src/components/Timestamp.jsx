const timestamp = props => {
  return (
    <div>
      {' '}
      <p className="timestamp-label">Timestamp</p>
      <span className="timestamp">{props.timestamp}</span>
    </div>
  );
};
export default timestamp;
