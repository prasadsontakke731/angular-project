import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { organizations } from 'src/mocks/organization.mock';
import { users } from 'src/mocks/user.mock';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component {
  organizationId: string = "";
  organizationName: string = '';
  designation: string = '';
  birthDate: any = null;
  city: string = '';
  pincode: string = '';
  organizations: any[] = [];
  errorMessage: string = '';

  // 
  oIdError: string = ""
  oNameError: string = ""
  destError: string = ""
  birthError: string = ""
  cityError: string = ""
  pinError: string = ""


  constructor(private authService: AuthService, private router: Router) {
    this.authService.getOrganizations().subscribe(orgs => {
      this.organizations = orgs;
    });
  }

  validateOrganization() {
    // if (!this.organizations.some(org => org.name === this.organizationName)) {
    //   this.errorMessage = 'Unknown organization-id';
    // } else {
    //   this.errorMessage = '';
    // }

  }

  back() {
    this.router.navigate(['/signup']);
  }

  submit() {
    const user = users.find((u) => (u.organizationId === this.organizationId && u.name === this.organizationName && u.designation === this.designation && u.birthDate === this.birthDate && u.city === this.city && u.pincode === this.pincode))
    if (user) {
      this.router.navigate(['/loginSuccess']);
    }
    if (users.find((item) => (item.organizationId !== this.organizationId && this.organizationId === ""))) {
      this.oIdError = 'Incorrect Id please try again';
    }
    if (users.find((item) => (item.name !== this.organizationName && this.organizationName === ""))) {
      this.oNameError = 'Incorrect Name please try again';
    }
    if (users.find((item) => (item.designation !== this.designation && this.designation === ""))) {
      this.destError = 'Incorrect Destin please try again';
    }
    if (users.find((item) => (item.birthDate !== this.birthDate && this.birthDate === ""))) {
      this.birthError = 'Incorrect Date please try again';
    }
    if (users.find((item) => (item.city !== this.city && this.city === ""))) {
      this.cityError = 'Incorrect City please try again';
    }
    if (users.find((item) => (item.pincode !== this.pincode && this.pincode === ""))) {
      this.pinError = 'Incorrect Pin  please try again';
    }
    else {

      this.errorMessage = 'Invalid Credential';
    }

    // const user = users.find((u) => (u.birthDate === this.birthDate && u.city === this.city && u.pincode === this.pincode && u.organizationId === this.organizationId && u.name === this.organizationName))


    // if (user) {
    //   this.router.navigate(['/signupSuccess']);
    // }
    // this.router.navigate(['/signupSuccess']);
    // if (this.errorMessage) {
    //   return;
    // }
    // Submit the data to the backend or proceed further
  }
}