import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-controller',
  standalone: true,
  template: `
    <form novalidate [formGroup]='settings' class='form-content'>
      <h3>Content Settings</h3>
      <div class='form-section'>
        <mat-form-field>
          <mat-label>Layout</mat-label>
          <mat-select [formControl]='settings.controls.layout'>
            <mat-option value='default'>Default</mat-option>
            <mat-option value='off-screen'>Off Screen</mat-option>
            <mat-option value='distributed'>Distributed</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class='form-section'>
        <mat-form-field>
          <mat-label>Icon Lists</mat-label>
          <input matInput type="number" [formControl]='settings.controls.listCount'>
        </mat-form-field>
        <button mat-mini-fab class='option-btn'>
          <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab>
          <mat-icon>remove</mat-icon>
        </button>
      </div>
    </form>
  `,
  styles: `
    .form-content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .form-section {
      margin: 0 16px;
    }
    .option-btn {
      margin: 0 16px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ControllerComponent {
  settings = new FormGroup({
    layout: new FormControl<string>('default', { validators: [Validators.required], nonNullable: true }),
    listCount: new FormControl<number>(0, { validators: [Validators.required], nonNullable: true }),
  })

}
