import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  public currentUser: IUser;

  public loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
  }

    public isAuthenticated() {
      return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
      this.currentUser.firstName = firstName;
      this.currentUser.lastName = lastName
    }
}
