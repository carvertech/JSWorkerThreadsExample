const {Worker, workerData} = require('worker_threads');

var workerList = [];
var index = [];
var i = 0;

for(i = 1; i<=10; i++){
    //workerData can be anything, a file, object, list, etc.
    let worker = new Worker('./worker.js', { workerData: {i}});
    workerList.push(worker);
}

i = 0;

//attatching event listeners to every worker.
for(index[i] = 0; index[i] < workerList.length; index[i] = i){
    workerList[index[i]].on('error', (err) => {throw err});
    workerList[index[i]].on('message', (msg) => {
        console.log("Message: ", msg);
    });
    i++;
}