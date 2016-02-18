import React, { Component, PropTypes } from 'react'
import ListItemSection                 from './ListItemSection'


export default class DynamicList extends Component {


	render(){

		let { data, header } = this.props

		return(
			<div id= 'mainContainer' className='mainContainer'>
				<h3 id='header' className='header'>{header}</h3>
				<ul id='list' className='list'>
					{data.map((d,i) => {return <ListItemSection data={d} key={`ListItemSection${i}`} index={i} />} )}
				</ul>
			</div>
		)
	}

}

DynamicList.propTypes = {
  data   : PropTypes.array,
	header : PropTypes.string
}
