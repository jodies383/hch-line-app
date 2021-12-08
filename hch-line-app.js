const hospitalList = document.querySelector(".hosp")
const search = document.querySelector(".search")
const districtList = districtHospitalList()

showHosp(districtList);

function showHosp(list) {
    const dString = list.map(function (listHosp) {
        let hospString = `<tr>
         <td>${listHosp.Name}</td>
         <td>${listHosp.Address}</td>
         <td>${listHosp.District}</td>
         </tr>`
        return hospString
    });

    const theHosp = dString.join("");
    if (hospitalList) {
        hospitalList.innerHTML = theHosp;
    }
}

if (search){
search.addEventListener('keyup', function (filSearch) {
    const filHosp = filSearch.target.value;

    const disFil = districtList.filter(function (facilities) {
        return facilities.District.includes(filHosp);
    });
    showHosp(disFil)
})
}

var northern = ['Mediclinic Durbanville', 'Fisantekraal Clinic', 'Brighton Street Clinic', 'Brackenfell Clinic', 'Northpine Clinic']

var eastern = ["Helderberg Hospital", "Somerset West Clinic", "Mediclinic Strand", "Fagan Street Clinic", "Ikhwezi CDC"]

var khayelitsha = ["Khayelitsha Hospital", "Town 2 CDC", "Kuyasa CDC", "Luvuyo CDC", "Matthew Goniwe CDC"]

var mitchellsPlain = ["Rocklands Clinic","Tafelsig CDC","Melomed Mitchells Plain", "Westridge Clinic","Eastridge Clinic"]

var tygerberg = ["Dirkie Uys Clinic", "Parow Clinic", "Ruyterwacht CDC", "Elsies River Clinic", "Tygerberg Hospital"]

var klipfontein = ["Melomed Gatesville","Crossroads 1 Clinic","Manenberg Clinic","Hanover Park Clinic", "Gugulethu Clinic"]

var southern = ["Ocean View CDC","False Bay Hospital","Red Hill Clinic","Hout Bay Clinic","Westlake Clinic"]

var western = ["Melkbosstrand Clinic","Netcare Blaauwberg Hospital","Mediclinic Milnerton","Tableview Clinic","Du Noon Clinic"]

const districs = {
    northern,
    eastern,
    khayelitsha,
    mitchellsPlain,
    tygerberg,
    klipfontein,
    southern,
    western ,
}



var templateElem = document.querySelector(".appTemplate").innerHTML;
var appTemplate = Handlebars.compile(templateElem);
var displayElem = document.getElementById("input-Hos");

function showDistrictHospitals (district) {
    
    const districtData = districs[district];
    var displayHTML = appTemplate({reg : districtData});
    displayElem.innerHTML = displayHTML;

}

const bookingRegions = document.querySelector(".book");

bookingRegions.addEventListener('change', function(){
    const hospitalsForRegion = districtList.filter((hospital) => hospital.District.toLocaleLowerCase() ===  bookingRegions.value)
    showHosp(hospitalsForRegion);
})


function showBookingForm() {

    document.querySelector(".makeBooking").classList.toggle('hidden');
    
    const selectedDistric = bookingRegions.value;
    showDistrictHospitals(selectedDistric);

}
