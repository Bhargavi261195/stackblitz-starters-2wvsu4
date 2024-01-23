import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkTableModule } from '@angular/cdk/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
// import * as data from '../assets/data.json';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export interface DashboardTable {
  supportRep: string;
  open: number;
}

const DASHBOARD_DATA: DashboardTable[] = [
  { supportRep: 'Support Rep1', open: 4 },
  { supportRep: 'Support Rep2', open: 4 },
  { supportRep: 'Support Rep3', open: 4 },
  { supportRep: 'Support Rep4', open: 4 },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jsonData: any;
  openCount: number = 0;
  unassignedCount: number = 0;
  priorityCount: number = 0;
  openCRCount: number = 0;
  displayedColumns: string[] = ['supportRep', 'open'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('On int called');
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.jsonData = data;
    });
  }
  //Logic to display stat
  // for(i=0; i<this.jsondata.requests; i++){
  //   if(this.jsonData.requests[i].status == 'Open'){
  //     openCount++;
  // if(this.jsonData.requests[i].supportRep == 'Support Rep 1'){
  //   supportRep1Count++;
  // }
  //   }
  //   if(this.jsonData.requests[i].supportRep == null){
  //     unassignedCount++;
  //   }
  //   if(this.jsonData.requests[i].priority == 'High'){
  //     priorityCount++;
  //   }
  //   if(this.jsonData.requests[i].type == 'Change Request' && this.jsonData.requests[i].status == 'Open'){
  //     openCRCount++;
  //   }
  // }
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<DashboardTable> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<DashboardTable[]>(DASHBOARD_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<DashboardTable[]> {
    return this.data;
  }

  disconnect() {}
}
