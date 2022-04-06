import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
// import { Launchpads } from './launchpads';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http:HttpClient) { }

  private URL = "https://api.spacexdata.com/v4/landpads";

  getLaunchpads() :Observable<any[]>{
    return this.http.get(this.URL)
    // .subscribe(response => console.log(_.values(response)));
    .pipe(
      map(res => _.values(res))
    );
  }
}
