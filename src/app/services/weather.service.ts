import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>{

   return this.http.get<WeatherData>("https://openweather43.p.rapidapi.com/weather",{
      headers: new HttpHeaders()
      .set("X-RapidAPI-Key","915d55f096msh7d71cb3abb01e9dp1ea1bdjsn421fc72fbc4d")
      .set("X-RapidAPI-Host","openweather43.p.rapidapi.com"),      
      params:new HttpParams()
      .set('q',cityName)
      .set('appid','da0f9c8d90bde7e619c3ec47766a42f4')
      .set('appid','da0f9c8d90bde7e619c3ec47766a42f4')
      .set('units','metric')
      }) 

  }
}
