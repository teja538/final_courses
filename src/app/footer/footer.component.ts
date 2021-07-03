import { Component, OnInit } from '@angular/core';
import {ServedetailsService} from '../servedetails.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private servedetailsservice:ServedetailsService) { }

  ngOnInit(): void {
  }

  onsubmit(name,email,msg,qform)
  {

    this.servedetailsservice.qformdetails({name:name,email:email,msg:msg})
         .subscribe(
           data=>{console.log(data)},
           err=>console.log(err)
         )
         qform.resetForm()
       
  }

}
