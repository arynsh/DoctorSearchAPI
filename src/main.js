import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { DoctorSearch } from './../src/doctors.js';

$(document).ready(function() {
  $('#formID').submit(function(event) {
    event.preventDefault();

    let name = $('#name').val();


    (async () => {
      let docSearch = new DoctorSearch();
      const response = await docSearch.findDoc(name);
      getElements(response);
    })();

    function getElements(response) {
      $('#solution').text(response);
    }

  });
});
