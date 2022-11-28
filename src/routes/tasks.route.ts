import { Router } from 'npm:express'
import { getAllTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/tasks.controllers.ts'

const router = Router()

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

export default router
