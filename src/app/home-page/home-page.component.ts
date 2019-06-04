import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    console.log('hello');
    this.issueService.getIssues().subscribe((issues) => {
      console.log('issue');
      console.log(issues);
    });
  }

}
