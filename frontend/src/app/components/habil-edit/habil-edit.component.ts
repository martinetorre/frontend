import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habil-edit',
  templateUrl: './habil-edit.component.html',
  styleUrls: ['./habil-edit.component.css']
})
export class HabilEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  hys(){
    this.router.navigate(['/hys'])
  }
}


