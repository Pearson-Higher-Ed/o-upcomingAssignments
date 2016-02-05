import React, { Component, PropTypes} from 'react'

class ListItem extends Component{

  render(){

    let {item , index} = this.props

    let listItemTopLeft  = item.courseName
    , listItemTopRight   = item.dueTime
    , listItemBottom     = item.couseSummary

    return (
        <div key={`listItem${index}`} id={`listItem${index}`} className='listItem' onClick={() => {window.location = 'http://www.google.com'}}>
          <div id='listItemTopLeft'  className='listItemTopLeft'>{listItemTopLeft}</div>
          <div id='listItemTopRight' className='listItemTopRight'>{listItemTopRight}</div>
          <div id='listItemBottom'   className='listItemBottom'>{listItemBottom}</div>
        </div>

    )
  }
}

PropTypes.ListItem = {
   item  : PropTypes.object,
   index : PropTypes.number
}

export default ListItem
