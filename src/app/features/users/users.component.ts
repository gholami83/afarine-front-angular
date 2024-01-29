import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users = [
  {
  "name":"Harry Potter",
  "city":"London"
},
  {"name":"Don Quixote",
  "city":"Madrid"
},
{
  "name":"Joan of Arc",
  "city":"Paris"
},
{
  "name":"Rosa Park",
  "city":"Alabama"
},
  {
  "name":"Harry Potter",
  "city":"London"
},
  {"name":"Don Quixote",
  "city":"Madrid"
},
{
  "name":"Joan of Arc",
  "city":"Paris"
},
{
  "name":"Rosa Park",
  "city":"Alabama"
},
  {
  "name":"Harry Potter",
  "city":"London"
},
  {"name":"Don Quixote",
  "city":"Madrid"
},
{
  "name":"Joan of Arc",
  "city":"Paris"
},
{
  "name":"Rosa Park",
  "city":"Alabama"
},
  {
  "name":"Harry Potter",
  "city":"London"
},
  {"name":"Don Quixote",
  "city":"Madrid"
},
{
  "name":"Joan of Arc",
  "city":"Paris"
},
{
  "name":"Rosa Park",
  "city":"Alabama"
},
  {
  "name":"Harry Potter",
  "city":"London"
},
  {"name":"Don Quixote",
  "city":"Madrid"
},
{
  "name":"Joan of Arc",
  "city":"Paris"
},
{
  "name":"Rosa Park",
  "city":"Alabama"
},
]
ngOnInit(): void {
    
}
}
