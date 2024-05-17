import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO, PhoneNumberFormat, NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FooterComponent } from "../../../pages-module/footer/footer/footer.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, NgxIntlTelInputModule, FooterComponent]
})
export class ContactUsComponent {
  showDetails: boolean = false;
  customCodeForm: FormGroup;
  placeholder : string = 'Enter Phone Number';

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedKingdom];
  
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.customCodeForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
           this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
           this.minLengthWithSpacesValidator(2),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z ]+$'),
        ],
      ],
      emailAddress: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.required],
      ],
      message: [
        '',
        [
          Validators.required,
          this.minLengthWithSpacesValidator(20),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  phoneNumberValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value && typeof value === 'object' && value.hasOwnProperty('number')) {
        const isValid = value.isValid;  
        return isValid ? null : { invalidPhoneNumber: true };
      }
      return { invalidPhoneNumber: true };
    };
  }


  minLengthWithSpacesValidator(minLength: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value || '';
      const spaceCount: number = (value.match(/\s/g) || []).length;
      const actualLength: number = value.length - spaceCount;
      return actualLength < minLength ? { minlength: true } : null;
    };
  }



  onSubmit(): void {
    if (this.customCodeForm.valid) {
      this.toastr.success('Request Submitted Successfully');
      console.log('Form values:', this.customCodeForm.value);
    } else {
      this.customCodeForm.markAllAsTouched();
      this.toastr.error('Please Fill The Form Properly');
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
