const hospitalList = document.querySelector(".hosp")
const search = document.querySelector(".search")
const districtList = FacilitiesByDistrict()
const templateElem = document.querySelector(".appTemplate").innerHTML;
const appTemplate = Handlebars.compile(templateElem);
const displayElem = document.getElementById("input-Hos");
const bookingRegions = document.querySelector(".book");

showHosp(districtList.districtHospitalList());

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

function showDistrictHospitals (district) {
    
    const districtData = districtList.hospitalsByDistrict()[district];
    var displayHTML = appTemplate({reg : districtData});
    displayElem.innerHTML = displayHTML;

}

bookingRegions.addEventListener('change', function(){
    const hospitalsForRegion = districtList.filter((hospital) => hospital.District.toLocaleLowerCase() ===  bookingRegions.value)
    showHosp(hospitalsForRegion);
})

function showBookingForm() {

    document.querySelector(".makeBooking").classList.toggle('hidden');
    
    const selectedDistric = bookingRegions.value;
    showDistrictHospitals(selectedDistric);

}
