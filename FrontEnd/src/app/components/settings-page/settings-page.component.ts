import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from "@angular/forms";
import {ConnectionService} from "../../connection.service";
import {ContactService} from "../../contact.service";
import {themeColor} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  panelOpenState = false;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any> | undefined;

  themeColor = themeColor;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private contact: ContactService) {

    this.contactForm = this.fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });
  }
  onSubmit(contactForm: FormGroup) {
    this.contactForm = contactForm;
    console.log(contactForm)
    this.contact.PostMessage(contactForm)
      .subscribe((response: any) => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, (error: { responseText: any; }) => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }

}
