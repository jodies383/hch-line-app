anychart.onDocumentReady(function() {
    var data = {
      header: ["District", "Number of Cases"],
      rows: [
        ["Northern", 748],
        ["Eastern", 767],
        ["Khayelitsha", 27],
        ["Tygerberg", 631],
        ["Mitchells Plain", 268],
        ["Klipfontein", 324],
        ["Southern", 779],
        ["Western", 741]
    ]};
    var chart = anychart.column();
    chart.data(data);
    chart.title("Number of cases in the Western Cape June 2021");
    chart.container("container");
    chart.draw();


  localStorage.setItem('data', JSON.stringify(data))
  });

  var retrieveData = JSON.parse(localStorage.getItem('data'));

const hospitalList = document.querySelector(".hosp")
const search = document.querySelector(".search")
const districtList = [
    {
        "Name": "Mediclinic Durbanville",
        "Address": "Wellington Rd, Durbanville, Cape Town, 7550",
        "District": "Northern"
    },
    {
        "Name": "Fisantekraal Clinic",
        "Address": "Dullah Omar Street, Fisantekraal, Cape Town, 7579",
        "District": "Northern"
    },
    {
        "Name": "Brighton Street Clinic",
        "Address": "Brighton Rd, Kraaifontein, Cape Town, 7570",
        "District": "Northern"
    },
    {
        "Name": "Brackenfell Clinic",
        "Address": "Brackenfell South, Cape Town, 7560",
        "District": "Northern"
    },
    {
        "Name": "Northpine Clinic",
        "Address": "Northpine Drive, North Pine, Cape Town, 7560",
        "District": "Northern"
    },
    {
        "Name": "Helderberg Hospital",
        "Address": "Lourensford Rd, Golden Acre, Cape Town, 7130",
        "District": "Eastern"
    },
    {
        "Name": "Somerset West Clinic",
        "Address": "28 Church St, Somerset West, Cape Town, 7130",
        "District": "Eastern"
    },
    {
        "Name": "Mediclinic Strand",
        "Address": "Main Rd, Somerset West, Cape Town, 7130",
        "District": "Eastern"
    },
    {
        "Name": "Fagan Street Clinic",
        "Address": "22 Fagan St, Strand, Cape Town, 7139",
        "District": "Eastern"
    },
    {
        "Name": "Ikhwezi CDC",
        "Address": "Simon St, Lwandle, Cape Town, 7140",
        "District": "Eastern"
    },
    {
        "Name": "Khayelitsha Hospital",
        "Address": "Walter Sisulu Drive & Steve Biko Drive, Mandela Park, Khayelitsha, 7784",
        "District": "Khayelitsha"
    },
    {
        "Name": "Town 2 CDC",
        "Address": "Cnr Zibonele and, 2 Manyano St, Khayelitsha, Cape Town, 7784",
        "District": "Khayelitsha"
    },
    {
        "Name": "Kuyasa CDC",
        "Address": "Ntlazana Street, Khayelitsha, Cape Town, 7784",
        "District": "Khayelitsha"
    },
    {
        "Name": "Luvuyo CDC",
        "Address": "Hlela Road, Macassar, Cape Town, 7130",
        "District": "Khayelitsha"
    },
    {
        "Name": "Matthew Goniwe CDC",
        "Address": "9 Khwahlaza St, T3-V5, Cape Town, 7784",
        "District": "Khayelitsha"
    },
    {
        "Name": "Dirkie Uys Clinic",
        "Address": "Cnr Dingle &, Church St, Goodwood, Cape Town, 7460",
        "District": "Tygerberg"
    },
    {
        "Name": "Parow Clinic",
        "Address": "257 Voortrekker Rd, Fairfield Estate, Cape Town, 7500",
        "District": "Tygerberg"
    },
    {
        "Name": "Ruyterwacht CDC",
        "Address": "Ruyterwacht, Cape Town, 7460",
        "District": "Tygerberg"
    },
    {
        "Name": "Elsies River Clinic",
        "Address": "Halt Rd, Salberau, Cape Town, 7490",
        "District": "Tygerberg"
    },
    {
        "Name": "Tygerberg Hospital",
        "Address": "Francie Van Zijl Dr, Avenue, Cape Town, 7505",
        "District": "Tygerberg"
    },
    {
        "Name": "Rocklands Clinic",
        "Address": "Cnr Lancaster and, Park Ave, Rocklands, Cape Town, 7798",
        "District": "Mitchells Plain"
    },
    {
        "Name": "Tafelsig CDC",
        "Address": "Kilimanjaro St, Tafelsig, Mitchell's Plain, 7785",
        "District": "Mitchells Plain"
    },
    {
        "Name": "Melomed Mitchells Plain",
        "Address": "Fourth Ave, Mitchells Plain Town Centre, Cape Town, 7785",
        "District": "Mitchells Plain"
    },
    {
        "Name": "Westridge Clinic",
        "Address": "Cnr De Duin Avenue & Wespoort Drive, Westridge, Cape Town, 7130",
        "District": "Mitchells Plain"
    },
    {
        "Name": "Eastridge Clinic",
        "Address": "First Ave, Eastridge, Cape Town, 7785",
        "District": "Mitchells Plain"
    },
    {
        "Name": "Melomed Gatesville",
        "Address": "Clinic St, Gatesville, Cape Town, 7764",
        "District": "Klipfontein"
    },
    {
        "Name": "Crossroads 1 Clinic",
        "Address": "Klipfontein Rd, Cross Road, Cape Town, 7750",
        "District": "Klipfontein"
    },
    {
        "Name": "Manenberg Clinic",
        "Address": "46 Ruimte Road, Manenberg, Cape Town, 7767",
        "District": "Klipfontein"
    },
    {
        "Name": "Hanover Park Clinic",
        "Address": "Cnr Surran Road &, Hanover Park Ave, Hanover Park, Cape Town, 7780",
        "District": "Klipfontein"
    },
    {
        "Name": "Gugulethu Clinic",
        "Address": "Gugulethu Square, 3 Ny 1 &, Ny 3, Cape Town, 7750",
        "District": "Klipfontein"
    },
    {
        "Name": "Ocean View CDC",
        "Address": "Carina Cl, Ocean View, Cape Town, 7975",
        "District": "Southern"
    },
    {
        "Name": "False Bay Hospital",
        "Address": "False Bay Hospital, 17th Avenue, Fish Hoek, Cape Town, 7975",
        "District": "Southern"
    },
    {
        "Name": "Red Hill Clinic",
        "Address": "Scarborough Road, Simon's Town, Cape Town, 7975",
        "District": "Southern"
    },
    {
        "Name": "Hout Bay Clinic",
        "Address": "30 Victoria Ave, Hout Bay, Cape Town, 7806",
        "District": "Southern"
    },
    {
        "Name": "Westlake Clinic",
        "Address": "44 Westlake Dr, Westlake, Cape Town, 7945",
        "District": "Southern"
    },
    {
        "Name": "Melkbosstrand Clinic",
        "Address": "Robben Rd, Melkbosstrand, Cape Town, 7441",
        "District": "Western"
    },
    {
        "Name": "Netcare Blaauwberg Hospital",
        "Address": "Waterville St, Sunningdale, Cape Town, 7441",
        "District": "Western"
    },
    {
        "Name": "Mediclinic Milnerton",
        "Address": "117 Racecourse Rd, Milnerton, Cape Town, 7441",
        "District": "Western"
    },
    {
        "Name": "Tableview Clinic",
        "Address": "South Rd, Table View, Cape Town, 7441",
        "District": "Western"
    },
    {
        "Name": "Du Noon Clinic",
        "Address": "70 Thandabantu Rd, Dunoon, Cape Town, 7441",
        "District": "Western"
    },
]
//hosp.innerHTML += hospString;
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
