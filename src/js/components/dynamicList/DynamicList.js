import React, { Component, PropTypes } from 'react'
import ListItem                        from './ListItem'


export default class DynamicList extends Component {


	constructor(props) {
		super(props)

		this.state = {
			header : 'Assignments'
		}

	}


	render(){

		let { data } = this.props
console.log(data)
		return(
			<div id= 'mainContainer' className='mainContainer'>
				<h3 id='header' className='header'>{this.state.header}</h3>
				<ul id='list' className='list'>
					{data.map((d,i) => {return <ListItem data={d} key={`ListItem${i}`} index={i} />} )}
				</ul>
			</div>
		)
	}

}

DynamicList.propTypes = {
  data: PropTypes.array
}
