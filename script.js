// scripts.js

// Function to check domain availability
function checkDomain() {
    const domainInput = document.getElementById('domain-input').value;
    const domainResult = document.getElementById('domain-result');

    // Simulate a domain availability check
    setTimeout(() => {
        if (domainInput) {
            domainResult.textContent = `The domain "${domainInput}.com" is available!`;
        } else {
            domainResult.textContent = "Please enter a domain name.";
        }
    }, 1000);
}

// Function to handle payment processing
function processPayment() {
    const selectedPayment = document.getElementById('selected-payment').textContent;
    const paymentResult = document.getElementById('payment-result');

    // Simulate payment processing
    setTimeout(() => {
        if (selectedPayment) {
            paymentResult.textContent = `Payment via ${selectedPayment} successful! Thank you for your purchase.`;
        } else {
            paymentResult.textContent = "Please select a payment method.";
        }
    }, 1000);
}

// Function to handle payment option selection
function selectPayment(option) {
    document.getElementById('selected-payment').textContent = option;
}

// Function to download receipt
function downloadReceipt() {
    // Simulate receipt download
    setTimeout(() => {
        alert('Receipt downloaded successfully!');
    }, 1000);
}

// Initialize function on page load or DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for template selection buttons
    document.querySelectorAll('.template button').forEach(button => {
        button.addEventListener('click', (event) => {
            const templateName = event.target.previousElementSibling.textContent;
            selectTemplate(templateName); // Assuming selectTemplate function handles template selection
        });
    });
});



