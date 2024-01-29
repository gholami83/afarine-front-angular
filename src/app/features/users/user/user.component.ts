import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userinterface!: {
    name: string,
    city: string,
  };
  constructor(
    private router:ActivatedRoute,
    private route : Router
    ){

  }
ngOnInit(): void {
  this.userinterface = {
    name : this.router.snapshot.params['name'],
    city : this.router.snapshot.params['city']
  }
  this.router.params.subscribe(
    (params:Params) =>{
      this.userinterface.name = params['name'];
      this.userinterface.city = params['city'];
    }
  )
}
navigate(){
this.route.navigate(['/users',this.userinterface.name,this.userinterface.city],{relativeTo:this.router})
}
}
