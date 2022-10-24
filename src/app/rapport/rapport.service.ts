import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rapport } from 'src/Models/Rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.urlfadi;
  
  fetchRapports():Observable<Rapport[]>
  {
    return this.http.get<Rapport[]>(this.baseurl);
  }
  fetchRapportById(id:any):Observable<Rapport>
  {
    return this.http.get<Rapport>(this.baseurl+"/"+id);
  }
  
  addRapport(data:Rapport)
  {
    return this.http.post(this.baseurl,data);
  }
  
  
  deleteRapport(id:any){
  
    return this.http.delete(this.baseurl+"/"+id);
  
  }
  // UpdatRapport(data:Rapport):Observable<Rapport>
  // {
  //   return this.http.put<Rapport>(this.baseurl+"Rapport/"+data.id,data);
  
  // }
  
   
   
  }