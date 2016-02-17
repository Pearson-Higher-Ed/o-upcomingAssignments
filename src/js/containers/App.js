import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import Calendar               from '../components/calendar/Calendar'
import * as CalendarActions   from './../actions/Actions'
import { data }               from './../../data.json'


function mapStateToProps(state){
	return {
		daysOfWeek  : state.daysOfWeek,
		weeks       : state.weeks,
		weekOffset  : state.weekOffset,
		monthHeader : state.monthHeader,
		data        : data
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalendarActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
