import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service'; // Imports class from Services

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movies: any = [];

  // Initialise Data: Instance of MovieService
  constructor(private movieService: MovieService) { }

  // On initialisation..
  ngOnInit() {
    //asynchronous call
    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search; // Pass in data to array
        console.log(this.movies); // Output
      }
    ); // 
  }
}
