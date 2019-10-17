import React from 'react'
import { userData } from './utils'
// import { DataContext } from './DataProvider'

const UserList = ({ data }) => {
  // const context = useContext(DataContext)
  const users = userData(data)
  return (
    <React.Fragment>
      <ListItem users={users} />
    </React.Fragment>
  )
}

export default UserList

const ListItem = ({ users }) => {
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

// const ListItem = ({ users }) => {
//   return (
//     users.map(user => (
//       <div className='col-xs-3' key={user.id} style={{ marginBottom: '40px' }}>
//         <div className='boxStyles'>
//           <h4>{user.name}</h4>
//           <p>Company: {user.company}</p>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//         </div>
//       </div>
//     ))
//   )
// }
