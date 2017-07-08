import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-carusel',
  templateUrl: './main-carusel.component.html',
  styleUrls: ['./main-carusel.component.less']
})
export class MainCaruselComponent implements OnInit {

       images: any[];
 
   constructor(){
      this.images = [
                  	{"url":"/assets/images/main_carusel/splav.jpg ", index: 1},
                  	{"url":"/assets/images/main_carusel/egypt-vinnitsa.jpg ", index: 2},
                  	{"url":"/assets/images/main_carusel/dalaman.jpg ", index: 3},
                  	{"url":"/assets/images/main_carusel/dnister.jpg ", index: 4},
                  	{"url":"/assets/images/main_carusel/evrope.jpg ", index: 5},
                  	{"url":"/assets/images/main_carusel/israil.jpg ", index: 6},
                  	{"url":"/assets/images/main_carusel/one_day.jpg ", index: 7},
                  	{"url":"/assets/images/main_carusel/st_piter.jpg ", index: 8},
                  	{"url":"/assets/images/main_carusel/turkey.jpg ", index: 9},
                  	{"url":"/assets/images/main_carusel/ukraine.jpg ", index: 10},
                  	{"url":"/assets/images/main_carusel/visa.jpg", index: 11},
      ];
   }



  ngOnInit() {
  }

}
