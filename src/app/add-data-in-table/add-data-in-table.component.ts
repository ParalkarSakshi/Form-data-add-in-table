import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-data-in-table',
  templateUrl: './add-data-in-table.component.html',
  styleUrls: ['./add-data-in-table.component.css']
})
export class AddDataInTableComponent {
  name=''
  password=''

  submit=false

  Submit() {
    Swal.fire({
      title:"data received",
      text:`the user with name ${this.name} is added`,
      icon:'success'
    })

    console.log(`the user with name ${this.name} is added`);
    this.submit=true
  }
}
