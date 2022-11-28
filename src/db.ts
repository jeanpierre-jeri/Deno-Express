import mongoose from 'npm:mongoose'

try {
  const db = await mongoose.connect('mongodb://localhost/taskdb')
  console.log('Database connection established', db.connection.name)
} catch (error) {
  console.log(error)
  Deno.exit(1)
}
