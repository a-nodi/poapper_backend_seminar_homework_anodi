const http = require('http');

let database = {};

let _port = 8080;

const server = http.createServer((req, res) => {
    const list_of_arg = req.url.split('/');
    const method = req.method;

    console.log(req.url);
    console.log(database);
    
    if (method == 'POST'){
        res.write("POST " + list_of_arg[1] + " " + list_of_arg[2]);
        database[list_of_arg[1]] = list_of_arg[2];
        res.end();
    }
    else if (method == 'GET'){
        if (list_of_arg[1] == ''){
            res.write("GET " + JSON.stringify(database));
            res.end();
        }
        else {
            res.write("GET " + database[list_of_arg[1]]);
            res.end();
        }
    }
    else if (method == 'PUT'){
        res.write("PUT " + list_of_arg[1] + " " + database[list_of_arg[1]] + " -> " + list_of_arg[2]);
        database[list_of_arg[1]] = list_of_arg[2]; 
        res.end();
    }
    else if (method == 'DELETE'){
        res.write("DELETE " + list_of_arg[1]);
        database[list_of_arg[1]] = undefined;    
        res.end();
    }
    else{
        res.write(JSON.stringify(database));
        res.end();
    }
}).listen(_port, () => {
    console.log("server is running on " + _port + " port.")
  });