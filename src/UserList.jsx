import React from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { userData } from './utils'

const UserList = ({ data }) => {
  const users = userData(data)
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          itemData={users}
          height={height}
          itemCount={users.length}
          itemSize={250}
          width={width}
        >
          {ListItem}
        </List>
      )}
    </AutoSizer>
  )
}

export default UserList

class ListItem extends React.Component {
  render () {
    const { data, index, style } = this.props
    const user = data[index]
    return (
      <div key={user.id} style={style}>
        <div className='boxStyles'>
          <h4>{user.name}</h4>
          <p>Company: {user.company}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      </div>
    )
  }
}
