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
    </div>`
container.appendChild(div);
})
})
   
}

//  fetchData();
 // displayBlogPosts()
 setTimeout(()=>{
 displayBlogPosts()
 },10000)
 
 
