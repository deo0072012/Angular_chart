import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Angulargraph';
chart=[];

ngOnInit(){
this.chart=new Chart('canvas',{
  type:'line',
  data:{
    labels:['a','b','c','d','e','f'],
  datasets:[
    {
    label:'My First Dataset',
    data:[1,4,56,34,56,345,567],
    backgroundColor:'blue',
    fill:false,
    },
    {
      label:'My Second Dataset',
      data:[46,342,56,34,12,45,45],
      backgroundColor:'red',
      fill:false,
      }

  ]
  }





}

)





}
}
