import { Component,Input, OnInit } from "@angular/core";
import { ICurrentShow } from "../icurrent-show";
import { ShowsService } from '../shows/shows.service';

@Component({
  selector: "app-show-details", 
  templateUrl: "./show-details.component.html",
  styleUrls: ["./show-details.component.css"]
})
export class ShowDetailsComponent implements OnInit {

  @Input() currentShow: ICurrentShow;
  constructor() {}

  ngOnInit() {
    
  }
}
