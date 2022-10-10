import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 hide = true;
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
    
  ) { }

loginForm=this.fb.group(
{
email: ['',[Validators.required]],
password:['',[Validators.required]]  
});

 ngOnInit(): void {
    

   /* const data={email:'luisSuazo@gmail.com',password: '1'};
    this.authSvc.login(data).subscribe(
      user => {
        console.log(user);
      }
    )*/
  }
 
  onLogin(){
    console.log(this.loginForm.value);
    const formValue=this.loginForm.value;
    this.authSvc.login(formValue).subscribe(
      user => {
        console.log(user);
        if (user) {
          //redireccionar a la pagina principal
          this.router.navigate(['/home']);
          
        }
      } 
    )
  }
  isValidField(field:string):string{
    const validatedField=this.loginForm.get(field);
    return (!validatedField?.valid && validatedField?.touched)?'is-invalid': validatedField?.touched?'is-valid':'';
  }

}
