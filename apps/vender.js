'use strict';

const eventEmitter = require('../lib/events');
const chance = require('../lib/chance');


// require('./driver');



const vendoHandler = (storeName) => {

    this.payload = {
        store: storeName,
        orderID: chance.integer({ min: 20, max: 10000 }),
        customer: chance.name(),
        address: chance.address()
    };
    console.log('Event :');
    console.log({
        event: 'pickup',
        time: new Date().toString(),
        payload: this.payload
    });

    eventEmitter.emit('driver', this.payload);
};


eventEmitter.on('vendor', vendoHandler);







// EVENT { event: 'pickup',
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