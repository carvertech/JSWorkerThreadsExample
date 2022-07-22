const {parentPort, workerData} = require('worker_threads');
//This data has to have the same name as recieved.
const {i} = workerData;

setInterval(() => {
    //This can also post anything back to the main thread including objects, lists, etc.
    parentPort.postMessage("Thread " + i + " sending message every " + i + "s.");
}, i * 1000);