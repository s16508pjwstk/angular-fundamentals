import {Component} from "@angular/core";
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';
import {AuthService} from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
  `]
})

export class NavbarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(
    public auth: AuthService,
    private eventService: EventService
    ) {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions) => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);

      }
    );
  }
}
