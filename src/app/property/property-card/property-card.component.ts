import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card',//component name
  //template:`<h1>I am a card</h1>`,
  templateUrl:'property-card.component.html',// This is a reference to the html page
 // styles: ['h1 {font-weight: normal;}']
 styleUrls:['property-card.component.css']// This is a ref to the style page
})
export class PropertyCardComponent{

  Property:any = {
    Id:1,
    "Name":"Horizon West",
    "Type":"House",
    "Price":12000
  }
}
