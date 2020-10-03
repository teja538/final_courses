import { Component, OnInit } from '@angular/core';

import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    "(window:resize)":"onResize($event)"
  }
})
export class HomeComponent implements OnInit {
public pag;
public pag2;
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth>=320){
      this.pag=90
      this.pag2=40
      
    }
    if(window.innerWidth>=375){
     this.pag=75
    //  this.pag2=75

   }
    if(window.innerWidth>=425){
     this.pag=55
    //  this.pag2=55

   } 
   if(window.innerWidth>=768){
     this.pag=50
     this.pag2=37

   }
  }
  slides=[{'image':'../assets/img/slide1.PNG','text':'The Happiness Program'},
  {'image':'../assets/img/slide3.PNG','text':'2nd slide'},
  {'image':'../assets/img/slide2.PNG','text':'3rd slide'}]
    slidesOld=[{'image':'../assets/img1/hpy1.jpg','text':'The Happiness Program'},
   {'image':'../assets/img1/sahaj3.jpg','text':'2nd slide'},
   {'image':'../assets/img1/vtp1.jpg','text':'3rd slide'}]
   experience=[{
    'image':'../assets/img1/boat.jpg','h':'A','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'
   },{'image':'../assets/img1/boat.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'},{'image':'../assets/img1/boat.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'}]
  

   onResize(event) {
     if(window.innerWidth>=320){
       this.pag=90
       this.pag2=40

     }
     if(window.innerWidth>=375){
      this.pag=75
      // this.pag2=75

    }
     if(window.innerWidth>=425){
      this.pag=55
      // this.pag2=55

    } 
    if(window.innerWidth>=768){
      this.pag=50
      this.pag2=37
    }
   }
}
