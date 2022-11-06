import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  // reusable component button to be used for all buttons witb color and text props to be modified.  
  // can add events here in our button component ... ie 'onClick' etc.
  // const onClick = () => {
  // }
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
