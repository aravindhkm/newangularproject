import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';
import { UserService } from './user.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  UserCount;
  userList:[];
  pageList: any;
  currentPageRecord: any;
  pageSess: any;
  page: any;
  collectionSize: any;
  CurrentPage;

  constructor(public router: Router,private http: ApiserviceService, private userService: UserService) { 

    this.pageList = 1;
  }

  ngOnInit() {
     this.getMethod();
  }
   
  getMethod() {
     this.userGetList();
     this.CurrentPage = this.pageSess;
     this.pageList = this.CurrentPage ? this.CurrentPage : 1;
  }

  pageChange(type) {
    this.userGetList();  
    this.pageSess = this.currentPageRecord;
}

  userGetList() {
    try {
      this.userService.getUser("", 'get', this.pageList).subscribe(response => {
        if (response && response.result.rows.length > 0) {
          this.UserCount = response.result.rows;
          this.userList = response.result.rows;
        }
        else {
          this.UserCount = response.result.totalItems;
          this.userList = [];
        }
      })
    } catch (error) {

    }
  }


}
