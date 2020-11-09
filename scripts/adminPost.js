const blogList = document.querySelector('tbody')




db.collection("blog").get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
    blogList.innerHTML +=`<td data-label="Email">${doc.data().title}</td><td data-label="fullname">${doc.data().owner}
    <td data-label="Action"><a href="#" onclick="deleteBlog('${doc.id}')" 
     class="delete">Delete</td>
    <td><a href="#"  onclick="update_blog('${doc.id}')" class="reply">Edit</td>`

   });
}); 



function deleteBlog(id) {

  db.collection("blog").doc(id).delete().then(() => {
		console.log("Document successfully deleted!");
		// window.location.reload();
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
  
  }


  //Edit the posts
 function update_blog(id) {
	 localStorage.setItem('Update-id', id)
	 window.location.href = '../pages/admin/admCreatepost.html'
 }




	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			db.collection('blog')
				.get()
				.then((querySnapshot) => {
					if (querySnapshot.docs.length < 1) {
						return (blogTable.innerHTML += 'No post');
					}
					querySnapshot.forEach((doc) => {
						let postList = getPost(doc.id, doc.data());
						blogTable.appendChild(postList);
					});
				})
				.catch((error) => {
					console.log('Error getting documents: ', error);
				});
		}
	});