const blogList = document.querySelector('tbody')
 db.collection("blog").get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
    blogList.innerHTML +=`<td data-label="Email">${doc.data().title}</td><td data-label="fullname">${doc.data().owner}
    <td data-label="Action"><a href="#" onclick='deleteMessage()' 
     class="delete">Delete</td>
    <td><a href="#"  onclick="update_blog() class="reply">Edit</td> <td><a href="#" class="reply">Publish</td>`

   });
}); 

//Delete posts


function deleteBlog() {
  db.collection("blog").doc("id").delete().then(function(querySnapshot) {
    querySnapshot.ref.remove();
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
  
  }


  //Edit the posts



