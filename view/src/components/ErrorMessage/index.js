import React from 'react'
import PropTypes from 'prop-types'
const ErrorMessage = ({ text }) => {
  return <div style={{color:'#9f3a38'}}>{text}</div>
}

ErrorMessage.propTypes = {
  text: PropTypes.string,
}

ErrorMessage.defaultProps = {
  text: '',
}
export default ErrorMessage
