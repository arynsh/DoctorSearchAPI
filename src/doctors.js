
export class DoctorSearch {
  async findDoc(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6062%2C-122.3321%2C3&skip=0&user_key=${process.env.API_KEY}`);
        if (response.status === 400 || response.status === 404 || response.status === 401) {
          throw Error ("Please try again");
        }
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("Unable to process request: " + error.message);
    }
  }
}
