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

      for(let i = 0; i < response.data.length; i++) {
        output += JSON.stringify(response.data[i].profile)+ "<br>";
      }
      getElements(response);
    })();

    function getElements(response) {
      $('#solution').text(output);
    }

  });
});
