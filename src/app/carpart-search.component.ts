import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { CarpartSearchService } from './carpart-search.service';
import { Carpart } from './carpart';

@Component({
  selector: 'carpart-search',
  templateUrl: './carpart-search.component.html',
  styleUrls: [ './carpart-search.component.css' ],
  providers: [CarpartSearchService]
})

export class CarpartSearchComponent implements OnInit {
  carparts: Observable<Carpart[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private carpartSearchService: CarpartSearchService,
    private router: Router) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.carparts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.carpartSearchService.search(term)
        // or the observable of empty carparts if there was no search term
        : Observable.of<Carpart[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Carpart[]>([]);
      });
  }

  gotoDetail(carpart: Carpart): void {
    let link = ['/detail', carpart.id];
    this.router.navigate(link);
  }

}