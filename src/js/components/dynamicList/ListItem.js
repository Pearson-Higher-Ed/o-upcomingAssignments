import React, {Component, PropTypes} from 'react'


export default class ListItem extends Component {


  render(){

   let {d, i} = this.props

    let dueTimeObject   = new Date(d.dueTime)
    , listItemTopLeft   = d.courseName
    , listItemTopRight  = dueTimeObject.toLocaleTimeString()
    , listItemBottom    = d.couseSummary
    , courseHref        = d.courseHref



    return (
        <li id={`listItem${i}`} className='listItem' key={`listItem${i}`}>
          <a href={courseHref}>
            <h4 className='listItemTopLeft'>{listItemTopLeft}</h4>
            <h4 className='listItemTopRight'>{listItemTopRight}</h4>
            <h6 className='listItemBottom'>{listItemBottom}</h6>
          </a>
        </li>
    )
  }
}


ListItem.PropTypes = {
  d  : PropTypes.object,
  i  : PropTypes.number
}
