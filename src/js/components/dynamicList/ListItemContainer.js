import React, {Component, PropTypes} from 'react'
import ListItem                      from './ListItem'

class ListItemContainer extends Component {

  render(){

   let {data, index} = this.props
console.log(data)
    return (
      <div key={`listItemContainer${index}`} id='listItemContainer' className='listItemContainer' >
        <div id={`listItemHeader${index}`} className='listItemHeader'>

        { data.items.map((item,i) => { return <ListItem key={`ListItem${i}`} item={item} index={i} /> } )}
        </div>
      </div>
    )
  }
}

export default ListItemContainer

ListItemContainer.PropTypes = {
  data  : PropTypes.object,
  index : PropTypes.number
}
