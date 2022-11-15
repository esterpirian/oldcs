import { Component,OnInit} from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { postService } from '../services/postService';
import {clientAdd,clientList} from'../interface/ClientMange'
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { MyFilterPipe } from "../../pipe/prop.filter";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
    selector: 'turn',
    templateUrl: './turn.html',
    styleUrls: [],
    providers: []
})

export class TurnComponent implements OnInit{
   
  turnForm: FormGroup;
  data: clientAdd = {"ClientName": ""};
  displayedColumns:string[]
  clientList$!: clientList[];
  constructor(fb: FormBuilder, private _PostService: postService, private httpClient: HttpClient, private router: Router) {
      this.turnForm = fb.group({});
    this.turnForm.addControl("ClientName", new FormControl("", [Validators.required]));
    this.displayedColumns = ['SourceName', 'FileName', 'StartDate', 'EndDate', 'Count', 'Sum'];
  }
  ngOnInit(): void {
   
   
      this._PostService.doPost<clientList[]>("MyApp.Service.TurnManage.jsonp/GetClient", {}).subscribe(
        (response: any) => {
          this.clientList$  = response;
        }
      );

   // this.clientList$ = a;
  }
  getErrorMessage(name:string) {
    return this.turnForm.controls[name].hasError('required') ? 'שדה חובה, יש להזין ערך תקין.' : (this.turnForm.controls[name].errors) ? 'ערך שגוי, יש להזין ערך תקין.' : '';
  }
  public enter() {
   
    if (this.turnForm.valid) {
      this._PostService.doPost<clientList[]>("MyApp.Service.TurnManage.jsonp/AddClient", this.data).subscribe(
        (response: any) => {
          this.clientList$ = response;
        }
      );

    }
    else {
      Object.keys(this.turnForm.controls).forEach(x => { if (this.turnForm.controls[x].errors != null) { this.turnForm.controls[x].markAsTouched()} })
    }
    }
   
  public move() {

   
      this._PostService.doPost<clientList[]>("MyApp.Service.TurnManage.jsonp/MoveClient", this.data).subscribe(
        (response: any) => {
          this.clientList$ = response;
        }
      );

   
  }

    }


