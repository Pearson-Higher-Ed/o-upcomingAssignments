import React, { Component, PropTypes }     from 'react'
import TableBody                           from './TableBody'
import HeaderMonth                         from './HeaderMonth'
import HeaderButtonRow                     from './HeaderButtonRow'
import HeaderWeekDaysRow                   from './HeaderWeekDaysRow'
import DynamicList                         from './../dynamicList/DynamicList'



class Calendar extends Component {


	render(){

		let { daysOfWeek } = this.props

		return(
			<div>
				<table>
					<thead>
						<HeaderButtonRow {...this.props} />
						<HeaderWeekDaysRow daysOfWeek={daysOfWeek} />
					</thead>
					<TableBody {...this.props} />
				</table>
				<DynamicList />
			</div>
		)

	}


}




Calendar.propTypes = {
	data                : PropTypes.array,
	weeks               : PropTypes.number,
	weekOffset          : PropTypes.number,
	monthHeader         : PropTypes.string
}

Calendar.defaultProps = {
	data                : [],
	daysOfWeek          : ["S", "M", "T", "W", "T", "F", "S"],
	weeks               : 3,
	weekOffset          : 0,
	monthHeader         : HeaderMonth()
}



export default Calendar
