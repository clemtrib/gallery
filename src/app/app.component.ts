import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  images = [
    { 
		src: "Tom", 
		name: "Hanks",
		desc: "Hanks",
		lat: "Hanks",
		lon: "Hanks",
		place: []
	}
  ] 
  share() { 
			console.log("fn share") 
		}
  focus() { 
			console.log("fn focus") 
		}
}
