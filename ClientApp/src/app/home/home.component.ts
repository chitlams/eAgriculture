import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Username: any;

  myGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.myGroup.valid) {
      this.submitEM.emit(this.myGroup.value);

    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
