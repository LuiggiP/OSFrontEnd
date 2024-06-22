import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string | null = null;

  setUserId(id: string) {
    this.userId = id;
    localStorage.setItem('userId', id);
  }

  getUserId(): string | null {
    if (!this.userId) {
      this.userId = localStorage.getItem('userId');
    }
    return this.userId;
  }

  clearUserId() {
    this.userId = null;
    localStorage.removeItem('userId');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  clearUserData() {
    this.clearUserId();
    this.clearToken();
  }
}
