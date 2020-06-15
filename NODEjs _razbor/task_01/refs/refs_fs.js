const fs = require("fs");
const path = require("path");


// создание папки 

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) throw err
//     console.log('Папка создана')
// })

// создание файла

// fs.writeFile(path.join(__dirname, 'test', 'newFile.txt'), 
// "Hello WORD",
// (err) => {
//     if(err) throw err
//     console.log("Файл создан")
// }   
// )

// изменение файла

// fs.appendFile(path.join(__dirname, 'test', 'newFile.txt'), 
// ", I love YOU",
// (err) => {
//     if(err) throw err
//     console.log("Файл reSAVED")
// }   
// )

// чтение файла

// fs.readFile(path.join(__dirname, 'test', 'newFile.txt'), 'utf-8',
// (err, data) => {
//     if(err) throw err
//     console.log(data)
// }   
// )

// fs.readFile(path.join(__dirname, 'test', 'newFile.txt'), 
// (err, data) => {
//     if(err) throw err
//     console.log(Buffer.from(data).toString())
// }   
// )

// переименование файла

fs.rename(path.join(__dirname, 'test', 'newFile.txt'),
path.join(__dirname, 'test', 'newFile2.txt'),
err => {
    if(err) throw err
    console.log("renamed")
})