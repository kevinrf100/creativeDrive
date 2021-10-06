import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validatePasswords(form: AbstractControl): ValidatorFn {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password.value != null && confirmPassword.value != null) {
        password.value === confirmPassword.value ? confirmPassword.setErrors(null) : confirmPassword.setErrors({ wrongPassword: true });
    }
    return null;
}
