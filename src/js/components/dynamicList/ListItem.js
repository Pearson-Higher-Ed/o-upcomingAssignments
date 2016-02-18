import React, {Component, PropTypes} from 'react'


export default class ListItem extends Component {


  render(){

   let {d, i} = this.props

    let listItemTopLeft = d.courseName
    , listItemTopRight  = d.dueTime
    , listItemBottom    = d.couseSummary



    return (
        <li id={`listItem${i}`} className='listItem' key={`listItem${i}`}>
          <h4 className='listItemTopLeft'>{listItemTopLeft}</h4>
          <h4 className='listItemTopRight'>{listItemTopRight}</h4>
          <h6 className='listItemBottom'>{listItemBottom}</h6>
        </li>
    )
  }
}


ListItem.PropTypes = {
  d  : PropTypes.object,
  i  : PropTypes.number
}
