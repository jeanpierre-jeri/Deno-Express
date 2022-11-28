import express from 'npm:express'
import tasksRouter from './routes/tasks.route.ts'
import './db.ts'

const app = express()
app.use(express.json())

app.use('/api/tasks', tasksRouter)

app.listen(3000, () => console.log('Server listening on port', 3000))
