import { Request, Response } from 'npm:express'
import Task from '../models/tasks.model.ts'

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.find({})
    return res.json(tasks)
  } catch (error) {
    return res.status(error.status).json({ message: error.message })
  }
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = await Task.create(req.body)
    return res.json(newTask)
  } catch (error) {
    return res.status(error.status).json({ message: error.message })
  }
}

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    return res.json(task)
  } catch (error) {
    return res.status(error.status).json({ message: error.message })
  }
}

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const taskUpdated = await Task.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({ taskUpdated })
  } catch (error) {
    return res.status(error.status).json({ message: error.message })
  }
}

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params

  const deletedTask = await Task.findByIdAndDelete(id)

  return res.json({ deletedTask })
}
