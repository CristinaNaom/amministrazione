import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/personale';
import { PersonaleService } from '../../services/personale.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts:Post[]=[];
  constructor(private ps:PersonaleService, private route:ActivatedRoute){}
  ngOnInit(): void {
const id=this.route.snapshot.paramMap.get("id");
this.ps.getPosts(id!).subscribe(p=>{
  this.posts=p;
})
  }

}
