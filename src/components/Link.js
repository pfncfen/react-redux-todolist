import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <div className="filter-link active">{children}</div>
  }

  return (
    <div className="filter-link notactive"
       onClick={() => {
         onClick()
       }}
    >
      {children}
    </div>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
