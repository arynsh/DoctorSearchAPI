# Doctor Search API

#### A program that returns a list of Doctors in Seattle based on users' conditions. 11/22/2019

#### By Sharon Lee

## Description

This is a program will allow the user to input their medical issue (e.g. rash, cough, cold)

## Setup/Installation Requirements

* To install, clone the project using Git and run "npm install" in command line. You will need to sign up to receive your own API key at https://developer.betterdoctor.com/documentation15. Input your key into the API url in the doctors.js file where indicated.

## Known Bugs

There should be no known bugs as of now.

## Support and contact details

Please do not hesitate to contact me for whatever reason! I can be reached at sharonlee714@gmail.com !

## Technologies Used

The program was created using HTML, CSS, JQuery, Bootstrap, npm, Webpack.

### License

Copyright (c) 2019 Sharon Lee

## Specs

1. The program will accept a medical issue from the user and return a list of all doctors in Seattle that treat the issue. The doctors' information will include their name, address, phone number, website (if they have one), and if the doctor accepts new patients (will return true if yes, false if no).
  Input: cough
  Output: "Fake Name, MD"
  123 Fake St. FakeCity, 12345
  (206)555-1231
  www.google.com
  Accepts new patients: True/False
2. The program will accept doctor's name from the user and return a list of all doctors in Seattle that have that name. The doctors' information will include their name, address, phone number, website (if they have one), and if the doctor accepts new patients (will return true if yes, false if no).
  Input: Sharon Fakeame
  Output: "Sharon Fakename, MD"
  123 Fake St. FakeCity, 12345
  (206)555-1231
  www.google.com
  Accepts new patients: True/False
3. If the query response does not include any doctors, the program will alert the user that no doctors have fit their search.
  Input: Sharon Reallyfakename
  Output: Sorry, there are no doctors that fit your search query.
4. If the API call results in an error, the program will state what the error is.
  Input: [API url]
  Output: 404 Page Not Found
