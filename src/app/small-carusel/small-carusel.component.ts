import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-carusel',
  templateUrl: './small-carusel.component.html',
  styleUrls: ['./small-carusel.component.less']
})
export class SmallCaruselComponent implements OnInit {

         imagesLeft: any[];
         imagesRight: any[];
 
   constructor(){
      this.imagesLeft = [
                  	{"url":"/assets/images/carusel_left/budapesht.jpg ", index: 1},
                  	{"url":"/assets/images/carusel_left/israil_19.09.jpg ", index: 2},
                  	{"url":"/assets/images/carusel_left/st_peter.jpg ", index: 3},
                  	{"url":"/assets/images/carusel_left/holand.jpg ", index: 4},
                  	{"url":"/assets/images/carusel_left/paris.jpg ", index: 5},
                  	{"url":"/assets/images/carusel_left/prague.jpg ", index: 6},
                  	{"url":"/assets/images/carusel_left/roma.jpg ", index: 7}
     
      ];
   
      this.imagesRight = [
                  	{"url":"/assets/images/carusel_right/fiordy.jpg ", index: 1},
                  	{"url":"/assets/images/carusel_right/chernogoria.jpg ", index: 2},
                  	{"url":"/assets/images/carusel_right/horvatia-sea.jpg ", index: 3},
                  	{"url":"/assets/images/carusel_right/horvatia24.jpg ", index: 4},
                  	{"url":"/assets/images/carusel_right/vinice.jpg ", index: 5},
                  	{"url":"/assets/images/carusel_right/gricee.jpg ", index: 6},
                  	{"url":"/assets/images/carusel_right/israil.jpg ", index: 7},
                  	{"url":"/assets/images/carusel_right/spa.jpg ", index: 8}

      ];
   }


  ngOnInit() {
  }

}
