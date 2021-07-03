import { Component, OnInit } from '@angular/core';

import {ServedetailsService} from '../servedetails.service';
import {Icourse1} from '../course';

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
  coursedet1:Icourse1[]
  coursedets=[]
  coursedeth=[]
  coursedetv=[]
  public i;
public pag;
public pag2;
public harrow=true;
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

 


  constructor(private servedetailsservice:ServedetailsService) { }

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
     this.harrow=false
     this.slides=this.slidesbig
   }

   this.servedetailsservice.getcoursedeatails()
   .subscribe(det=>{
    //  console.log(det)
    //  function isvtp(element,index,det)
    //  {
    //    return (det[index].coursename=="Sahaj samadhi meditation")
    //  } 
    //  this.coursedet1=det.filter(isvtp)
     det.sort(function(a,b){
       return <any>new Date(a.startdate) - <any>new Date(b.startdate);
     });
     console.log(det)
     
     for(this.i=0;this.i<det.length;this.i+=1)
     {
      
       if(this.coursedets.length==0)
       {
        if(det[this.i].coursename=="Sahaj samadhi meditation")
        {
          this.coursedets[0]=det[this.i] 
        }
       }

       if(this.coursedeth.length==0)
       {
        if(det[this.i].coursename=="Online Happiness Program")
        {
          this.coursedeth[0]=det[this.i] 
        }
       }

       if(this.coursedetv.length==0)
       {
        if(det[this.i].coursename=="Volunteer Training Program")
        {
          this.coursedetv[0]=det[this.i] 
        }
       }
       
     }
     console.log(this.coursedeth)
     console.log(this.coursedetv)
     console.log(this.coursedets)
     
     });      



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
