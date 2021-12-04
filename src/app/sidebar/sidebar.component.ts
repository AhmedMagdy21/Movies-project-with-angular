import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#toggleIconRight").click(()=>{
      let colorBoxWidth = $("#colorBox").innerWidth();
      if($("#sidebar").css("left") == '0px'){
        $("#sidebar").animate({left:`-${colorBoxWidth}`});
        $("#toggleIconRight").css('transform','rotate(180deg)');
        $("#toggleIconRight").css('transform','rotate(0deg)').css('transform','rotateY(0deg)');
      }
      else{
        $("#sidebar").animate({left:`0px`},1000);
       
        $("#toggleIconRight").css('transform','rotate(180deg)').css('transform','rotateY(180deg)');
      }
    })
   
    
    let colorBoxs =$(".color-box");
    
    colorBoxs.eq(0).css("backgroundColor","rgba(8, 16, 41, 0.788)");
    colorBoxs.eq(1).css("backgroundColor","rgba(1, 37, 1, 0.788)");
    colorBoxs.eq(2).css("backgroundColor","rgba(43, 1, 1, 0.788)");
    colorBoxs.eq(3).css("backgroundColor","rgba(41, 39, 8, 0.788)");
   
    colorBoxs.click(( e : any)=>{
      let myColor = $(e.target).css("backgroundColor");     
      $(".change").css("background", myColor);
      // $(".Text-Color").css("color", myColor)
    })
   
    
  }
  
}
