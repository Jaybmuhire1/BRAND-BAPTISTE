
const messagesList = document.getElementById('tableBody')
db.collection("messages").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    messagesList.innerHTML +=`<td data-label="Email">${doc.data().subject}</td><td data-label="fullname">${doc.data().fullname}</td><td data-label="subject">${doc.data().email}</td>
    <td data-label="Action"><a href="#" onclick='deleteMessage()' 
     class="delete">Delete</td>
    <td><a href="#" class="reply">Reply</td>`
  
   });
});
 
function deleteMessage() {
db.collection("messages").doc("id").delete().then(function(querySnapshot) {
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
});

}




