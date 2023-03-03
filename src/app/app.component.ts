import { Component } from '@angular/core';
import { FormGroup, Validators ,FormBuilder } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      nombre : ['', Validators.required, ],
      apellido : ['', Validators.required],
      numeroid: ['', Validators.required],
      correo: ['', Validators.required]
    })

    
  }

  onSubmit(){
    console.log(this.form.value);
    this.router.navigate(['softy']);
  }
}
