import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  questionerForm: FormGroup;
  position = '';
  industry = '';
  experience = 0;
  matcher = new MyErrorStateMatcher();
  positions: any[] = ['Programmer', 'Businness Analyst', 'Designer', 'DBA'];
  industries: any[] = ['Software', 'Marketplace', 'Education', 'Mining'];
  experiences: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questionerForm = this.formBuilder.group({
      position: ['', Validators.required],
      industry: ['', Validators.required],
      experience: [null, Validators.required]
    });
    // this.setValues();
  }

  setValues() {
    this.questionerForm.setValue({
      position: 'Designer',
      industry: 'Mining',
      experience: 6
    });
  }

  onFormSubmit() {
    if (this.questionerForm.valid) {
      console.log(this.questionerForm.value);
    } else {
      return;
    }
  }

}
