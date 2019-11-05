import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  reactiveForm: FormGroup
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private builder: FormBuilder, private route: Router) {
    this.reactiveForm = this.builder.group({
      username: ['',
        [Validators.required]
      ],
      password: ['',
        [Validators.required]
      ]
    });
  }
  ngOnInit() {
  }

  Login(): void {
    this.route.navigateByUrl("/Home");
    this.dialogRef.close();
  }
}
