import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './../src/doctors.js';
import { MedicalSearch } from './../src/doctors.js';

$(document).ready(function() {
  $('#formID').submit(function(event) {
    event.preventDefault();

    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let output = "";
    let output2 = "";


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
                                  ", Website: "+response.data[i].practices[0].website +
                                  ", Accepts New Patients (Yes=True, No=False): "+response.data[i].practices[0].accepts_new_patients)+ "<br>";
      }

      if(response.data.length < 1) {
        output = "Sorry, no doctors within those search parameters have been found.";
      }
      getElements(response);

      let symptomSearch = new MedicalSearch();
      const symptomresponse = await symptomSearch.searchUsingSymptom(symptom);

      for(let i = 0; i < symptomresponse.data.length; i++) {
        output2 += JSON.stringify("First Name: "+symptomresponse.data[i].profile.first_name +
                                  ", Last Name: "+symptomresponse.data[i].profile.last_name +
                                  ", Address: "+symptomresponse.data[i].practices[0].visit_address.street + " "
                                  +symptomresponse.data[i].practices[0].visit_address.city + " "
                                  +symptomresponse.data[i].practices[0].visit_address.zip +
                                  ", Phone: "+symptomresponse.data[i].practices[0].phones[0].number +
                                  ", Website: "+symptomresponse.data[i].practices[0].website +
                                  ", Accepts New Patients (Yes=True, No=False): "+symptomresponse.data[i].practices[0].accepts_new_patients)+ "<br>";
      }

      if(symptomresponse.data.length < 1) {
        output2 = "Sorry, no doctors within those search parameters have been found.";
      }

      getSymptomElements(symptomresponse);
    })();



    function getElements(response) {
      $('#docresults').html(output);
    }

    function getSymptomElements(symptomresponse) {
        $('#symptomresults').html(output2);
    }

  });
});
