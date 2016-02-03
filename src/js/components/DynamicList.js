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
			assignmentUrl : 'http://las.stg-openclass.com:80/las-api/api/courses/56671222e4b0008b7d093de8?apiKey=19d26d452432968c9b636c9daf0c6d9b',
			assignmentHeaders : new Headers({
				"Content-Type"    : "application/json",
				"Accept"          : "*/*",
				"x-authorization" : "eyJhbGciOiJSUzUxMiIsImtpZCI6ImsxMDY5NDgxOTAifQ.eyJleHAiOjE0NTQ0NDMzMzUsInN1YiI6ImZmZmZmZmZmNTNhODQwYzJlNGIwN2JhM2UyYTc0NDYwIiwic2Vzc2lkIjoiYjRmMDg4MDk3ODIwNDI2ODg5YmNiNmUwYzk5ZjA1NmYiLCJ0eXBlIjoiYXQiLCJpYXQiOjE0NTQ0MzI1MzV9.T-y7AVHFfGlpz4SNR32gS2e8QlqGkb5wgZMkrae7snBqT7_u1GEEWAuR545Bnt9lw6LM6iTvn0PvnNQ-yGHlAcAKm1bCUFXM8tQR79YfCt1f-XZnx47Lo96mlv2qZWIVFXb6DlGSYwYktMlDQ3pzq2xJB8shBNsH2vbm-hd5Ypk"
			})

		}

		this.generateListItem = this.generateListItem.bind(this)
		this.getData = this.getData.bind(this)

	}

	componentWillMount(){

		let { assignmentUrl } = this.state

		// get assignment list...
		// this.getData(assignmentUrl)

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
