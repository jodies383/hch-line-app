//reference enter your name
var nameSet = document.querySelector("#nameP")
// reference enter your Surname
var surnameSet = document.querySelector("#surname")
//reference female/male
var genderSet = document.querySelector("#gender")
//reference DOB
var DOBSet = document.querySelector("#DOB")
//reference Physical Address
var addressSet = document.querySelector("#address")
//reference Contacts
var ContactSet = document.querySelector("#contacts")
//reference the doctors selection
var doctorSet = document.querySelector("#doctors")
//reference the race
var raceSet = document.querySelector(".race")
//reference the Nationality
var ubuzwe = document.querySelector("#Nationality")
//reference the radio buttons
var yesSet = document.querySelector(".theYesSetting")
var noSet = document.querySelector(".theNoSettings")
//reference the E-mail
var EmailSet = document.querySelector("#Email")
//reference the description
var descriptionSet = document.querySelector("#description")
//reference the submit buttion
var submitBtn = document.querySelector(".submitBtn")
//reference the form
var form = document.querySelector(".form")

// var existingStorage
// if (localStorage['Appointments']) {
//     existingReg = JSON.parse(localStorage.getItem('Appointment'));
    
//     formDetails = [];
// }

// submitBtn.addEventListener('click', function () {
//     class details {
//         constructor(nameP, surname, gender, Race, DoB, Nationality, address, contacts, Email, Docs, YesDescription) {
//             this.Name = nameP;
//             this.Surname = surname;
//             this.Gender = gender;
//             this.DoB = DoB;
//             this.Race = Race;
//             this.Nationality = Nationality;
//             this.Doctors = Docs;
//             this.contact = contacts
//             this.description = YesDescription;
//             this.Email = Email
//             this.Address =address;
//         }
//     }
// console.log(constructor);
//    form.onSubmit = function(){
//     nameP = document.getElementById("nameP").value;
//     surname = document.getElementById("surname").value;
//     gender = document.getElementById("gender").value;
//     DoB = document.getElementById("DoB").value;
//     Race = document.getElementById("Race").value;
    
//    }
// })

const ubuzwe = function(){
    document.getElementById('submit-data').addEventListener('click', Submit);
}

const Submit = function(data){
    data.preventDefault();
    data.stopPropagation();
    let fill = validation();
    if(fill.length === 0){
        document.getElementById('form-user').onsubmit();
    }else{
        fill.forEach(function(object){
            document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.SetAttribute(data-errormsg, obj.msg)
        })
    }
}

let fillup = [];

const validate = function(data){
let checkYes = document.getElementById('Yes')
let checkNo = document.getElementById('No')
if(!checkYes.checked){
    checkYes.parentElement.classList.add('error');
    checkYes.parentElement.classList.add(data-errormsg, 'select your answer')
    fillup.push({input:'input-yes', msg:'select your answer'})
}
if(!checkNo.ckecked){
    checkNo.parentElement.classList.add('error');
    checkNo.parentElement.classList.add(data-errormsg, 'select your answer')
    fillup.push({input:'input-No', msg:'select your answer'})
}
}

let select = document.getElementById('input-gender')
if(!select){
    fillup.push({input:'input-gender', msg:'Please select your gender'})
}
document.addEventListener('DOMContentLoaded', ubuzwe)