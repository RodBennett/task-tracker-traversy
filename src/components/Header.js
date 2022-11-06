import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

  return (
    <header className="header">
        {/* Can style directly inside of JSX elements */}
      {/* <h1 style={{ color: 'red', backgroundColor: 'black'}}> { title } </h1> */}
      <h1> { title } </h1>
      <Button color='green' text="Add" onClick={onClick} />
      {/* <Button color='red' text="Hello" />
      <Button color='purple' text="Bye" /> */}
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header


