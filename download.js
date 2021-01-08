const http = require('http')
const fs = require('fs')
const path = require('path')
//const uuidv8 = require('uuid/v3')
const { v4: uuidv4 } = require('uuid');


const downloadPage = (url='http://www.google.com') => {
    console.log('downloading', url)

 
    const fetchPage = (urlF, callback) => {
        http.get (urlF, (response) =>{
            let buff = ''
            response.on('data',  (chunk) =>{
                buff += chunk
            })
            response.on('end', () =>{
                callback(null, buff)
            })
        }).on('error', (error) =>{
            console.error(`Got error: ${error.message}`);
            callback(error)
        })
    }
    const folderName = uuidv4()
    fs.mkdirSync(folderName)
    
    

fetchPage(url, (error, data) =>{
    if (error)  return console.log(error)
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
    fs.writeFileSync(path.join(__dirname, folderName, 'file.txt'), data)
    console.log('downloading is done in folder', folderName)
    

})

}

downloadPage(process.argv[2])

