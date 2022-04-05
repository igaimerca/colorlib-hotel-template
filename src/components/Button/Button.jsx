import './Button.styles.scss';

const Button = ({ onClick, showBtn, children }) => {
  return (
    <div className={`btn ${showBtn ? 'anchor-hover' : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
