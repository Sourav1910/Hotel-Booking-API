const express = require('express')
const Booking = require('../models/booking')
const Room = require('../models/room')
const router = new express.Router()

router.post('/booking', async (req, res) => {
    
    try{
        //Converting String to Date type
        var mod_req = req.body
        mod_req.arrival_date = new Date( req.body.arrival_date)
        mod_req.departure_date = new Date( req.body.departure_date)
        
        //Finding the room information specified in the booking
        var room_obj_arr = await Room.find({_id:req.body.room_id})
        var room_obj=room_obj_arr[0]
      
        if(room_obj.occupied_dates.length == 0 || dates_available(room_obj,mod_req)){
            //Succesful booking 
            //update room occupied dates and availability
            let new_occupied_dates = room_obj.occupied_dates
            new_occupied_dates.push([mod_req.arrival_date,mod_req.departure_date])
            let updated_room_obj = await Room.findOneAndUpdate({_id:req.body.room_id},{occupied_dates:new_occupied_dates},{new: true})
            console.log(updated_room_obj)
            
            //Create and save booking in the db
            const booking = new Booking(mod_req)
            await booking.save()
            res.status(201).send(booking)
        }
        else{
            return res.status(400).send(" Sorry! Booking NOT possible due to room being occupied on specified date. ")
        }
    }
     catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/booking_cancel/:booking_id', async (req, res) => {
    try {

        // Finding booking by booking_id
        var booking_obj_array = await Booking.find({_id:req.params.booking_id})
        var booking_obj = booking_obj_array[0]
        var occupied_dates_arr = [booking_obj.arrival_date,booking_obj.departure_date]
        
        //Finding the room object of that booking
        var room_object = await Room.findOne({_id:booking_obj.room_id})
        
        //Remove the booking dates from that room 
        var updated_occupied_dates = room_object.occupied_dates
        updated_occupied_dates = updated_occupied_dates.filter(item => JSON.stringify(item)!==JSON.stringify(occupied_dates_arr))
        var new_room_obj = await Room.findOneAndUpdate({_id:booking_obj.room_id},{occupied_dates:updated_occupied_dates},{new: true})

        //Delete the booking
        var deleted_booking_id = await Booking.findOneAndDelete({_id:req.params.booking_id})
        res.status(200).send("Booking Cancelled and Refund initiated.")
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

//Function to find whether the room is available on the specified dates or not
function dates_available(room_obj,mod_req){
        
        for(let i = 0;i<room_obj.occupied_dates.length;i++){
            let dt = room_obj.occupied_dates[i];
            if(( mod_req.arrival_date.getTime() <= dt[1].getTime()) && (mod_req.departure_date.getTime() >= dt[0].getTime())){
                return false
            }
        }
        return true    
}

module.exports = router