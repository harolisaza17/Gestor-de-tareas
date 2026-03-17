import express from "express"

import {connectDB} from "./src/db/index.js"

import authRoutes from "./src/routes/authRotes.js"


const app = express()
const PORT = process.env.SRV_PORT

app.use(express.json())
app.use("/", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
    connectDB()
})

export default app