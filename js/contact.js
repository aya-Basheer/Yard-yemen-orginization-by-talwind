

const form = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');



//array for store employee
let employees = [];
let trash = [];

// proccess new input
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = name.value.trim();
  const userEmail = email.value.trim();
  const userPhone = phone.value.trim();
 

  if (!userName || ! userEmail  || !userPhone ) {
    alert('Please fill in all fields!');
    return;
  }

    if (userName .length < 4 ) {
    alert('Name  must be at least 4 characters long.');
    return;
  }
if (!userEmail.includes('@')){
  
alert('email it isnot valid');
  
}
      const hasNumbers = /\d/; 
    if(!hasNumbers.test(userPhone)){

 alert('phone must  contain numbers only.');
    }
 
     alert('Your request under procces we will send  to you later.');
  employees.push({ id: Date.now(), userName, userPhone,userEmail });
  renderEmployees();
  form.reset();
});


// function renderEmployees() {
//   tableBody.innerHTML = '';
//   // mainCount.innerText = employees.length;

//   employees.forEach(emp => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//       <td>${emp.userName}</td>
//       <td>${emp.userEmail}</td>
//        <td>${emp.userPhone}</td>`;
      
   

//     tableBody.appendChild(tr);
//   });
// }








// scale performance
console.time('render');
renderEmployees();
console.timeEnd('render');

