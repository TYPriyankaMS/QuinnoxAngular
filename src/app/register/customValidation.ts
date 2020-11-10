import { FormGroup } from "@angular/forms";

export function customValidator(group: FormGroup) {
    //validation logic inside this function

    let pwd = group.value.password;
    let confirmPwd = group.value.confirmPassword;
    let mobile = group.value.mobileNum;

    if (pwd === confirmPwd && mobile.toString().length === 10) {
        return null;
    } else {
        return { 'custom': true }
    }

}