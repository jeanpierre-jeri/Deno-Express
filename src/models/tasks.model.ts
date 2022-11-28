import { Schema, model } from 'npm:mongoose'

const taskSchema = new Schema(
  {
    title: String,
    description: String,
    done: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default model('Task', taskSchema)
