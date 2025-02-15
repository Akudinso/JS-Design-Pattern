import { Observer } from "./observer.js";

export class DialingMessageObserver extends Observer {
    update(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
}
