import React, {Component, PropTypes} from 'react'


class ListItemContainer extends Component {

  render(){

   let {data, index} = this.props
console.log(data)

  let listItemTopLeft  = data.items[0].courseName
  , listItemTopRight   = data.dueDate
  , listItemBottom     = data.items[0].couseSummary


    return (
        <li key={`listItem${index}`} id={`listItemHeader${index}`} className='listItem'>
          <h4 className='listItemTopLeft'>{listItemTopLeft}</h4>
          <h4 className='listItemTopRight'>{listItemTopRight}</h4>
          <h6 className='listItemBottom'>{listItemBottom}</h6>
        </li>
    )
  }
}

export default ListItemContainer

ListItemContainer.PropTypes = {
  data  : PropTypes.object,
  index : PropTypes.number
}
