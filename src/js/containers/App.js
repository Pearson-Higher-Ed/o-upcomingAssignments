import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import Calendar               from '../components/Calendar'
import * as CalendarActions   from './../actions/Actions'


function mapStateToProps(state){
	return {
		daysOfWeek  : state.daysOfWeek,
		weeks       : state.weeks,
		weekOffset  : state.weekOffset,
		monthHeader : state.monthHeader
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalendarActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
