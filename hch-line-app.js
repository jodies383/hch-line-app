<<<<<<< HEAD
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';

=======

anychart.onDocumentReady(function () {



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
        ]
    };


    var chart = anychart.column();


    chart.data(data);


    chart.title("Number of cases in the Western Cape June 2021");


    chart.container("container");
    chart.draw();

    chart.listen("pointsSelect", (e) => {
        var name = e.point.getStat("categoryName");
        console.log(name);
    });
});
const hosp = document.querySelector(".hosp")
const search = document.querySelector(".search")
// hosp.innerHTML = "<tr><td>1</td><td>2</td><td>3</td></tr>"
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
        "Address": "Northpine Drive, North Pine, Cape Town, 7560.",
        "District": "Northern"
    }
]
districtList.forEach(function(listHosp) {
   let hospString = `<tr>
    <td>${listHosp.Name}</td>
    <td>${listHosp.Address}</td>
    <td>${listHosp.District}</td>
    </tr>`
    console.log(hospString);
    hosp.innerHTML += hospString;
});
search.addEventListener('keyup', function(filSearch){
    const filHosp = filSearch.target.value;

    const disFil = districtList.filter(function(facilities){
        return facilities
    });
})
>>>>>>> b7eb10f3d4202a4ed4aa0de97ce186704b29431d
