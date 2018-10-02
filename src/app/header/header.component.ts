
import { Component , OnInit} from '@angular/core';

// import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNavBar = false;

  constructor() { }

  ngOnInit() {
 /*    this.authService.showNavBarEmitter.subscribe(
      (mode: boolean) => {
        if (mode !== null) {
          this.showNavBar = mode;
        }
      }
    ); */
  }

  isAuth() {
   // return this.authService.isAuthenticated();
  }

  onLogout() {
   // this.authService.logout();
  }

}
