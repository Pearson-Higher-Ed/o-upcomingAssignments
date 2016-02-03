import React, { Component } from 'react'


export default class TableBody extends Component{

  constructor(props){
    super(props)

  }



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
         <td key={`dayCell${dayCell}`} className='dayCell' id={`dayCell${dayCell}`}>{this.generateWeekRowDayCellText(dayCell)}</td>
       )
     }

     return dayList

  }



  // applies --CSS STYLES--...
  applyHighlightStyle(dayOfMonth, dayTextTime, currentMonthDayTime){

    let highlightDays = 7
    , rangeStartTime  = dayTextTime
    , rangeEndTime    = currentMonthDayTime + (highlightDays * 86400000)
    , highlightStyle  = ""
    , currentRange    = "rangeNotCurrentDay"

    if(rangeStartTime == currentMonthDayTime){
      highlightStyle = "rangeStart highlight"
      currentRange   = "rangeCurrentDay"
    }else if(rangeStartTime < rangeEndTime && dayTextTime >= currentMonthDayTime){
      highlightStyle = "rangeMiddle highlight"
    }else if(rangeStartTime == rangeEndTime){
      highlightStyle = "rangeEnd highlight"
    }

    return (
      <div className={currentRange}>
        <div className={`day ${highlightStyle}`} id={`day${dayOfMonth}`}>
          {dayOfMonth}
        </div>
      </div>
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




TableBody.PropTypes = {
  weeks      : React.PropTypes.number
}

TableBody.defaultProps = {
  weeks      : 3
}
