import React from 'react'
import FilterLink from '../containers/FilterLink'

require('./footer.scss');

const Footer = () => (
   <div className="footer-wrapper">
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
)

export default Footer
