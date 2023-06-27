import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Observable, of} from 'rxjs';
import { LmserviceService } from './service/lmservice.service';
@Component({
  selector: 'app-lm-demo-page',
  templateUrl: './lm-demo-page.component.html',
  styleUrls: ['./lm-demo-page.component.scss']
})
export class LmDemoPageComponent implements OnInit {
  keyword:string = "Search for ...";
  title = 'WA Transportation Benefits Program';
  cards:any = '';
  cardTitle:string  = 'title';
  cardData = [];
  cardData$: Observable<any> = of(null) ;
  constructor( private apiService: LmserviceService) { 
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response:any) => {
        console.log(response);
        this.cardData$= response;
        this.cards = this.cardData$;
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    );

 
  }
  searchEventHandler(keyword:any){
    const searchWord = keyword.toLowerCase();
    // this.cards = this.cardData$.filter( (e:any) => e.name.toLowerCase().includes(searchWord) || e.description.toLowerCase().includes(searchWord));
  }
  redirectTo(link:string){
    window.open(link);
  }

}
