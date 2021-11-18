const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const hotelRouter = require('./routers/hotel')
const roomRouter = require('./routers/room')
const bookingRouter = require('./routers/booking')
const searchRouter = require('./routers/search')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(hotelRouter)
app.use(roomRouter)
app.use(bookingRouter)
app.use(searchRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})