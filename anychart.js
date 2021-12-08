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