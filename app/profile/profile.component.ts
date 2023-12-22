import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../dataDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() data !: Data[];
  alert: boolean = false;
  close : boolean = false;
  imgSrc: any;

  currentSlide = 0;
  constructor( private route : Router) { }

  ngOnInit(): void {
  }
  onSlideClick(index: number) {
    if (this.currentSlide !== index) {
      this.currentSlide = index;
    }
  }
  navigate(){
      this.route.navigate(['/profile']);
    }  

  onPreviousClick() {
    const previous = this.currentSlide - 1
    this.currentSlide = previous < 0 ? this.data.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1
    this.currentSlide = next === this.data.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
  addEvent() {
    console.log(this.data);
    // x.select = !x.select;
  }
  success() {
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }

  onClick(event: any) {
    this.close = true;
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }
  closeImage(){
    this.close = false;
  }

}
