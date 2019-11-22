import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { DoctorSearch } from './../src/doctors.js';

$(document).ready(function() {
  $('#formID').submit(function(event) {
    event.preventDefault();

    let name = $('#name').val();
    let output = "";


    (async () => {
      let docSearch = new DoctorSearch();
      const response = await docSearch.findDoc(name);

      output += JSON.stringify(response.data[0].profile)+ "<br>";

      getElements(response);
    })();

    function getElements(response) {
      $('#solution').text(output);
    }

  });
});
