var firebaseConfig = {
  apiKey: "AIzaSyBnlmUBz1i1fZzYKWyonvLXNYAz5w5gIbw",
  authDomain: "brand-baptiste.firebaseapp.com",
  databaseURL: "https://brand-baptiste.firebaseio.com",
  projectId: "brand-baptiste",
  storageBucket: "brand-baptiste.appspot.com",
  messagingSenderId: "23203165211",
  appId: "1:23203165211:web:d677fd5eac909f23c674be"
};
 firebase.initializeApp(firebaseConfig);
//  const auth = firebase.auth();

var db=firebase.firestore();


//image
let blogImage;
let blog = [];
function uploadImage(event){
  if(event.target.files[0] != null){
      blogImage = event.target.files[0];
  }
}


function submit() {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
  let blogTitle = document.getElementById('inputtitle').value;
  let blogContnent = document.getElementById('inputcontent').value;
  let blogOwner = "John Doe";
  let blogId = uuidv4();

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

  db.collection("blog").get().then((querySnapshot) => {
    querySnapshot.forEach((blog1)=> {
      console.log(blog1.data().imageURL);
      
      // doc.data() is never undefined for query doc snapshots
      // console.log(blog1.id, " => ", blog1.data());
     firebase.storage().ref(blog1.data().imageURL).getDownloadURL().then((blogImageUrl)=>{
      //  console.log(blogImageUrl);
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


 function dipslayBlogPosts(){
 let postTitle = document.getElementById('headerWrapper');
 let postImage = document.getElementById('imageWrapper');
 let postBody = document.getElementById('contentWrapper');
 let postDate = document.getElementById('dateWrapper');
 let postAuthor = document.getElementById('ownerWrapper');
//  let size = blog.length;
    console.log(blog.length);
    console.log('hihi');

  blog.forEach((post) => {
    postTitle.innerHTML = post.title;
    postImage.src = post.imageSrc;
    postBody.innerHTML = post.blogContent;
    postDate.innerHTML = post.date;
    postAuthor.innerHTML = post.owner;
  })
}

fetchData();
// dipslayBlogPosts();
setTimeout(()=>{
  dipslayBlogPosts()
},10000)









// window.onload=function(){
//   this.getData();
// }
// function deletePost(key){
//   console.log(key.id.toString());
//   var doc1=key.id.toString();
// firebase.firestore().collection('blog').doc(doc1).delete();
// getData();
// }