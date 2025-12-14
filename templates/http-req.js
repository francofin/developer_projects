const http = require('http');

// const req =  http.request('http://www.google.com/', (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   res.setEncoding('utf8');  
//     res.on('data', (chunk) => { 
//         console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data in response.');
//     });
// })

// req.end();   


http.get('http://www.google.com/', (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.setEncoding('utf8');  
    res.on('data', (chunk) => { 
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
})




