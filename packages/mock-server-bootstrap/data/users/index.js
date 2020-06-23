const casual = require('casual');

module.exports = () => {

  const roles = ['external', 'internal']

  casual.define('data', function () {
    return {      
      username: casual.username,
      firstName: casual.first_name,
      lastName: casual.last_name,
      email: casual.email,
      role: roles[Math.floor(Math.random() * roles.length)],
      uuid: casual.uuid,
    }
  })

  const data = [
    {
      id: 0,
      username: 'Internal',
      email: 'internal@gmail.com',
      firstName: casual.first_name,
      lastName: casual.last_name,
      role: 'internal',
      uuid: casual.uuid,
    },
    {
      id: 1,
      username: 'External',
      firstName: casual.first_name,
      lastName: casual.last_name,
      email: 'external@gmail.com',
      role: 'external',
      uuid: casual.uuid,
    },
  ];

  // Create 10 users
  for (let i = 2; i < 12; i++) {
    data.push(Object.assign(casual.data, {id: i}))
  }

  return data
}

