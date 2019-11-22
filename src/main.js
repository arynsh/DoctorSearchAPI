import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {  } from './../src/doctors.js';

$(document).ready(function() {
  $('#').submit(function(event) {
    event.preventDefault();

    const medIssue = $('#medIssue').val();

    (async () => {
      let findDoc = new findDoc();
      const response = await findDoc.getDoc(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.').text();
    }

  });
});
