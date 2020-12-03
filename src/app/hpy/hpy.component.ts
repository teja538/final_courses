import { Component, OnInit } from '@angular/core';

import {ServedetailsService} from '../servedetails.service';
import {Icourse1} from '../course';

@Component({
  selector: 'app-hpy',
  templateUrl: './hpy.component.html',
  styleUrls: ['./hpy.component.css']
})
export class HpyComponent implements OnInit {

  // coursedet1:Icourse1[]
show=false
  images=[
    {img:'../../assets/img1/hpyimg1.jpg'},
    {img:'../../assets/img1/hpyimg2.jpg'},
    {img:'../../assets/img1/hpyimg3.jpg'},
    //  {img:'../../assets/img1/hpyimg1.jpg'},
    // {img:'../../assets/img1/hpyimg2.jpg'},
    // {img:'../../assets/img1/hpyimg3.jpg'},
    //  {img:'../../assets/img1/hpyimg1.jpg'},
    // {img:'../../assets/img1/hpyimg2.jpg'},
    // {img:'../../assets/img1/hpyimg3.jpg'},
    //  {img:'../../assets/img1/hpyimg1.jpg'},
    // {img:'../../assets/img1/hpyimg2.jpg'},
    // {img:'../../assets/img1/hpyimg3.jpg'},
  ]
  coursedet1=[
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    // {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
]




FAQ=[{"q":"Will this practice improve my health?","a":"Yes, of course! Regular practice of the Sudarshan Kriya™ is known to improve sleep, boost immunity, and lower stress and depression levels. You only need to read these testimonials of people who have benefitted from the workshop. Be sure to let your teacher know your ailments beforehand so they can give you the best and most customized experience!"},
{"q":"Can a four-day online workshop really change my life?","a":"Life can change in a moment. A moment with a loved one or a lost moment of awareness while driving a car can both be life-changing. A “Eureka” moment can be life-changing not only for you but also for the whole world. However, more than changing your life, this workshop equips you with tools to change your life yourself. In these four days, you’ll be learning the Sudarshan Kriya™, a widely researched technique adopted by millions globally. Those who have practiced it have reported life-transforming experiences.You will also have free lifetime access to follow-up sessions, and a global community of mentors. You can also enroll for advanced programs of the Art of Living. Your journey has just begun."},
{"q":"Are there any side-effects to this technique?","a":"An undying smile is the only side-effect! :) The Sudarshan Kriya™ is practiced globally by millions of people every day with documented health benefits.It is absolutely safe to practice our techniques. If you have a medical history of asthma, high blood pressure, heart problems, and back pains, we will guide you differently during the session."},
{"q":"I have no stress. Why should I still join this workshop?","a":"If you’re not stressed, great! You’re living the best life. But consider this: Do you start saving money only when you’re running out of it? Or start exercising only when you’ve lost your health? No, right? So how about building those inner reserves of resilience and strength for times when you could need them? But hey, it's your call. You could wait till you are stressed and this workshop will still be around to help you."},
{"q":"Why do you charge Rs 2000?","a":"Those who have taken this workshop have recommended we charge more. This is because apart from teaching you essential life skills, your donation funds many service projects in India. For instance, sending 70,000 tribal children to school, reviving 43 rivers, empowering 2,04,802 rural youth with livelihood skills, and lighting 720 villages with solar lamps. If you think it’s not justified, we won’t object if you wish to pay more. ;)"},]
FAQ1=[
{"q":"I cannot sit in one place for a long time. I don’t have the patience to meditate.","a":"You’re exactly the person we’re looking for! Did you know swimming before getting into water or did you know driving before attempting to drive a car? There’s always the first time. The practice of Sudarshan Kriya™ and meditations are simple and natural processes that help energize you. This is not one more thing to be stressed and pressured about."},
{"q":"Isn’t spirituality for people above 60 years?","a":"Spirituality is nothing but a process that enhances the beauty of our Self, our being, our spirit. It is the science of life. The earlier you learn this science, the sooner you can create a better life for yourself. Why wait till 60?"},
{"q":"Does the workshop subscribe to any religious beliefs?","a":"The Art of Living’s workshop and teachings are embraced by people of different faiths and communities around the world. You can be assured of the diversity of participants and the unity of purpose, which is bringing a smile on everyone’s face.We’d like to share a thought with you. Gurudev Sri Sri Ravi Shankar, the founder, says: “The Art of Living is more of a principle, a philosophy of living life to its fullest. It is more of a movement than an organization. Its core value is to find peace within oneself and to unite people in our society - of different cultures, traditions, religions, nationalities; and thus reminding us all that we have one goal - to uplift human life everywhere.”"},
{"q":"I eat non-vegetarian food. Can I still do this workshop?","a":"Absolutely! The breath doesn’t care about your food preferences. All it cares about is your well-being."},
{"q":"Are you guys a cult?","a":"Is wanting to see a smile on every individual in the world, and working towards better health, prosperity, and progress for every community being a cult? Not at all!When you go to a gym, you don’t become part of a cult. You simply learn to take care of your body and mind. Similarly, the teachings of the Art of Living only comprise universal human values, techniques, and wisdom that can help you lead a stress-free, healthy, and fulfilling life. But don’t take our word for it. Experience it firsthand."},
{"q":"I have been diagnosed with schizophrenia. Can I still do the program?","a":"We recommend a daily meditation practice for you. You could learn the Sahaj Samadhi Meditation technique which is a special, mantra-based practice."},]

constructor(private servedetailsservice:ServedetailsService) { }

  ngOnInit(): void {

    this.servedetailsservice.getcoursedeatails()
        .subscribe(det=>{

          function isohp(element,index,det)
          {
            return (det[index].coursename=="Online Happiness Program")
          } 
          this.coursedet1=det.filter(isohp)
          console.log(this.coursedet1)
          });      
    } 

    currentlyOpenedItemIndex = -1;

setOpened(itemIndex) {
  this.currentlyOpenedItemIndex = itemIndex;
}

setClosed(itemIndex) {
  if(this.currentlyOpenedItemIndex === itemIndex) {
    this.currentlyOpenedItemIndex = -1;
  }
}
  }


