const Button = (props) => {
  return (
    <>
      <button
        className={props.className}
        onClick={props.onClick}
        onContextMenu={props.onContextMenu}
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;
