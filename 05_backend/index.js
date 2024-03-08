// external dependencies
import express, { json } from "express"
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose"
import cloudinary from 'cloudinary'


//internal dependencies
import authRouter from "./routes/auth.js"
import profileRouter from "./routes/profile.js"
import walletRouter from "./routes/wallet.js"
import checkoutRouter from "./routes/checkout.js"
import bookingRouter from "./routes/booking.js"
import hotelRouter from "./routes/hotel.js"
import roomRouter from "./routes/room.js"
import reviewRouter from "./routes/reviews.js"
import searchRouter from "./routes/search.js"
import availableRooms from "./dependencies/controllers/roomAvailabilityController.js"
// import availableRooms from "./dependencies/controllers/roomAvailabilityController.js"

const app = express()

// middleware
app.use(json())

availableRooms("2024-03-12","2024-03-14","65e6bf0537c8e77de452be2f")
.then(result=>{
  console.log(result);
})

// const result=availableRooms('2024-03-04','2024-03-15','')
// .then((result)=>{
//     console.log(result);
// })




availableRooms("2024-03-12","2024-03-13","65e6bf0537c8e77de452be2f")
.then((result)=>{
    console.log(result);
})
/**Testing Working
 * 
 */
app.get('/', (req, res) => {
    console.log("works");
})


// authentication route
app.use('/',authRouter)

// hotel route
app.use('/',hotelRouter)


// room route
app.use('/',roomRouter)

//profile route
app.use('/',profileRouter)

//Wallet route
app.use('/',walletRouter)

//checkout Router
app.use('/',checkoutRouter)

//booking Router
app.use('/',bookingRouter)

//review router
app.use('/',reviewRouter)

// search route
app.use('/',searchRouter)

/**connect to mongodb
 *  */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected");
        app.listen(process.env.PORT, () => {
            console.log("Listining on " + process.env.PORT);
         })
    })



