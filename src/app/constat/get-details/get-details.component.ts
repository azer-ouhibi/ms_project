import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Constat } from 'src/Models/Constat';
import { ConstatService } from '../constat.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  id!:number;
  constat !:Constat;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:ConstatService,private router:Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.GetAllIvoice();

  }
  GetAllIvoice()
  {
    this.service.fetchConstatsById(this.id).subscribe((res:any)=>{

    this.constat = res;
    this.constat.idConstat = res.id;

    this.isLoading = false;
    
  },
  (error)=>{
    console.log(error)
  
  });
}
 
  Delete(id:number)
  {
    this.service.deleteConstat(id).subscribe(()=>{},(error)=>{console.log(error)});
    // this.router.navigateByUrl('/constat/ConstatHome/getParent');
    this.reload('/constat/ConstatHome/getParent')
    
  }
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  Update(id:number)
  {
    
    this.router.navigate(['/constat/ConstatHome/update/',id])
  }
 

  public SavePDF()
  {

  var element = document.getElementById('contentToConvert') as HTMLElement;
  html2canvas(element).then(canvas => {
    var imgW = 200;
    var imgH = canvas.height * imgW /canvas.width	;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p','mm','a4');
    var position = 0;
    pdf.addImage(contentDataURL,'PNG',0,position,imgW,imgH)
    pdf.save(this.constat.immatricule+".pdf");  
  });
}
  
}

