import React, { Component, PropTypes} from 'react'

class ListItem extends Component{

  render(){

    let {item , index} = this.props

    let listItemTopLeft  = item.courseName
    , listItemTopRight   = item.dueTime
    , listItemBottom     = item.couseSummary

    return (
        <div key={`listItem${index}`} id={`listItem${index}`} className='listItem' onClick={() => {window.location = 'http://www.google.com'}}>
          <h4 id='listItemTopLeft'  className='listItemTopLeft'>{listItemTopLeft}</h4>
          <h4 id='listItemTopRight' className='listItemTopRight'>{listItemTopRight}</h4>
          <h6 id='listItemBottom'   className='listItemBottom'>{listItemBottom}</h6>
        </div>

    )
  }
}

PropTypes.ListItem = {
   item  : PropTypes.object,
   index : PropTypes.number
}

export default ListItem
