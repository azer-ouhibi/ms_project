import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RendezVous } from 'src/Models/RendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url+"RendezVous/";
  
  fetchRendezVous():Observable<RendezVous[]>
  {
    return this.http.get<RendezVous[]>(this.baseurl+"liste-RendezVous");
  }
  fetchRendezVousById(id:any):Observable<RendezVous>
  {
    return this.http.get<RendezVous>(this.baseurl+"One-RendezVous/"+id);
  }
  
  addRendezVous(data:RendezVous)
  {
    return this.http.post<RendezVous>(this.baseurl+"add-RendezVous/",data);

  }
  
  
  deleteRendezVous(id:any){
  
    return this.http.delete(this.baseurl+"remove-RendezVous/"+id);
  
  }
  UpdatRendezVous(data:RendezVous):Observable<RendezVous>
  {
    return this.http.put<RendezVous>(this.baseurl+"modify-RendezVous/",data);
  
  }
  
   
   
  }