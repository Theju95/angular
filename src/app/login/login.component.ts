import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
onSubmit(app)
{
  if(app.value.username == "AG14463")  if(app.value.password == "Theju_123")

  {
   this.router.navigate (['/success']);
      
  }

  else 
  {
     
     window.alert(" Login failed. Please check your username or Password ");
  }
}
}