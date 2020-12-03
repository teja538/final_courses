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
slides
slidessmall=[{'image':'../assets/img1/slide1small1.png','text':'The Happiness Program'},
{'image':'../assets/img1/slide3small1.png','text':'2nd slide'},
{'image':'../assets/img1/slide2small1.png','text':'3rd slide'}]
  slidesbig=[{'image':'../assets/img1/slide1.PNG','text':'The Happiness Program'},
 {'image':'../assets/img1/slide2.PNG','text':'2nd slide'},
 {'image':'../assets/img1/slide3.PNG','text':'3rd slide'}]
 experience=[{
  'image':'../../assets/img1/mou.jpg','h':'A','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'
 },{'image':'../assets/img1/vol1.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'},
 {'image':'../assets/img1/stone.jpg','h':'B','t':'SKY significantly reduced cholesterol,with no change in diet in just 3 weeks,<br>even under stressful conditions.'}]

 


  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth<320){
      this.pag=100
      this.pag2=80
this.slides=this.slidessmall

    }
    if(window.innerWidth>=320 && window.innerWidth<375){
      this.pag=90
      // this.pag2=70
      this.pag2=80
 this.slides=this.slidessmall

    }
    if(window.innerWidth>=375 && window.innerWidth<425){
     this.pag=75
     this.pag2=70
     this.slides=this.slidessmall
    }
    if(window.innerWidth>=425 && window.innerWidth<768){
     this.pag=55
     this.pag2=70
     this.slides=this.slidessmall

   } 
   if(window.innerWidth>=768){
     this.pag=50
     this.pag2=37
     this.slides=this.slidesbig
   }
  }
   onResize(event) {
     if(window.innerWidth<320){
       this.pag=100
       this.pag2=80
      this.slides=this.slidessmall

     }
     if(window.innerWidth>=320 && window.innerWidth<375){
       this.pag=90
       this.pag2=70
 this.slides=this.slidessmall

     }
     if(window.innerWidth>=375 && window.innerWidth<425){
      this.pag=75
      this.pag2=70
 this.slides=this.slidessmall

    }
     if(window.innerWidth>=425 && window.innerWidth<768){
      this.pag=55
      this.pag2=70
      this.slides=this.slidessmall

    } 
    if(window.innerWidth>=768){
      this.pag=50
      this.pag2=37
      this.slides=this.slidesbig

    }
   }
}
