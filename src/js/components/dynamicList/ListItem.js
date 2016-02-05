import React, {Component, PropTypes} from 'react'


class ListItemContainer extends Component {

  render(){

   let {data, index} = this.props
console.log(data)

  let listItemTopLeft  = data.items[0].courseName
  , listItemTopRight   = data.dueDate
  , listItemBottom     = data.items[0].couseSummary


    return (
        <li key={`listItemContainer${index}`} id={`listItemHeader${index}`} className='listItemHeader'>
          <h4 id='listItemTopLeft'  className='listItemTopLeft'>{listItemTopLeft}</h4>
          <h4 id='listItemTopRight' className='listItemTopRight'>{listItemTopRight}</h4>
          <h6 id='listItemBottom'   className='listItemBottom'>{listItemBottom}</h6>
        </li>
    )
  }
}

export default ListItemContainer

ListItemContainer.PropTypes = {
  data  : PropTypes.object,
  index : PropTypes.number
}
