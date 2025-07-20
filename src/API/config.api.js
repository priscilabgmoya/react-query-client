import axios from "axios";
function AxiosInstance(){
    const instancia = axios.create({
        baseURL: "http://localhost:3001", // Cambia esto a la URL de tu API
        headers: {
           //'Content-Type': 'application/json',
          //'Content-Type': 'multipart/form-data',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            // Otros encabezados si es necesario
        }
    }); 
    return instancia; 
}
const api = AxiosInstance(); 
export  {api}; 