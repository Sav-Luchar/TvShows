import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentShow } from '../icurrent-show';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


interface ICurrentShowData{
  show:{
    name: string; //Show Name
    genres:string[]; //This is an array
    runtime: number; //Runtime in minutes
    
    schedule: { 
      time: string,
      days: string[] 
    }; //eg., time:00:35 and days":[ "Monday","Tuesday", "Wednesday","Thursday"]
    
    network: { 
      name : string,
      country: {
        name: string,
        timezone: string
      };
     }; //Network Name

      summary: string;
      image: {
        medium:string
      };
  };
  }


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient:HttpClient) { }

  getShowData(name:string){
    return this.httpClient.get<ICurrentShowData>(
      `${environment.baseURL}api.tvmaze.com/search/shows?q=${name}`
    ).pipe(
      map(data => this.transformToICurrentShow(data))
    );
  }

  private transformToICurrentShow(data: ICurrentShowData): ICurrentShow {
    return {
    showName: data[0].show.name,
    showTime:data[0].show.schedule.time,
    showDate:data[0].show.schedule.days[0],
    showNetwork:data[0].show.network.name,
    showDuration:data[0].show.runtime,
    showSummary:data[0].show.summary,
    showImage:data[0].show.image.medium,
    showCountry:data[0].show.network.country.name,
    showGenres:data[0].show.genres[0]
    }
}
}