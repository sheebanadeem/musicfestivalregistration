angular.module('eventRegistrationApp', [])
.controller('RegistrationController', function() {
    // Event and sessions data for a music event
    this.event = {
        name: 'Dark Wave Music Festival 2024',
        date: 'September 30 - October 2, 2024',
        time: '6:00 PM - 2:00 AM',
        location: 'Abandoned Warehouse, Downtown',
        description: 'Join us for a night of dark beats with top underground bands.'
    };

    this.sessions = [
        { name: 'The Midnight Requiem', band: 'Gothic Spirits', time: '6:00 PM - 7:30 PM', description: 'A haunting symphony of dark melodies.', price: 30, selected: false },
        { name: 'Industrial Nightmare', band: 'Neon Shadows', time: '8:00 PM - 9:30 PM', description: 'Heavy industrial beats with a visual light show.', price: 40, selected: false },
        { name: 'The Final Descent', band: 'Crimson Obsidian', time: '10:00 PM - 12:00 AM', description: 'Hard-hitting grunge rock that will leave you speechless.', price: 50, selected: false }
    ];

    this.attendee = {
        name: '',
        email: ''
    };

    this.totalFees = function() {
        let total = 0;
        this.sessions.forEach(session => {
            if (session.selected) {
                total += session.price;
            }
        });
        return total;
    };

    this.register = function() {
        if (this.attendee.name && this.attendee.email) {
            alert('Thank you for registering, ' + this.attendee.name);
        } else {
            alert('Please fill out the registration form.');
        }
    };

    this.updateFees = function() {
        this.totalFees();
    };

    this.showPaymentModal = false;

    this.pay = function() {
        if (this.totalFees() > 0) {
            this.showPaymentModal = true;
        } else {
            alert('Please select at least one session.');
        }
    };

    this.confirmPayment = function() {
        alert('Payment successful! Thank you for registering.');
        this.showPaymentModal = false;
    };

    this.cancelPayment = function() {
        this.showPaymentModal = false;
    };
});
