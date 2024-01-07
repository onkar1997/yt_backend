import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log(`ERROR: ${error}`)
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!!", err)
})