async function AjaxCall(){
    let postTag = document.querySelector("#todoid")
    let todoid = postTag.value;
    let url = `https://jsonplaceholder.typicode.com/posts/${todoid}`;

    //Ajax call
    let result = await fetch(url);

    //Get the json data
    let data = await result.json();

    //present data to UI
    let parentTag = document.querySelector("#parent");
    let newElement=  `<h1>Userid: ${data.userId}</h1>
    <h1>id:${data.id}</h1>
    <h1>${data.title}</h1>
    <p style="font-size:21px">${data.body}</p>`;

    parentTag.innerHTML = newElement
    
}

async function getAllDetails(){
    let url = "https://jsonplaceholder.typicode.com/posts/";
    let result = await fetch(url);
    let list = await result.json();
  
    for (let item of list) {
      let parentTag = document.querySelector("#parent2");
      let existingElement = parentTag.innerHTML;
      let newElement = `
                  <div class="alert alert-primary">
                  <h1>${item.title}</h1>
                  <p style="font-size:21px">${item.body}</p>
                  </div>
                  `;
      parentTag.innerHTML = newElement + existingElement;
    }
}
