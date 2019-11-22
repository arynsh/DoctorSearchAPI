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
        output += JSON.stringify("First Name: "+response.data[i].profile.first_name +
                                  ", Last Name: "+response.data[i].profile.last_name +
                                  ", Address: "+response.data[i].practices[0].visit_address.street + " "
                                  +response.data[i].practices[0].visit_address.city + " "
                                  +response.data[i].practices[0].visit_address.zip +
                                  ", Phone: "+response.data[i].practices[0].phones[0].number +
                                  ", Accepts New Patients (Yes=True, No=False): "+response.data[i].practices[0].accepts_new_patients)+ "<br>";
      }
      getElements(response);
    })();

    function getElements(response) {
      $('#solution').html(output);
    }

  });
});
