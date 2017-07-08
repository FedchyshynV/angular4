import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-ukr',
  templateUrl: './main-ukr.component.html',
  styleUrls: ['./main-ukr.component.less']
})
export class MainUkrComponent implements OnInit {

     images: any[];
 
   constructor(){
      this.images = [
	{"url":"/assets/images/ukraine/all-tour/zakarpatia-all.jpg"},
	{"url":"/assets/images/ukraine/all-tour/lviv-all.jpg"},
	{"url":"/assets/images/ukraine/all-tour/karpaty-all.jpg"},
	{"url":"/assets/images/ukraine/splav1.jpg"},
	{"url":"/assets/images/ukraine/dnister.jpg"},
	{"url":"/assets/images/ukraine/Aleksandria-buki-11.06.jpg"}
      ];
   }


  
  ngOnInit() {
  }

}
