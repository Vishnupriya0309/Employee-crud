// index2.js
document.addEventListener("DOMContentLoaded", function () {
  const addEmployeeBtn = document.querySelector("#addEmployeeBtn");
  const container = document.querySelector(".container");

  addEmployeeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    renderAddEmployeeForm();
  });

  function renderAddEmployeeForm() {
    const formHTML = `
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

    container.innerHTML = formHTML;

    const form = document.getElementById("form");
    form.addEventListener("submit", handleFormSubmission);

    const cancelBtn = document.querySelector(".btn button[type='button']");
    cancelBtn.addEventListener("click", handleCancel);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const formData = getFormData();
    renderFormData(formData);
  }

  function getFormData() {
    
    return {
      firstName: document.getElementById("FirstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      salary: document.getElementById("Salary").value,
      date: document.getElementById("Date").value,
    };
  }

  function renderFormData(formData) {
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
              <td>${formData.firstName}</td>
              <td>${formData.lastName}</td>
              <td>${formData.email}</td>
              <td>${formData.salary}</td>
              <td>${formData.date}</td>
              <td><button class="delete-btn">Delete</button></td>
              <td><button class="update-btn">Update</button></td>
            </tr>
          </tbody>
        </table>
      </div>`;
    container.innerHTML = formDataHTML;

    const deleteBtn = document.querySelector(".delete-btn");
    const updateBtn = document.querySelector(".update-btn");

    updateBtn.addEventListener("click", function () {
      updateFormWithData(formData);
    });

    deleteBtn.addEventListener("click", function () {
      deleteRow(this);
    });
  }

  function updateFormWithData(formData) {
    window.location.href = `./update.html`
  }

  function handleCancel() {
    container.innerHTML = "";
  }

  function deleteRow(button) {
       const row = button.closest("tr");
    row.remove();
  }
});
