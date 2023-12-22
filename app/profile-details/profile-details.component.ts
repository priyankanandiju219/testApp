import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from '../profile-details';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  currentSlide = 0;

  sliderData: ProfileDetails[] = [
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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
