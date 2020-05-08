import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {first} from 'rxjs/operators';
import {NotificationService} from '../../../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('valid');
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(result => {
        if (result) {
          if (result.status === 200) {
            this.authenticationService.saveAccesToken(result.body);
            console.log(result);
            this.router.navigate(['/home']);
          } else {
            this.notificationService.error(`Couldn't sign in`, result.statusText);
          }
        }
      });
      this.loading = false;
    }
  }
}
