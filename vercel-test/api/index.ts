import express, { type Request, type Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "hello siam welcome to vercel server !!! " })
})

export default (req: Request, res: Response) => {
  return app(req, res)
}