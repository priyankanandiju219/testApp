import { Component } from '@angular/core';
import { Data } from './dataDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  sliderData: Data[] = [
    {
      index : 0,
      src: 'https://source.unsplash.com/featured/?camera',
      name: "priyanka",
      age: "27 years",
      height: "5 ft 2 in",
      Religion: "Tamil, Nair",
      Ocupation: "MBBS, Doctor ,Chennai",
      Location: "Tamil Nadu , India",
      active : "Yes"
    },
    {
      index : 1,
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
      name: "Aiwariya",
      age: "27 years",
      height: "5 ft 2 in",
      Religion: "Tamil, Nair",
      Ocupation: "MBBS, Doctor ,Chennai",
      Location: "Tamil Nadu , India",
      active : "Yes"
    },
    {
      index: 2,
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
      name: "Pinku",
      age: "27 years",
      height: "5 ft 2 in",
      Religion: "Tamil, Nair",
      Ocupation: "MBBS, Doctor ,Chennai",
      Location: "Tamil Nadu , India",
      active : "No"
    },
    {
      index: 3,
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
      name: "priyanka",
      age: "27 years",
      height: "5 ft 2 in",
      Religion: "Tamil, Nair",
      Ocupation: "MBBS, Doctor ,Chennai",
      Location: "Tamil Nadu , India",
      active : "No"
    },
  ]
}
