import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = new FormGroup(
    {
      name: new FormControl('', Validators.minLength(2)),
      surname: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl('', Validators.minLength(9)),
      message: new FormControl(''),
      privacity: new FormControl(''),
    }
  );
  
  onSubmit(): void {
    console.log(this.form.value);
  }
}
