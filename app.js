import express from "express"

import {connectDB} from "./src/db/index.js"

// import useRoutes from "./routes/User.Routes.js"


const app = express()
const PORT = process.env.SRV_PORT

app.use(express.json())
// app.use("/",useRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
    connectDB()
})

export default app