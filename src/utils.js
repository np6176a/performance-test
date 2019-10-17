export const userData = data => {
  return data.map(user => {
    return {
      id: user._id,
      name: `${user.name.first} ${user.name.last}`,
      company: user.company,
      email: user.email,
      phone: user.phone
    }
  })
}
