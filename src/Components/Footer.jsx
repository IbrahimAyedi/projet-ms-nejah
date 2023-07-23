import React from 'react'
import PropTypes from 'prop-types';
const Footer = (props) => {
    console.log(props)
  return (
    <div>
        <h3>{props.normal}</h3>
        <img src={props.children} alt="" />
    </div>
  )
}

Footer.defaultProps={
    normal:"this is a default props"
}

Footer.propTypes={
children:PropTypes.bool
}

export default Footer