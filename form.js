//reference enter your name
var nameSet = document.querySelector("#input-first")
// reference enter your Surname
var surnameSet = document.querySelector("#input-second")
//reference female/male
var genderSet = document.querySelector("#input-forth")
//reference DOB
var DOBSet = document.querySelector("#input-date")
//reference ID
var myID = document.querySelector("#input-id")
//reference Physical Address
var addressSet = document.querySelector("#input-address")
//reference Contacts
var ContactSet = document.querySelector("#input-contact")
//reference the doctors selection
var doctorSet = document.querySelector("#input-doctor")
//reference the race
var raceSet = document.querySelector("input-race")
//reference the Nationality
var ubuzwe = document.querySelector("#input-third")
//reference the radio buttons
var radioSet = document.querySelector("#input-radio")
//reference the E-mail
var EmailSet = document.querySelector("#input-email")
//reference the description
var descriptionSet = document.querySelector("#input-msg")
//reference the submit buttion
var submitBtn = document.querySelector("#button-send")
//reference the form
var form = document.querySelector("#form-user")

var fillForm = [];

submitBtn.addEventListener('click', function (data) {
    var myForm = form.value;
    var nameP = nameSet.value;
    var surname = surnameSet.value;
    // var gender = genderSet.value;
    // var dob = DOBSet.value;
    // var ID = myID.value;

    // data = data.toLowerCase();
    // data = data.toUpperCase();
    if (myForm) {
        if (!fillForm.includes(data)) {
            fillForm.push(data)
            console.log(fillForm);
        }
        if(!nameP){
            console.log(nameP);
            fillForm.push({input:'input-first', msg:'name required'})
        }
        
    }
})



// const ubuzwe = function(){
//     document.getElementById('button-send').addEventListener('click', Submit);
// }

// const Submit = function(data){
//     data.preventDefault();
//     data.stopPropagation();
//  //   let fills = validation();
//     if(fills.){
//         document.getElementById('form-user').onsubmit();
//     }else{
//         fills.forEach(function(object){
//             document.getElementById(obj.input);
//             feild.parentElement.classList.add('error')
//             feild.parentElement.SetAttribute(data-errormsg, obj.msg)
//         })
//     }
// }

// let future = [];
// const validate = function(data){
//     let checkIt = document.getElementById('input-radio');
//     if(!checkIt.checked){
//       checkIt.parentElement.classList.add('error');
//       checkIt.parentElement.add(data-errormsg, 'select your answer')
//       future.push({input:'input-radio', msg:'select your answer'})
//     }
// }

// let select = document.getElementById('input-radio')
// if(select === 0){
//     future.push({input:'input-radio', msg:'select your answer'})
// }
// let first = document.getElementById('input-first');
// let second = document.getElementById('input-second')

// if(first.value === ""){
//   future.push({input:'input-first', msg:'Require field'})
// }

// document.addEventListener('DOMContentLoaded', ubuzwe)