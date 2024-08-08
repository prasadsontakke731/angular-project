import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private users = [
        { emailOrPhone: 'user@example.com', password: 'password123' },
        { emailOrPhone: '1234567890', password: 'password456' }
    ];

    private organizations = [
        { name: 'Org1' },
        { name: 'Org2' },
        { name: 'Org3' }
    ];

    validateUser(emailOrPhone: string): Observable<boolean> {
        return of(this.users.some(user => user.emailOrPhone === emailOrPhone));
    }

    validatePassword(emailOrPhone: string, password: string): Observable<boolean> {
        return of(this.users.some(user => user.emailOrPhone === emailOrPhone && user.password === password));
    }

    getOrganizations(): Observable<any[]> {
        return of(this.organizations);
    }
}