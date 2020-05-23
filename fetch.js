document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPost').addEventListener('click', getPost);
document.getElementById('addPost').addEventListener('submit', addPost);
document.getElementById('getComment').addEventListener('click', getComment);
document.getElementById('getAlbum').addEventListener('click', getAlbum);
document.getElementById('getImages').addEventListener('click', getImages);

//Feching the the data from from sample.txt
function getText(){
   //fetch('sample.txt')
   //.then(function(res){
   // return (res.text());
   //})
   //.then(function(data){
   //  console.log(data)
   //})
   
   
   fetch('sample.txt')
   .then((res) => res.text())
   .then((data) => {
      document.getElementById('output').innerHTML = data;
   })
   .catch((err) => console.log(err));
   
}


//Fetching the data from users.json
function getUsers(){
   fetch('users.json')
   .then((res) => res.json())
   .then((data) => {
      let output = `<h2 class="bb-4">Users</h2>`;
      data.forEach((user) => {
         output += `
            <ul class="list-group mb-3">
               <li class="list-group-item">Id: ${user.id}</li>
               <li class="list-group-item">Name: ${user.name}</li>
               <li class="list-group-item">Email: ${user.email}</li>
            </ul>
            `;
      });
      document.getElementById('output').innerHTML = output;
      
   })
   .catch((err) => console.log(err));
}

//Fetching data from an outside Api - Get Post
function getPost(){
   fetch('http://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((data) => {
      let outputPost = `<h2 class="bb-4">Posts</h2>`;
      data.forEach((post) => {
         outputPost += `
            <div class="card csard-body mb-3 p-3">
               <h3>${post.title}</h3>
               <p>${post.body}</p>
            </div>
            `;
      });
      document.getElementById('output').innerHTML = outputPost;
   })
   .catch((err) => console.log(err));
}


//Fetching the data from outside Api - Get Comment
function getComment(){
   fetch('http://jsonplaceholder.typicode.com/comments')
   .then((res) => res.json())
   .then((data) => {
      let outPoutComment = `<h2 class="bb-4">Comment</h2>`;
      data.forEach((comm) =>{
         outPoutComment += `
            <ul class="list-group mb-3">
               <li class="list-group-item">Id: ${comm.id}</li>
               <li class="list-group-item">Name: ${comm.name}</li>
               <li class="list-group-item">Email: ${comm.email}</li>
               <li class="list-group-item">Body: ${comm.body}</li>
            </ul>
         `;
      });
      document.getElementById('output').innerHTML = outPoutComment;
   })
   .catch((err) => console.log(err));
}

//Fetching the data from an outside Api - Get Album
function getAlbum(){
   fetch('http://jsonplaceholder.typicode.com/albums')
   .then((res) => res.json())
   .then((data) => {
      let outputAlbum = `<h2 class="bb-4">Album</h2>`;
      data.forEach((album) =>{
         outputAlbum += `
            <ul class="list-group mb-3">
               <li class="list-group-item">Id: ${album.id}</li>
               <li class="list-group-item">Title: ${album.title}</li>
            </ul>
         `;
      });
      document.getElementById('output').innerHTML = outputAlbum;
   })
   .catch((err) => console.log(err));
}

//Fetching images from an outside Api - Get Images
//function getImages(){
//   fetch('http://jsonplaceholder.typicode.com/photos')
//   .then((res) => res.json())
//   .then((data) => {
//      let outPutImages = `<h2>Images<h2>`;
//      data.forEach((img) => {
//         outPutImages += `
//            <ul>
//               <li>Id: ${img.id}<li/>
//               <li>Title: ${img.title}<li/>
//            </ul>
//            <div>
//               ${img.url}
//            </div>
//            <div>
//               ${img.thumbnailUrl}
//            </div>
//         `;
//      });
//      document.getElementById('output').innerHTML = outPutImages;
//   })
//   .catch((err) => console.log(err));
//}



//add a post using fetch
function addPost(e){
   e.preventDefault();

   let title = document.getElementById('title').value;
   let body = document.getElementById('body').value;

   fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      headers: {
         'Accept': 'application/json, text/plain',
         'Content-type':'application.json'
      },
      body: JSON.stringify({title:title, body:body})
   })
   .then((res) => res.json())
   .then((data) => console.log(data))
   

}
