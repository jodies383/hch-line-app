//reference enter your name
var nameSet = document.querySelector(".nameDeatail")
// reference enter your Surname
var surnameSet = document.querySelector(".surnameDetail")
//reference female/male
var genderSet = document.querySelector(".genderDetail")
//reference DOB
var DOBSet = document.querySelector(".BOD")
//reference Physical Address
var addressSet = document.querySelector(".AddressDetail")
//reference Contacts
var ContactSet = document.querySelector(".ContactsDetail")
//reference the doctors selection
var doctorSet = document.querySelector(".doctors")
//reference the radio buttons
var yesSet = document.querySelector(".theYesSetting")
var noSet = document.querySelector(".theNoSettings")
//reference the description
var descriptionSet = document.querySelector(".descriptionSetting")
//reference the submit buttion
var submitBtn = document.querySelector(".submitBtn")

var existingStorage
if (localStorage['Appointments']) {
    existingReg = JSON.parse(localStorage.getItem('Appointment'));
    // console.log(localStorage.getItem('regNumber'));
}

submitBtn.addEventListener('click', function (){
    
})