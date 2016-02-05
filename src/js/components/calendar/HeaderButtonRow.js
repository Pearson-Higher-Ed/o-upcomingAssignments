import React, { Component, PropTypes } from 'react'


class HeaderButtonRow extends Component{


render(){

  let { monthHeader, weekOffset, incrementWeekoffset, decrementWeekOffset, resetWeekOffset } = this.props

  return(
    <tr>
      <th className='headerTitle' colSpan='4'>{monthHeader}</th>
      <th colSpan='3'>
        <div className='buttonWrapper'>
          <div className='button' id='leftButton'   tabIndex='1' onClick={decrementWeekOffset}>&#10094;</div>
          <div className='button' id='rightButton'  tabIndex='3' onClick={incrementWeekoffset}>&#10095;</div>
          <div className='button' id='centerButton' tabIndex='2' onClick={resetWeekOffset}>today</div>
        </div>
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
