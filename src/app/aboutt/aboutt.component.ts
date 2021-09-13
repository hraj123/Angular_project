import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';




@Component({
  selector: 'app-aboutt',
  templateUrl: './aboutt.component.html',
  styleUrls: ['./aboutt.component.css']
})
export class AbouttComponent implements OnInit {
  registrationform=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    // hobby:new FormControl('',Validators.required)

  })
  details = {
    name:'',email:'',gender:'',city:''
  }
  submit(){
    // console.warn(this.registrationform)
    console.log(this.registrationform);
    this.details.name = this.registrationform.controls.name.value;
    this.details.email = this.registrationform.controls.email.value;
    this.details.city = this.registrationform.controls.city.value;
    this.details.gender = this.registrationform.controls.gender.value;
    console.log(this.details);
    this.router.navigate(['/output']);
    this.http.post("http://localhost:3000/data",this.details).subscribe((result)=>{
      console.log(result)
    })

  }
  get name(){
    return this.registrationform.get('name');
  }
  get email(){
    return this.registrationform.get('email');
  }

  
 constructor(private http: HttpClient,private router:Router){

 }
  
  

  ngOnInit() {
    // console.log(this.registrationform);

  
}
}
