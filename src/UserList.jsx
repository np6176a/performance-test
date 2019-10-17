import React from 'react'
import { userData } from './utils'
import 'flexboxgrid'

const UserList = ({ data }) => {
  const users = userData(data)
  return <ListItem users={users} />
}

export default UserList



class ListItem extends React.PureComponent {
  render () {
    const { users } = this.props
    return (
      <div className='row' style={{ maxWidth: '90vw', margin: '0 auto' }}>
        {users.map(user => (
          <div className='col-xs-3' key={user.id} style={{ marginBottom: '40px' }}>
            <div className='boxStyles'>
              <h4>{user.name}</h4>
              <p>Company: {user.company}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
