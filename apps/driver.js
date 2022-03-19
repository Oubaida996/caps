'use strict';
const eventEmitter = require('../lib/events');




const driverHandler = (payload) => {
    this.payload = payload;

    console.log(`DRIVER: picked up ${this.payload.orderID}`);
    console.log('Event :');
    console.log({
        event: 'in-transit',
        time: new Date().toString(),
        payload: this.payload
    });
    console.log(`DRIVER: delivered up ${this.payload.orderID}`);


    eventEmitter.emit('delivered', this.payload);



};

eventEmitter.on('driver', driverHandler);



const deliveredHandeler = (payload) => {
    this.payload = payload;

    console.log(`VENDOR: Thank you for delivering ${this.payload.orderID}`);
    console.log('Event :');
    console.log({
        event: 'delivered',
        time: new Date().toString(),
        payload: this.payload
    });
}

eventEmitter.on('delivered', deliveredHandeler);