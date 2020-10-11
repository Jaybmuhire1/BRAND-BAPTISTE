const postsList = document.getElementById('tableBody')
 db.collection("posts").get().then(function(querySnapshot) {
   querySnapshot.forEach(function(doc) {
     postsList.innerHTML += "<tr> <td>"+ doc.data().title +"</td> <td>"+ doc.data().content +"</td> <td class='all-btn' ><button  onclick='viewContent()' class='button button1'> "+ 'View' +" </button> <button  onclick='editContent()' class='button button2'>"+ 'Edit' +"</button> <button onclick='deletePost()' class='button button3'>"+ 'Delete' +"</button> </td> </tr>" 
    });
});

