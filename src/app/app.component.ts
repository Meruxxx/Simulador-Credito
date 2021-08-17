import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items = [{ title: 'Crédito' }, { title: 'Comercio' }, { title: 'Vivienda' }];

  constructor(private nbMenuService: NbMenuService, private router: Router) {}

  ngOnInit(): void {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        const routes: Record<string, string> = {
          Crédito: '/credito',
          Comercio: '/comercio',
          Vivienda: '/vivienda',
        };

        this.router.navigate([routes[title]]);
      });
  }
}
