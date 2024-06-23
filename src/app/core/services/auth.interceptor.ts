import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';  // Asegúrate de ajustar la ruta según tu estructura de archivos

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // Exclude authentication requests
    if (req.url.includes('/authentication')) {
      return next.handle(req);
    }

    const token = this.userService.getToken();
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }
}





