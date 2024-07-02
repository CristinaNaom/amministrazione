import { Component, OnInit } from '@angular/core';
import { Personale } from '../../models/personale';
import { PersonaleService } from '../../services/personale.service';

@Component({
  selector: 'app-personale-lista',
  templateUrl: './personale-lista.component.html',
  styleUrl: './personale-lista.component.css'
})
export class PersonaleListaComponent implements OnInit {
  personale: Personale[] = [];

  constructor(private ps: PersonaleService) { }
  ngOnInit(): void {

    this.ps.getPersonale().subscribe(p => {
      this.personale = p;
    })
  }
}
