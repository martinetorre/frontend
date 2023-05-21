import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  experiencia() {
    this.router.navigate(['/experiencia'])
  }
}
