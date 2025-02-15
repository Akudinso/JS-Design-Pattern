import { Observer } from "./observer.js";

export class PrintPhoneNumberObserver extends Observer {
    update(phoneNumber) {
        console.log(phoneNumber);
    }
}
