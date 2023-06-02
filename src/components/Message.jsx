const Message = props => {
  return (
    <div>
      <p className="message"></p> <span>{props.message}</span>{' '}
    </div>
  );
};

export default Message;
