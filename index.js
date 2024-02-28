const addEmployeeBtn = document.querySelector("#addEmployeeBtn");
const container = document.querySelector(".container");
const root = document.querySelector("#root");

addEmployeeBtn.addEventListener("click", (e) => {
  e.preventDefault();

     const loginFormDiv = document.createElement("div");
        loginFormDiv.innerHTML = `
    <div class="container">
      <form action="#" id="form">
        <h1 class='formhead'>Add Employee</h1>
        <div class="input-group">
          <label for="FirstName">First Name</label> <br>
          <input type="text" id="FirstName" name="FirstName">
        </div>
        <div class="input-group">
          <label for="lastName">Last Name</label> <br>
          <input type="text" id="lastName" name="lastName">
        </div>
        <div class="input-group">
          <label for="email">Email</label><br>
          <input type="text" id="email" name="email" >
          
        </div>
        <div class="input-group">
          <label for="Salary">Salary</label> <br>
          <input type="number" id="Salary" name="Salary">
          <div class="error"></div>
        </div>
        <div class="input-group">
          <label for="Date">Date</label> <br>
          <input type="Date" id="Date" name="Date">
        </div>
        <div class="btn">
        <button type="submit">Add</button>
        <button type="button" onclick="handleCancel()">Cancel</button>
        <button type="reset">Reset</button>
        </div>
      </form>
    </div>`;

  container.appendChild(loginFormDiv);  

   // add data
      const form = document.getElementById("form");
     form.addEventListener("submit", function (event) {
          event.preventDefault();
         handleFormSubmission();
  });

  const cancelBtn = document.querySelector(".btn button[type='button']");

  cancelBtn.addEventListener("click", function () {
    handleCancel();
  });




function handleFormSubmission() {
  const firstName = document.getElementById("FirstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const salary = document.getElementById("Salary").value;
  const date = document.getElementById("Date").value;


  const formDataHTML = `
  <div id="input-form">
  <table class="tableinput">
  <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th scope="col">Date</th>
      <th scope="col">Actions</th>
       </tr>
      </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${email}</td>
      <td>${salary}</td>
      <td>${date}</td>
      <td><button class="delete-btn">Delete</button></td>
      <td><button class="update-btn">Update</button></td>
      </tr>   
     </tbody>
   </table>    
  </div>`;

  container.innerHTML = formDataHTML;    


  const deleteBtn = document.querySelector(".delete-btn");
  const updateBtn = document.querySelector(".update-btn");

  deleteBtn.addEventListener("click", function () {
    deleteRow(this);
  });

  updateBtn.addEventListener("click", function () {
    updateRow(this);
  });
}

function updateRow(button) {
  const row = button.closest("tr");
  const cells = row.getElementsByTagName("td");

  document.getElementById("FirstName").value = cells[1].textContent;
  document.getElementById("lastName").value = cells[2].textContent;
  document.getElementById("email").value = cells[3].textContent;
  document.getElementById("Salary").value = cells[4].textContent;
  document.getElementById("Date").value = cells[5].textContent;

  // Show the form section
  showFormSection();
}

function deleteRow(button) {
  const row = button.closest("tr");
  row.remove();
}

// Function to handle cancel button click
function handleCancel() {
  // Remove the form from the container
  container.innerHTML = "";
}

function showFormSection() {
  // Implement your logic to show the form section here
  console.log("Form section is shown");
}
});
