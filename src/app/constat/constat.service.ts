import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Constat } from '../../Models/constat';

@Injectable({
  providedIn: 'root'
})
export class ConstatService {



constructor(private http:HttpClient,private router:Router) 
{ }
baseurl=environment.url;

fetchConstats():Observable<Constat[]>
{
  return this.http.get<Constat[]>(this.baseurl+"Constat");
}
fetchConstatsById(id:any):Observable<Constat>
{
  return this.http.get<Constat>(this.baseurl+"Constat/"+id);
}

addConstat(data:Constat)
{
  return this.http.post(this.baseurl+"Constat",data);
}


deleteConstat(id:any){
  console.log(id);
  return this.http.delete(this.baseurl+"Constat/"+id);

}
UpdatConstat(data:Constat):Observable<Constat>
{
  return this.http.put<Constat>(this.baseurl+"Constat/"+data.id,data);

}

 
 
}