# Hotel-Booking-API

## Searching Hotels & Rooms

| URI                 |  HTTP  | Body | Description                                 |
| :------------------ | :----: | :--: | :-------------------------                  |
| /search             |   GET  | JSON | Get a list hotels according to the location |

```javascript
{
    "location" : string,
    "arrival_date" : date,
    "departure_date" : date    
}
```


| URI                 |  HTTP  | Body | Description                                      |
| :------------------ | :----: | :--: | :-------------------------                       |
| /search/:hotel_id   |   GET  |   -  | Get a list of rooms within a hotel with hotel_id |




## Room Booking 

| URI                 |  HTTP  | Body | Description                                                                      |
| :------------------ | :----: | :--: | :-------------------------                                                       |
| /booking            |  POST  | JSON | Booking a room from arrival_date to departure_date (if available in that period) |

```javascript
{
    "room_id" : string,
    "user_id" : string ,
    "date_of_booking": date,
    "arrival_date": date,
    "departure_date": date,
    "amount" : integer
}
```



## Cancel Booking

| URI                         |  HTTP  | Body | Description                                        |
| :------------------         | :----: | :--: | :-------------------------                         |
| /booking_cancel/:booking_id | DELETE |   -  | Cancel a booking using the booking_id              |


