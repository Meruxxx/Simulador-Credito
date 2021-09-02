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
  items = [
    { title: 'Libre Inversión' },
    { title: 'Comercio' },
    { title: 'Vivienda' },
    { title: 'Educativo' },
    { title: 'CrediFacil' },
  ];

  itemsAhorros = [{ title: 'CDAT' }, { title: 'Contractuales' }];

  rutasCredito: string[] = [
    'credito',
    'comercio',
    'vivienda',
    'educativo',
    'credifacil',
  ];
  rutasAhorros: string[] = ['cdat', 'contractuales'];

  constructor(private nbMenuService: NbMenuService, private router: Router) {}

  get lastRoute(): string {
    const routes = window.location.pathname.split('/');
    const lastRoute = routes[routes.length - 1];
    return lastRoute;
  }

  get esCredito(): boolean {
    return this.rutasCredito.includes(this.lastRoute);
  }

  get esAhorros(): boolean {
    return this.rutasAhorros.includes(this.lastRoute);
  }

  ngOnInit(): void {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        const routes: Record<string, string> = {
          'Libre Inversión': '/credito',
          Comercio: '/comercio',
          Vivienda: '/vivienda',
          Educativo: '/educativo',
          CrediFacil: '/credifacil',
          CDAT: '/cdat',
          Contractuales: '/contractuales',
        };
        this.router.navigate([routes[title]]);
      });
  }
}
