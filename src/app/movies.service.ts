import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  getTrending(mediaType:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=3a9cb9d57fba6ea0325f141e98cde6de`)
  }

  getMovieDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }
  getTvDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }
  getpersonDetalis(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=3a9cb9d57fba6ea0325f141e98cde6de&language=en-US`)
  }
  
}
