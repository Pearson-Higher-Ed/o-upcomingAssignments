import React, { Component, PropTypes } from 'react'
import TableBody                       from './TableBody'
import HeaderMonth                     from './HeaderMonth'
import HeaderButtonRow                 from './HeaderButtonRow'
import HeaderWeekDaysRow               from './HeaderWeekDaysRow'
import DynamicList                     from './../dynamicList/DynamicList'




export default class Calendar extends Component {


	render(){

		let { daysOfWeek, data , header } = this.props

		return(
			<div>
				<table>
					<thead>
						<HeaderButtonRow {...this.props} />
						<HeaderWeekDaysRow daysOfWeek={daysOfWeek} />
					</thead>
					<TableBody {...this.props} data={data} />
				</table>
				<DynamicList data={data} header={header} />
			</div>
		)

	}


}




Calendar.propTypes = {
	data                : PropTypes.array,
	weeks               : PropTypes.number,
	weekOffset          : PropTypes.number,
	monthHeader         : PropTypes.string,
	data                : PropTypes.array,
	header              : PropTypes.string
}

Calendar.defaultProps = {
	data                : [],
	daysOfWeek          : ["S", "M", "T", "W", "T", "F", "S"],
	weeks               : 3,
	weekOffset          : 0,
	header              : "Assignments",
	monthHeader         : HeaderMonth()
}
