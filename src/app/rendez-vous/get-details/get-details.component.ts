import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/Models/RendezVous';
import { RendezVousService } from '../rendez-vous.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  id!: number;
  rendezVous !: RendezVous;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;



  constructor(private route: ActivatedRoute, private service: RendezVousService, private router: Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.GetAllIvoice();

  }
  GetAllIvoice() {
    this.service.fetchRendezVousById(this.id).subscribe((res: any) => {

      this.rendezVous = res;
      this.rendezVous.idRendezVous = res.id;

      this.isLoading = false;

    },
      (error) => {
        console.log(error)

      });
  }

  Delete(id: number) {
    this.service.deleteRendezVous(id).subscribe(() => { }, (error) => { console.log(error) });
    // this.router.navigateByUrl('/constat/ConstatHome/getParent');
    this.reload('/rendezVous/RendezVousHome/getParent')

  }
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
  Update(id: number) {

    this.router.navigate(['/rendezVous/RendezVousHome/update/', id])
  }


  public SavePDF() {

    var element = document.getElementById('contentToConvert') as HTMLElement;
    html2canvas(element).then(canvas => {
      var imgW = 200;
      var imgH = canvas.height * imgW / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgW, imgH)
      pdf.save(this.rendezVous.id + ".pdf");
    });
  }

}

