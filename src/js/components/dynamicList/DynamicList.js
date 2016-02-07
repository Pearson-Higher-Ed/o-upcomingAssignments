import React, { Component } from 'react'
// import {FormattedDate}      from 'react-intl'
import ListItem    from './ListItem'
import { data }             from './../../../data.json'



export default class DynamicList extends Component {


	constructor(props) {
		super(props)
		console.log("*********DynamicList Constructor**********")

		this.state = {
			header        : 'Assignments',
			data          : data || [],
			assignmentUrl : 'http://las.stg-openclass.com:80/las-api/api/courses/55b7dcf1e4b04136b8d24f2a/assignments/7aa13f13-2394-484e-9798-3047bb24ce90/tree?apiKey=19d26d452432968c9b636c9daf0c6d9b',
			assignmentHeaders : new Headers({
				"Content-Type"    : "application/json",
				"Accept"          : "*/*",
				"x-authorization" : "eyJhbGciOiJSUzUxMiIsImtpZCI6ImsxMDY5NDgxOTAifQ.eyJleHAiOjE0NTQ2MzI1MzcsInN1YiI6ImZmZmZmZmZmNTQ4MjIxY2NlNGIwNGRlZTQyMzhjNmIwIiwic2Vzc2lkIjoiNWYzNjQ5MTU1MmIxNDBkOGFjZThlODY0NDBjNjA3ZTMiLCJ0eXBlIjoiYXQiLCJpYXQiOjE0NTQ2MjE3Mzd9.FqNcwjlo6IgCkwEH6dVvta8nKfHRXJo3VEO3LgEc4dkD9zOXGFXBzPjpkV3ctcA-Z2xEbhOM8LunF-AGlCjQzbPgqwhJljqUj8xu1B6nEY0wTnHYrk63dFfj3FiTrdBxAgIQwXrWtLfRlXVcQa1we8Q4Fva5JfdbtQx54vKZZYY"
			})

		}

		this.getData = this.getData.bind(this)

	}

	componentWillMount(){

		let { assignmentUrl } = this.state

		// get assignment list...
		// this.getData(assignmentUrl)

	}


	getData(assignmentUrl){

		let { assignmentHeaders, data } = this.state

		let assignmentOptions = {
			method  : "GET",
			headers : assignmentHeaders,
			mode    : "cors"
		}

		// get assignment list...
		return fetch(assignmentUrl, assignmentOptions)
			.then( (res) => {return res.json()} )
			 .then( _data => this.setState({ data:_data.children}) )
			.catch(e => console.log("error "+e))

	}


	render(){

		let { data, header } = this.state
		console.log(data)

		return(
			<div id= 'mainContainer' className='mainContainer'>
				<h3 id='header' className='header'>{header}</h3>
				<ul id='list' className='list'>
					{data.map((d,i) => {return <ListItem  key={`ListItem${i}`} data={d} index={i} />} )}
				</ul>
			</div>
		)
	}

}
