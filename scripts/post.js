

//image
let blogImage;
let blog = [];
function uploadImage(event){
  if(event.target.files[0] != null){
      blogImage = event.target.files[0];
  }
}

const submitForm = document.getElementById('createform');
submitForm.addEventListener('submit',onSubmit); 


let blogTitle = document.getElementById('inputtitle').value;
let blogContnent = document.getElementById('inputcontent').value;
let blogOwner = "John Doe";
let blogId = uuidv4();


function onSubmit(e) {
  e.preventDefault();
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  

console.log(blogImage);

  firebase.storage().ref(`blog/${blogId}/blogImage`).put(blogImage).then(()=>{
    db.collection('blog').doc(`${blogId}`).set({
    
      title: blogTitle,
      blogBody: blogContnent,
      owner: blogOwner,
      imageURL: `blog/${blogId}/blogImage`,
      date: date

  }).then(()=>{
  }).catch((collectionError)=>{
      alert(collectionError);
  })

})
.catch((storageError) =>{
  alert(storageError);
})


}

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
return v.toString(16);
});
}

//Retrieve data


function fetchData(){
    const db = firebase.firestore();
  db.collection("blog").get().then((querySnapshot) => {
    querySnapshot.forEach((blog1)=> {
      console.log(blog1.data().imageURL);
      
      // doc.data() is never undefined for query doc snapshots
      // console.log(blog1.id, " => ", blog1.data());
     firebase.storage().ref(blog1.data().imageURL).getDownloadURL().then(
      (blogImageUrl)=>{
       console.log(blogImageUrl);
       console.log('hhhhh');
         blog.push({
             title: blog1.data().title,
             blogContent: blog1.data().blogBody,
             date: blog1.data().date,
             owner: blog1.data().owner,
             imageSrc: blogImageUrl
            
         })
      }).catch((downUrlError)=>{
        console.log('uuuuu');
          console.log(downUrlError);


      });
    })
    // .catch((fetchingError)=>{
    //   console.log(fetchingError);
    // })
  }  

)
}




function saveChanges() {
  db.collection("blog").doc(id).update({
    title: blogTitle,
    blogBody: blogContnent,
    imageURL: `blog/${blogId}/blogImage`,
  }) 
}


function displayBlogPosts() {
  let container = document.querySelector('.right-side');
 
   db.collection("blog").get().then((blog) => {
    blog.forEach(async(post) => {
     const image = await firebase.storage().ref(post.data().imageURL).getDownloadURL().then((imageURL) => {
       return imageURL
     })
 
   const div = document.createElement('div');
   div.innerHTML = `
     <div class="first-post">
     <div class="post-text">
       <div class="post-text1">
         <h3>${post.data().title}</h3>
         <br>
         <p>
         ${post.data().blogBody}
         </p>
       </div>
       <div class="down-comment">
         <ul>
           <li>${post.data().owner}</li>
           <li>${post.data().date}</li>
         </ul>
       </div>
     </div>
     <div class="blog-picture">
       <img src="${image}" alt="">
     </div>
     <div class="options">
     <div onclick="editBlog()" id="editBlog" class="editBlog">Edit Blog</div>
     <div id="deleteBlog" class="deleteBlog">Delete Blog</div>
     </div>
   </div>`
 container.appendChild(div);
 })
   })
 
   const editBlog = document.getElementById('editBlog');
 
   // function deleteBlog(){
     const deleteBlog = document.getElementById('deleteBlog');
     deleteBlog.addEventListener('click', (e) => {
       // e.stopPropagation();
     
       // let dataId = e.target.getAttribute('data-id');
     
       // db.collection('blogs').doc(dataId).delete().then(function() {
           console.log("Document successfully deleted!");
     
     //   }).catch(function(error) {
     //       console.error("Error removing document: ", error);
     //   });
     })
   // }
  
    
 }
 
 //  fetchData();
  // displayBlogPosts()
  setTimeout(()=>{
  displayBlogPosts()
  },10000)
  
  











