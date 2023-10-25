import express from "express"
import { Request, Response } from "express"
import { Server, Socket } from "socket.io"
import * as path from 'path'
import http from 'http'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

io.on('connection', (socket: Socket) => {
    console.log('user connected')
    socket.on('chat message', (msg) => {
        console.log(msg)
    })
})

server.listen(3000, () => {
    console.log("Listening to 3000")
})