
export class DoctorSearch {
  async findDoc(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6062%2C-122.3321%2C3&skip=0&user_key=${process.env.API_KEY}`);
        if (response.status === 400) {
          throw Error ("Error 400- Bad request or missing parameters.");
        }
        if (response.status === 401) {
          throw Error ("Error 401- Unauthorized.");
        }
        if (response.status === 404) {
          throw Error ("Error 404- Something went wrong.");
        }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Unable to process request: " + error.message);
    }
  }
}

export class MedicalSearch {
  async searchUsingSymptom(symptom) {
    try {
      let symptomresponse = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=wa-seattle&skip=0&limit=10&user_key=e8292159f22748656f5b0e504d1bf521`);
        if (symptomresponse.status === 400) {
          throw Error ("Error 400- Bad request or missing parameters.");
        }
        if (symptomresponse.status === 401) {
          throw Error ("Error 401- Unauthorized.");
        }
        if (symptomresponse.status === 404) {
          throw Error ("Error 404- Something went wrong.");
        }
      let jsonifiedResponse = await symptomresponse.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Unable to process request: " + error.message);
    }
  }
}
