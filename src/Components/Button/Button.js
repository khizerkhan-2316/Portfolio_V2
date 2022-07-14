import './Button.css';

const Button = (props) => {
  const { onClick, classname } = props;
  return (
    <button onClick={onClick} className={classname}>
      {props.children}
    </button>
  );
};

export default Button;
