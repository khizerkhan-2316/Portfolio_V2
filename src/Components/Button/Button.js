import './Button.css';

const Button = (props) => {
  const { onClick, classname, type } = props;
  return (
    <button onClick={onClick} className={classname} type={type}>
      {props.children}
    </button>
  );
};

export default Button;
