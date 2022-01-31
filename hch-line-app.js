const hospitalList = document.querySelector(".displayHospitalLists")
const search = document.querySelector(".search")
const templateElem = document.querySelector(".appTemplate").innerHTML;
const appTemplate = Handlebars.compile(templateElem);
const displayElem = document.getElementById("input-Hos");
const bookingRegions = document.querySelector(".book");
const districtNames = FacilitiesByDistrict()
const hospitalInformation = districtNames.districtHospitalList()
showHosp(hospitalInformation);

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

if (search) {
    search.addEventListener('keyup', (filSearch) => {
        const filHosp = filSearch.target.value;

        const disFil = hospitalInformation.filter(function (facilities) {
            return facilities.District.toLocaleLowerCase().includes(filHosp);
        });
        showHosp(disFil);
    })
}

function showDistrictHospitals(district) {

    const districtData = districtNames.hospitalsByDistrict()[district];
    var displayHTML = appTemplate({ reg: districtData });
    displayElem.innerHTML = displayHTML;

}

bookingRegions.addEventListener('change', function () {
    let hospitalsForRegion
    if (bookingRegions.value == '') {
        hospitalsForRegion = hospitalInformation
    }
    else {
        hospitalsForRegion = hospitalInformation.filter((hospital) => hospital.District.toLocaleLowerCase() === bookingRegions.value)
    }
    showHosp(hospitalsForRegion);
})

function showBookingForm() {

    document.querySelector(".makeBooking").classList.toggle('hidden');

    const selectedDistric = bookingRegions.value;
    showDistrictHospitals(selectedDistric);

}
