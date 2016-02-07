import React, { Component, PropTypes } from 'react'


class HeaderButtonRow extends Component{


render(){

  let { monthHeader, weekOffset, incrementWeekoffset, decrementWeekOffset, resetWeekOffset } = this.props

  return(
    <tr>
      <th className='headerTitle' colSpan='4'>{monthHeader}</th>
      <th colSpan='3' className='buttonWrapper'>
          <button className='button' id='leftButton'   onClick={decrementWeekOffset}>&#10094;</button>
          <button className='button' id='centerButton' onClick={resetWeekOffset}>today</button>
          <button className='button' id='rightButton'  onClick={incrementWeekoffset}>&#10095;</button>
      </th>
    </tr>
  )
}



}

HeaderButtonRow.propTypes = {
  monthHeader         : PropTypes.string.isRequired,
  weekOffset          : PropTypes.number.isRequired,
  incrementWeekoffset : PropTypes.func.isRequired,
  decrementWeekOffset : PropTypes.func.isRequired,
  resetWeekOffset     : PropTypes.func.isRequired

}



export default HeaderButtonRow
