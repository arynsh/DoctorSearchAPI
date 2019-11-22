import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {  } from './../src/doctors.js';

$(document).ready(function() {
  $('#').submit(function(event) {
    event.preventDefault();

    let name = $('#name').val();


    (async () => {
      let docSearch = new DoctorSearch();
      const response = await docSearch.getDoc(name);
      getElements(response);
    })();
    //
    // function getElements(response) {
    //   $('.').text();
    // }

  });
});
