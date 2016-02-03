import React, { Component } from 'react'
import ReactDom             from 'react-dom'
import { data }             from './../../data.json'



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
				"x-authorization" : "eyJhbGciOiJSUzUxMiIsImtpZCI6ImsxMDY5NDgxOTAifQ.eyJleHAiOjE0NTQ1NDU1NTcsInN1YiI6ImZmZmZmZmZmNTQ4MjIxY2NlNGIwNGRlZTQyMzhjNmIwIiwic2Vzc2lkIjoiNDEwNGNkYmIwNGU0NDQzOGI2OTc0NjQwYmZkZmI3MDkiLCJ0eXBlIjoiYXQiLCJpYXQiOjE0NTQ1MzQ3NTZ9.SCbU5cYHufnpk1HDD3CNqtMBoTAnM_A9rgPksJbae7bTkh7zr1bYd946OYBJYcQkq58Uz7rCJwX8fND1LD_MT2efN4KVUa4owS-okgnqlZZrYQ8xUY7s1KRxCPBRaUypbQlSi0SCwYmLNsZdKsYQfMCiMgKy5TdEpQguVoRisII"
			})

		}

		this.generateListItem = this.generateListItem.bind(this)
		this.getData = this.getData.bind(this)

	}

	componentWillMount(){

		let { assignmentUrl } = this.state

		// get assignment list...
		this.getData(assignmentUrl)

	}


	getData(assignmentUrl){

		let { assignmentHeaders } = this.state

		let assignmentOptions = {
			method  : "GET",
			headers : assignmentHeaders,
			mode    : "cors"
		}

		// get assignment list...
	return fetch(assignmentUrl, assignmentOptions)
		.then((res) => {
			return res.json()})
		 .then( _data => this.setState({data:_data}) )
		.catch(e => console.log("error "+e))
console.log(this.state.data)
	}


	generateListItemContainer(data, index){

		let listItemHeader = data.dueDate

		return(
				<div key={`listItemContainer${index}`} id='listItemContainer' className='listItemContainer'>
					<div id={`listItemHeader${index}`} className='listItemHeader'>{listItemHeader}</div>
				  { data.items.map((item,i) => this.generateListItem(item, i) )}
				</div>
		)
	}

	generateListItem(item, index){

		let listItemTopLeft  = item.courseName
		, listItemTopRight   = item.dueTime
		, listItemBottom     = item.couseSummary

		return(
			<div key={`listItem${index}`} id={`listItem${index}`} className='listItem'>
				<div id='listItemTopLeft'  className='listItemTopLeft'>{listItemTopLeft}</div>
				<div id='listItemTopRight' className='listItemTopRight'>{listItemTopRight}</div>
				<div id='listItemBottom'   className='listItemBottom'>{listItemBottom}</div>
			</div>
		)
	}

	render(){

		let { data, header } = this.state
		console.log(data)

		return(
			<div id= 'mainContainer' className='mainContainer'>
				<div id='header' className='header'>{header}</div>
				<div id='listContainer' className='listContainer'>
					{data.map((d,i) => this.generateListItemContainer(d,i) )}
				</div>
			</div>
		)
	}

}
