import { Component } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})

export class LightboxComponent {
	
  images = [
    { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
		place: []
	}, { 
		src: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg",
		name: "Hanks",
		desc: "Hanks",
		lat: "1",
		lon: "1",
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
