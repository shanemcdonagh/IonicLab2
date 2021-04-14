// Imports
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})

// Class
export class MovieService {

  constructor(private httpClient: HttpClient) { } // Creates an instance of HttpClient 

  // Get API Data
  GetMovieData(): Observable<any>
  {
    return this.httpClient.get("http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27");
  }
}
