export class Telephone {
    constructor() {
        this.phoneNumbers = new Set(); // Stores phone numbers
        this.observers = []; // Stores observers
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
        console.log(`Added: ${phoneNumber}`);
    }

    removePhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
            console.log(`Removed: ${phoneNumber}`);
        } else {
            console.log(`Phone number ${phoneNumber} not found.`);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            console.log(`Dialing ${phoneNumber}...`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log(`Error: ${phoneNumber} is not in the contacts.`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
}
