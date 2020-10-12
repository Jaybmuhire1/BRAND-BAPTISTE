



//Get user
// const usersList = document.querySelector('tbody');
db.collection("users").get().then(function(querySnapshot) {
  querySnapshot.forEach( async function(doc) {
    console.log(doc.data());
  const user = await doc.data();
    const userBody = document.createElement('tbody');

    const val = document.querySelector('table');

    userBody.innerHTML = `<td data-label="Email">${user.email}</td>
    <td data-label="Role">${user.role}</td>
    <td data-label="Action"><a href="#" onclick="deleteUser()" class="delete">Delete</td>
    <td><a href="#" class="edit">Edit</td>
    <td><a href="#" class="publish">Publish</td>` 
    // usersList.innerHTML = userBody;
    val.appendChild(userBody);
    // console.log(usersList);
   });
});

function deleteUser() {
  db.collection("users").doc("uid").delete().then(function(querySnapshot) {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
  
  }