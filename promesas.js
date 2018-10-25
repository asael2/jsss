export function promesa() {

  function httpGET(url) {
    return new Promise(function (resolve, reject) {
      //create request object
      var request = new XMLHttpRequest();

      //callback to call when readyState changes
      request.onreadystatechange = function () {
        //check status when operation is completed
        if (request.readyState == 4) {
          //if GET request is resolved with code 200, resolve promise
          if (request.status === 200) {
            resolve(request.response);
          }
          //otherwise, reject promise
          else {
            reject(new Error(request.statusText));
          }
        }
      };

      //callback to call when error is received: reject promise
      request.onerror = function () {
        reject(new Error(this.statusText));
      };

      //initialize as GET request and set url
      request.open('GET', url);

      //send http get request
      request.send();
    });
  };


  //Here, we add callbacks
  httpGET('https://newsapi.org/v2/top-headlines?country=co&language=es&apiKey=890ed3b022e44dedaae9d79d12a03426')
    .then(function (value) {
      console.log("Exito!");
      console.log(value);
    }, function (reason) {
      console.log("error ", reason);
    })
}
