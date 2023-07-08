import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sub} from "../model/subscribe";
import {SubscribeService} from "../services/subscribe.service";

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  subFrom: FormGroup;
  notEmpty: boolean = false;
  isSubscribe: boolean = false;

  constructor(private fb: FormBuilder, private subService: SubscribeService) {
    this.subFrom = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }

  onSubmit() {
    const data: Sub = {
      name: this.subFrom.value.name,
      email: this.subFrom.value.email
    }
    this.subService.checkSub(data.email).subscribe(val => {
      if (val.empty) {
        this.subService.saveSub(data);
        this.notEmpty = false;
        this.isSubscribe = true;
      } else {
        this.notEmpty = true;
        this.isSubscribe = false;
      }
    })
  }
}
