const fs = require('fs');

// fs.writeFile('example.txt', 'this is an example', function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created')
//         fs.readFile('example.txt','utf8',function(err, file){
//             if(err) {
//                 console.log(err);
//             }else{
//                 console.log(file);
//             }
//         })
//     }
// });


// fs.rename('example.txt', 'example2.txt', function(err) {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log('successfully named filie')
//     }
// })

// fs.appendFile('example2.txt', 'some data being appended', function(err) {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log('Successfully append data to file');
//     }
// });

// fs.unlink('example2.txt',function(err){
//     if(err){
//         console.log(err);
//     }else {
//         console.log('Successfully deleted file');
//     }
// })

// fs.mkdir('tutorial', function(err) {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log('folder successfully created')
//     }
// })

// fs.rmdir('tutorial', function(err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('folder successfully deleted');
//     }
// });

// fs.mkdir('tutorial', function(err) {
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile('./tutorial/example.txt', '123', function(err){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('Successfully created file');
//             }
//         })
//     }
// });

// fs.readdir('tutorial', function(err, files){
//     if(err){
//         console.log(err);
//     }else{
//         for(var file of files) {
//             fs.unlink('./tutorial/'+file, function(err) {
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log('successfully deleted file');
//                 }
//             })
//         }
//     }
// });

const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt');

readStream.on('data', function(chunk){
    writeStream.write(chunk);
});