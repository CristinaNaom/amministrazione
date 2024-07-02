import { Component, OnInit } from '@angular/core';
import { Personale } from '../../models/personale';
import { PersonaleService } from '../../services/personale.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personale-detail',
  templateUrl: './personale-detail.component.html',
  styleUrl: './personale-detail.component.css'
})

export class PersonaleDetailComponent implements OnInit {
  personale?:Personale

  constructor (private ps:PersonaleService, private route:ActivatedRoute){}
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get("id");
    this.ps.getPersonaleById(+id!).subscribe(p=>{
this.personale=p;
    })
  }

}
