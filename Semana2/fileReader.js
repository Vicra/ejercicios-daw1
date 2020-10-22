const fs= require("fs");
class FileReader{
    readFile (fileName){
       const data = fs.readFileSync(fileName);
       return data.toString();
    }
}
//module.exports= FileReader;
module.exports= new FileReader();
