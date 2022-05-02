const http = require('http')

let _port = 8080

const server = http.createServer((req, res) => {
    console.log(req.url)
    let list_of_arg = req.url.split('/', 4)
    console.log(list_of_arg)
    console.log(calc(list_of_arg[1], Number(list_of_arg[2]), Number(list_of_arg[3])))
    res.write('<h1>'+ calc(list_of_arg[1], Number(list_of_arg[2]), Number(list_of_arg[3])) +'</h1>');
    res.end()

  }).listen(_port, () => {
    console.log("server is running on " + _port + " port.")
  })

  function calc(operator, n1, n2){
      if (operator == 'add'){
          return n1 + n2;
      }
      else if (operator == 'sub'){
          return n1 - n2;
      }
      else if (operator == 'mul'){
          return n1 * n2;
      }
      else if (operator == 'div'){
          return n1 / n2;
      }

  }