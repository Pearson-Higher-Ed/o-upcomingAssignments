import React from 'react'

const HeaderWeekDaysRow = (props) => {

  return(
    <tr>
      {props.daysOfWeek.map( (dayOfWeek,i) =>
        <th id ={`weekdayHeaderRowCell${i}`} className ='weekdayHeaderRowCell' key ={`weekdayHeaderRowCell${i}`}>
          {dayOfWeek}
        </th>
      )}
    </tr>
  )
}

export default HeaderWeekDaysRow
