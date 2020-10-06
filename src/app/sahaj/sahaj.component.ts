import { Component, OnInit } from '@angular/core';
import {ServedetailsService} from '../servedetails.service';


import {Icourse1} from '../course';
@Component({
  selector: 'app-sahaj',
  templateUrl: './sahaj.component.html',
  styleUrls: ['./sahaj.component.css']
})
export class SahajComponent implements OnInit {

  coursedet1:Icourse1[]= [
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
        {"coursename":"sdnbfjsd","text":"jgds","startdate":"25/9/2020","enddate":"28/09/2020","time":"6-8pm","teacher":"bshfdd","link":"kjnvnsd","userpassword":"zdfbsdj"},
    ]
    
    

  constructor(private servedetailsservice:ServedetailsService) { }

  images=[
    {img:'../../assets/img1/sahajimg1.jpg'},
    {img:'../../assets/img1/sahaj2.1.jpg'},
    {img:'../../assets/img1/sahaj3.jpg'},
  ]

  ngOnInit(): void {

    // this.servedetailsservice.getcoursedeatails()
    //     .subscribe(det=>{
    //       console.log(det)
    //       function isvtp(element,index,det)
    //       {
    //         return (det[index].coursename=="Sahaj samadhi meditation")
    //       } 
    //       this.coursedet1=det.filter(isvtp)
    //       console.log(this.coursedet1)
    //       });      
  }

  FAQ=[{"q":"Do I need to be a practitioner of meditation to learn Sahaj Samadhi?",
"a":"Not at all. Even if you have never meditated before, you can learn this technique and get the benefits."},
{"q":"How is Sahaj Samadhi Dhyana Yoga different from guided meditations?",
"a":"Guided meditations help you meditate with spoken instructions and music. They help you relax and unwind by providing a soothing and peaceful ambience. On the other hand, Sahaj Samadhi Dhyana Yoga is a mantra-based meditation technique. The mantra is a charged, subtle sound that takes you to deeper states of consciousness. Guided meditations require, well, guidance, but once you learn Sahaj Samadhi, you can meditate on your own with this technique. It just needs 20 minutes of your time, and a quiet corner where you can sit comfortably. With regular practice, you will feel more at peace and note the improvements in your physical health and mental acumen as well as your increased awareness and sharpened intuitive skills."},
{"q":"I am not able to meditate effectively. I go to sleep whenever I meditate.",
"a":"It’s perfectly alright to sleep as you begin to meditate. It just indicates your system needs more rest. Just don’t stop meditating! As you continue, you will find that 20 minutes of Sahaj Samadhi Dhyana Yoga is as refreshing as several hours of sleep!"},
{"q":"Are there any special considerations for Sahaj Samadhi Dhyana Yoga?",
"a":"It is preferable to meditate on a relatively empty stomach. Before meals or 90 minutes after eating is a good time to do Sahaj Samadhi Dhyana Yoga. Aside from that, all you need is a comfortable place to sit for 20 minutes."},
{"q":"Can I do this meditation while traveling?",
"a":"Since Sahaj Samadhi Dhyana Yoga requires no external help, it is an excellent practice to do on planes, trains, and car rides. Just make sure you’re not the one driving!"}]
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
