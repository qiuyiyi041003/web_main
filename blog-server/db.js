const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'blog_user',
  password: 'StrongPass123!',
  database: 'blog'
})

module.exports = pool.promise()
