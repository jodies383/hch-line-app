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

var existingStorage
if (localStorage['Appointments']) {
    existingReg = JSON.parse(localStorage.getItem('Appointment'));
    
    formDetails = [];
}

submitBtn.addEventListener('click', function () {
    class details {
        constructor(nameP, surname, gender, Race, DoB, Nationality, address, contacts, Email, Docs, YesDescription) {
            this.Name = nameP;
            this.Surname = surname;
            this.Gender = gender;
            this.DoB = DoB;
            this.Race = Race;
            this.Nationality = Nationality;
            this.Doctors = Docs;
            this.contact = contacts
            this.description = YesDescription;
            this.Email = Email
            this.Address =address;
        }
    }

   form.onSubmit = function(){
    nameP = document.getElementById("nameP").value;
    surname = document.getElementById("surname").value;
    gender = document.getElementById("gender").value;
    DoB = document.getElementById("DoB").value;
    Race = document.getElementById("Race").value;
    
   }
})