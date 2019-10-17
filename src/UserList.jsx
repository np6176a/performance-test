import React from 'react'
import { userData } from './utils'

const UserList = ({ data }) => {
  const users = userData(data)
  return (
    <React.Fragment>
      <ListItem users={users} />
    </React.Fragment>
  )
}

export default UserList

class ListItem extends React.Component {
  render () {
    const { users } = this.props
    return (
      users.map(user => (
        <div className='col-xs-12' key={user.id} style={{ marginBottom: '40px' }}>
          <div className='boxStyles'>
            <h4>{user.name}</h4>
            <p>Company: {user.company}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        </div>
      ))
    )
  }
}
