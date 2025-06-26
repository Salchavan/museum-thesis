import '../css/ButtonStyle.css';
function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} id='button'>
      {children}
    </button>
  );
}
export default Button;
