const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
        console.log(doc.data());
// myBlogs.innerHTML = "helloworld";
let myBlogs = document.createElement("div");
// let title = document.createElement("p");
// let content = document.createElement("p");

// title.textContent = "helloWold";
// content.textContent = doc.data().description;

// myBlogs.appendChild(title);
// myBlogs.appendChild(content);

myBlogs.innerHTML = `<div class="flexbox-blog-item">
                <img src="${Image}">
                <a href="./commet.html"><h3>${doc.data().title}</h3></a>
                <p>
                ${doc.data().description}
                </p>
            </div>`
blog.appendChild(myBlogs)
        readingBlogs();    
    });
})
function readingBlogs(){
 
console.log("n");

}


const myForm = document.getElementById("my-form");
myForm.addEventListener('submit', (e) => {

  e.preventDefault();

  // get value from input field
  let title = document.getElementById('title').value;
  let image = document.getElementById('img').files[0];
  let content = document.getElementById('description').value;
  let created_at = new Date();

//upload image
// function change(){
//   let file = {};
//   file = e.target.files[0];
//   firebase.storage().ref(`blogs/images/${blogId}`).put(file).then((img) => {
//     console.log(img)
//   })
// };

  // save image in storage
  const storageRef = firebase.storage().ref();
  const imageName = storageRef.child(image.name);
  const articleImage = imageName.put(image);
  console.log(title)
  console.log(image)
  console.log(content)
  console.log(imageName)
  articleImage.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransfarred/snapshot.totalBytes)*100;

    console.log( "upload is " + progress + "%" + " image uploaded")
  }, (error



    const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
        console.log(doc.data());
// myBlogs.innerHTML = "helloworld";
let myBlogs = document.createElement("div");
// let title = document.createElement("p");
// let content = document.createElement("p");

// title.textContent = "helloWold";
// content.textContent = doc.data().description;

// myBlogs.appendChild(title);
// myBlogs.appendChild(content);

myBlogs.innerHTML = `<div class="flexbox-blog-item">
                <img src="${Image}">
                <a href="./commet.html"><h3>${doc.data().title}</h3></a>
                <p>
                ${doc.data().description}
                </p>
            </div>`
blog.appendChild(myBlogs)
        readingBlogs();    
    });
})
function readingBlogs(){
 
console.log("n");

}





//////////////////////////////////////////////////////////
const blog = document.querySelector(".flexbox-blog");
db.collection("blogs").get().then((blogs) =>{
  blogs.forEach((doc) => {
      console.log(doc.data());
      let myBlogs = document.createElement("div");
      myBlogs.innerHTML = `<div class="flexbox-blog-item">
                <img src="${Image}">
                <a href="./commet.html"><h3>${doc.data().title}</h3></a>
                <p>
                ${doc.data().description}
                </p>
            </div>`
            blog.appendChild(myBlogs)
        readingBlogs();    
    });
})

function readingBlogs(){
 
  console.log("n");
  
  }

  const myForm = document.getElementById("my-form");
myForm.addEventListener('submit', (e) => {

  e.preventDefault();

  // get value from input field
  let title = document.getElementById('title').value;
  let image = document.getElementById('img').files[0];
  let content = document.getElementById('description').value;
  let created_at = new Date();

  const storageRef = firebase.storage().ref();
  const imageName = storageRef.child(image.name);
  const articleImage = imageName.put(image);
  console.log(title)
  console.log(image)
  console.log(content)
  console.log(imageName)
  articleImage.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransfarred/snapshot.totalBytes)*100;

    console.log( "upload is " + progress + "%" + " image uploaded")
  }, (error



    const blog = document.querySelector(".flexbox-blog");
// const myBlogs = document.getElementById("myBlogs");

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach((doc) => {
        console.log(doc.data());
// myBlogs.innerHTML = "helloworld";
let myBlogs = document.createElement("div");

myBlogs.innerHTML = `<div class="flexbox-blog-item">
                <img src="${Image}">
                <a href="./commet.html"><h3>${doc.data().title}</h3></a>
                <p>
                ${doc.data().description}
                </p>
            </div>`
blog.appendChild(myBlogs)
        readingBlogs();    
    });
})
function readingBlogs(){
 
console.log("n");

}
