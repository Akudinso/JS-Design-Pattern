import { Telephone } from "./modules/telephone.js";
import { PrintPhoneNumberObserver } from "./modules/PrintPhoneNumberObserver.js";
import { DialingMessageObserver } from "./modules/DialingMessageObserver.js";

// Create a telephone instance
const myPhone = new Telephone();

// Create observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new DialingMessageObserver();

// Add observers to the phone system
myPhone.addObserver(observer1);
myPhone.addObserver(observer2);

// Add phone numbers
myPhone.addPhoneNumber("2347023232");
myPhone.addPhoneNumber("2348034567890");

// Dial a number (triggers observer notifications)
myPhone.dialPhoneNumber("2347023232");

// Remove a number and try dialing again
myPhone.removePhoneNumber("2347023232");
myPhone.dialPhoneNumber("2347023232"); // Should show an error
