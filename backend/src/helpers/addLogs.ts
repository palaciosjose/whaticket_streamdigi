import * as fsp from 'fs/promises';
import path from "path";
import * as fs from "fs";
// const filePath = 'ruta/de/tu/archivo.txt';

export async function addLogs({fileName, text, forceNewFile=false}) {
        const logs = path.resolve(__dirname, "..","..", "logs");  
        const filePath  = path.resolve(logs,fileName)


    try {

        console.log(logs)
        if (!fs.existsSync(logs)) {
          fs.mkdirSync(logs);
        }
    } catch (error) {

    }

  try {
    if(forceNewFile){
      await fsp.writeFile(filePath,  `${text} \n`);
      console.log(`Nuevo archivo de log añadido ${filePath}\n \n ${text}`);

    }else

    await fsp.appendFile(filePath, `${text} \n` );
    console.log(`Texto añadido al archivo de log ${filePath}\n \n ${text}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // El archivo no existe, así que se crea y agrega el texto
      await fsp.writeFile(filePath,  `${text} \n`);
      console.log(`Nuevo archivo de log añadido ${filePath}\n \n ${text}`);
    } else {
      console.error('Error al manipular el archivo de log:', err);
    }
  }
}