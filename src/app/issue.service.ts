import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000'; //Node server
  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id: string) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title: string, responsible: string, description: string, severity: string) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id: string, status: string, title: string, responsible: string, description: string, severity: string) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id: string) {
    return this.http.delete(`$this.uri/issues/delete/${id}`);
  }

}
