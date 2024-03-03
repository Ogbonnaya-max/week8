const readline = require('readline');

// Observer Class
class Observer {
    update(phoneNumber) {}
}

// Observer for printing the phone number
class PrintPhoneNumberObserver extends Observer {
    update(phoneNumber) {
        console.log("Dialing:", phoneNumber);
    }
}

// Observer for printing a custom message
class PrintCustomMessageObserver extends Observer {
    update(phoneNumber) {
        console.log("Now Dialing", phoneNumber);
    }
}

// Telephone Class
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    // Method to add observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Method to notify observers
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    // Method to add phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
        console.log(`Phone number ${phoneNumber} added.`);
    }

    // Method to remove phone number
    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
            console.log(`Phone number ${phoneNumber} removed.`);
        } else {
            console.log("Phone number not found.");
        }
    }

    // Method to dial phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log(`Now dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Example Usage
const telephone = new Telephone();

// Adding Observers
telephone.addObserver(new PrintPhoneNumberObserver());
telephone.addObserver(new PrintCustomMessageObserver());

// Function to handle adding and dialing phone numbers
function handlePhoneNumbers() {
    rl.question('Enter phone number to add or "done" to exit: ', (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
        } else {
            telephone.addPhoneNumber(input);

            rl.question('Enter phone number to dial or "remove" to remove a number: ', (input) => {
                if (input.toLowerCase() === 'remove') {
                    rl.question('Enter phone number to remove: ', (removeNumber) => {
                        telephone.removePhoneNumber(removeNumber);
                        handlePhoneNumbers(); // Prompt for next input
                    });
                } else {
                    telephone.dialPhoneNumber(input);
                    handlePhoneNumbers(); // Prompt for next input
                }
            });
        }
    });
}

// Start the process
handlePhoneNumbers();
