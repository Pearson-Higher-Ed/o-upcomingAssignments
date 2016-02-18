import React, { Component, PropTypes } from 'react'
import ListItem                        from './ListItem'


export default class ListItemSection extends Component{


  render(){

    let { data, index }  = this.props
    , dueDateObject      = new Date(data.due_date)
    , dueDateString      = dueDateObject.toDateString()
    , dueDateStringShort = dueDateString.slice(0,(dueDateString.length - 4)).trim()
    , items              = data.items

    return(
      <li className='listItemSection' id={`listItemSection${index}`} key={`listItemSection${index}`} >
        <h2 className='dueDate' >{dueDateStringShort}</h2>
        <ul>
          { items.map( (d,i) => { return <ListItem d={d} i={i} key={`ListItem${i}`} /> } ) }
        </ul>
      </li>
    )
  }


}

ListItemSection.propTypes = {
  data  : PropTypes.object.isRequired,
  index : PropTypes.number.isRequired
}
