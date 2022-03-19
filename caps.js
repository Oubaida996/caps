'use strict';
// const Events = require('events');
// let eventEmitter = new Events();
const eventEmitter =require('./lib/events')
const chance = require('./lib/chance');



require('./apps/vender');
require('./apps/driver');



setInterval(() => {
 eventEmitter.emit('vendor', chance.company());
}, 3000);















//===========for me====//


// eventEmitter.on('vendor', (storeName) => {

//     this.payload = {
//         store: storeName,
//         orderID: chance.integer({ min: 20, max: 10000 }),
//         customer: chance.name(),
//         address: chance.address()
//     };
//     console.log('Event :');
//     console.log({
//         event: 'pickup',
//         time: new Date().toString(),
//         payload: this.payload
//     });

//     eventEmitter.emit('driver', this.payload);
// });


// eventEmitter.on('driver', (payload) => {
//     this.payload = payload;
   
//     console.log(`DRIVER: picked up ${this.payload.orderID}`);
//     console.log('Event :');
//     console.log({
//         event :'in-transit',
//         time : new Date().toString(),
//         payload: this.payload
//     });
//     console.log(`DRIVER: delivered up ${this.payload.orderID}`);
//     eventEmitter.emit('delivered' ,this.payload);

// });


// eventEmitter.on('delivered' , (payload) =>{
//     this.payload =payload;
    
//     console.log(`VENDOR: Thank you for delivering ${this.payload.orderID}`);
//     console.log('Event :');
//     console.log({
//         event :'delivered',
//         time :new Date().toString(),
//         payload:this.payload
//     });
// });




//EVENT { event: 'pickup',
//   time: 2020-03-06T18:27:17.732Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'in-transit',
//   time: 2020-03-06T18:27:18.738Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0
// VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'delivered',
//   time: 2020-03-06T18:27:20.736Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }



//===========for me====//