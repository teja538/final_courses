import { Component, OnInit } from '@angular/core';
import {ServedetailsService} from '../servedetails.service'

@Component({
  selector: 'app-infoform',
  templateUrl: './infoform.component.html',
  styleUrls: ['./infoform.component.css']
})
export class InfoformComponent implements OnInit {

  constructor(private servedetailsservice:ServedetailsService) { }

  ngOnInit(): void {
  }
  onsubmit(course,text,startdate,enddate,time,teacher,link,password,userform)
  {
    this.servedetailsservice.servedetails({course:course,text:text,startdate:startdate,enddate:enddate,time:time,teacher:teacher,password:password,link:link})//req.body 
        .subscribe(
          data=>{console.log(data)},
          err=>console.log(err)
        )
        userform.resetForm();     
  }

}
