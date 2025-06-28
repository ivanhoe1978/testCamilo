import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string ='Camilo';
  constructor() {

  }
  title = 'testCamilo';
  persona:any  = 
  {
    name: "Camilo",
    age: 30,
    email: "vero@test.com",
    address: {
      street: "Calle 123",
      city: "Bogotá",
      country: "Colombia"
    },
    hobbies: ["reading", "traveling", "coding"],
    family:[
      {
        name: "Vero",
        relation: "wife",
        age: 28,
        isHappy: true
      },
      {
        name: "Sofi",
        relation: "daughter",
        age: 5
      }
    ]
  }

  getName(){
    let datito="hola";
    console.log("HOBBIES",this.persona.hobbies[0]);
    this.persona.hobbies[0] = "new hobby";
    console.log("HOBBIES",this.persona.hobbies[0]);
    console.log("Family",this.persona.family[0]);
    return this.name;
  }
}
