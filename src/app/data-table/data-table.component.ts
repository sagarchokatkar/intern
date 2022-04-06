import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataTableService } from '../data-table.service';
import { Launchpads } from './launchpads';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.sass']
})
export class DataTableComponent implements OnInit {
  title = 'SpaceX-launchpad';
  // launchpadData: Launchpads;

  // displayedColumns: string[] = ['name','link', 'region','launchpad'];
  // clickedRows = new Set<LaunchpadElements>();
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // launchpads: LaunchpadElements[] = [];
  // dataSource = new MatTableDataSource<LaunchpadElements>();
  constructor(private service: DataTableService) { }

  ngOnInit(): void {
    this.dataLoad();
  }

  dataLoad() {
    this.service.getLaunchpads();
  }
  // loadLaunchpads() {
  //   this.service.getLaunchpads().subscribe((data) => {
  //     _.forEach(data, (value, key) => {
  //       console.log(value);
  //       this.launchpads.push({
  //         'name': value.name,
  //         'region': value.region,
  //         'link': value.wikipedia,
  //         'launchpad': value.launches
  //       })
  //     })
  //     this.dataSource = new MatTableDataSource<LaunchpadElements>(this.launchpads);
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }

// export interface LaunchpadElements {
//   name: string;
//   region: string;
//   link: string;
//   launchpad: string[];
// }
}