import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    RouterOutlet,
    SignupComponent,
    ProfileComponent
  ],
  standalone: true,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
count : number = 0;

increase(){
  this.count++;
}
decrease(){
  this.count--;
}
reset(){
  this.count = 0;
}

}
