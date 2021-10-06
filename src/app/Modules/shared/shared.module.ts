import { ConfirmEditDialogComponent } from './components/dialogs/confirm-edit-dialog/confirm-edit-dialog.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { InputBasicComponent } from './components/inputs/input-basic/input-basic.component';
import { InputCPFComponent } from './components/inputs/input-cpf/input-cpf.component';
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';
import { InputEmailComponent } from './components/inputs/input-email/input-email.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/Modules/material-module/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorSnackBarMessageComponent } from './components/snackBar/error-snack-bar-message/error-snack-bar-message.component';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDeleteUserComponent } from './components/dialogs/confirm-delete-user/confirm-delete-user.component';
import { SuccessSnackBarMessageComponent } from './components/snackBar/success-snack-bar-message/success-snack-bar-message.component';



@NgModule({
  declarations: [
    InputEmailComponent,
    InputPasswordComponent,
    InputCPFComponent,
    InputBasicComponent,
    CpfPipe,
    ErrorSnackBarMessageComponent,
    ConfirmEditDialogComponent,
    ConfirmDeleteUserComponent,
    SuccessSnackBarMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    CpfPipe,
    MaterialModule,
    ReactiveFormsModule,
    InputEmailComponent,
    InputPasswordComponent,
    InputCPFComponent,
    InputBasicComponent,
  ],
  entryComponents: [
    ErrorSnackBarMessageComponent,
    SuccessSnackBarMessageComponent,
    ConfirmEditDialogComponent,
    ConfirmDeleteUserComponent
  ]
})
export class SharedModule { }
