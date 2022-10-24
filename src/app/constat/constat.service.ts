import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Constat } from '../../Models/Constat';


@Injectable({
  providedIn: 'root'
})
export class ConstatService {



constructor(private http:HttpClient,private router:Router) 
{ }

baseurl=environment.url+"constat/";

fetchConstats():Observable<Constat[]>
{
  return this.http.get<Constat[]>(this.baseurl+"liste-constat");
}
fetchConstatsById(id:any):Observable<Constat>
{
  return this.http.get<Constat>(this.baseurl+"One-constat/"+id);
}

addConstat(data:Constat)
{
  return this.http.post(this.baseurl+"add-constat",data);
}


deleteConstat(id:any){
  return this.http.delete(this.baseurl+"remove-constat/"+id);

}
UpdatConstat(data:Constat):Observable<Constat>
{
  console.log(data)

  return this.http.put<Constat>(this.baseurl+"modify-constat/",data);

}

 
 
}