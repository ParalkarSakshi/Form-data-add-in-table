import { Component } from '@angular/core';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-multiple-data',
  templateUrl: './add-multiple-data.component.html',
  styleUrls: ['./add-multiple-data.component.css']
})
export class AddMultipleDataComponent {

  name:String='';
  email:String='';

  submit:boolean=false;
  dataArray: any[]=[];
 
  Submit() {
    const newUser = {name:this.name,email:this.email};
    this.dataArray.push(newUser);
    this.submit=true;

    Swal.fire({
      title:"Data received",
      text:`the user with name ${this.name} is added`,
      icon:'success'
    })

    console.log(`the user with name is ${this.name} is added`);
    this.submit=true
  }
}
