const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

// 测试接口
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 文章列表
app.get('/api/posts', async (req, res) => {
  const [rows] = await db.query(
    'SELECT id,title,created_at FROM posts ORDER BY created_at DESC'
  )
  res.json(rows)
})

// 文章详情
app.get('/api/posts/:id', async (req, res) => {
  const [rows] = await db.query(
    'SELECT * FROM posts WHERE id=?',
    [req.params.id]
  )
  res.json(rows[0])
})

app.listen(3000, () => {
  console.log('API running at http://localhost:3000')
})
