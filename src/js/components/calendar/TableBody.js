import React, { Component , PropTypes } from 'react'


export default class TableBody extends Component{


  // generates weeks...
  generateWeekRow(weeks){

   let weekList = [],
   week         = 0

   for(week;week <= weeks;week++){
     weekList.push(
       <tr key={`weekRow${week}`} className='weekRow' id={`weekRow${week}`}>{this.generateWeekRowDayCell(week)}</tr>
     )
   }

   return weekList

  }



  // genreates One table cell to hold one day...
  generateWeekRowDayCell(week){

     let dayList  = []
     , dayCell    = 0
     , day        = 0

     for(day; day <= 6; day++){

       dayCell = day + ((week) * 7)

       dayList.push(
         <td key={`dayCell${dayCell}`} id={`dayCell${dayCell}`} className='dayCell'>{this.generateWeekRowDayCellText(dayCell)}</td>
       )
     }

     return dayList

  }



  // applies --CSS STYLES--...
  applyHighlightStyle(dayOfMonth, dayTextTime, currentMonthDayTime){

    let { weekOffset }    = this.props
    , weekOffsetTime       = 7*(weekOffset * -86400000)
    , highlightDays        = 7
    , rangeStartTime       = dayTextTime
    , rangeStartTimeOffset = weekOffsetTime + dayTextTime
    , rangeEndTime         = weekOffsetTime + dayTextTime + (highlightDays * -86400000)
    , highlightStyle       = ""
    , staticDay            = ""
    , currentDay           = "currentDay"
    , currentRange         = "rangeNotCurrentDay"

    if (dayTextTime == currentMonthDayTime){
       staticDay = "staticCurrentDay"
    }

    if(rangeStartTimeOffset == currentMonthDayTime){
      highlightStyle = "rangeStart"
      currentRange   = "rangeCurrentDay"
      staticDay      = ""
    }else if((currentMonthDayTime > rangeEndTime) && (rangeStartTimeOffset >= currentMonthDayTime)){
      highlightStyle = "rangeMiddle"
      staticDay      = ""
    }else if(currentMonthDayTime == rangeEndTime){
      highlightStyle = "rangeEnd"
      staticDay      = ""
    }

    return (
      <span className={currentRange}>
        <div className={highlightStyle} id={`day${dayOfMonth}`}>
          <div id={staticDay}>
            <span className={`dayText${dayOfMonth}`}>{dayOfMonth}</span>
            <br></br>
            <span className='bullet'>&bull;</span>
          </div>
        </div>
      </span>
    )
  }



  // displays correct date and text for dayCell...  + (weekOffset * 604800000)
  generateWeekRowDayCellText(day){

     let calendarDate      = new Date()
     , currentMonthDay     = calendarDate.getDate()
     , currentMonthDayTime = calendarDate.getTime()
     , dayOffset           = (currentMonthDay - day)

     calendarDate.setDate(currentMonthDay - dayOffset)

     let dayOfMonth     = calendarDate.getDate()
     , dayTextTime      = calendarDate.getTime()
     , dayTextWithStyle = this.applyHighlightStyle(dayOfMonth, dayTextTime, currentMonthDayTime)

     /***OUTPUT TO TABLECELL***/
     return dayTextWithStyle

  }



  render(){

    let { weeks } = this.props

    return <tbody>{this.generateWeekRow(weeks)}</tbody>

  }


}




TableBody.propTypes = {
  weeks      : PropTypes.number,
  data       : PropTypes.array
}

TableBody.defaultProps = {
  weeks      : 3
}
