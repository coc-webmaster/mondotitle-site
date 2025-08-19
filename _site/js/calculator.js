document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');

    function calculateMortgage() {
        // Get values from input fields
        const homePrice = parseFloat(document.getElementById('home-price').value);
        const downPayment = parseFloat(document.getElementById('down-payment').value);
        const termInYears = parseInt(document.getElementById('loan-term').value);
        const annualRate = parseFloat(document.getElementById('interest-rate').value);

        // Basic validation
        if (isNaN(homePrice) || isNaN(downPayment) || isNaN(termInYears) || isNaN(annualRate)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        // --- Calculations ---
        const principal = homePrice - downPayment;
        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = termInYears * 12;

        // Calculate Principal & Interest (P&I) using the amortization formula
        let monthlyPI = 0;
        if (monthlyRate > 0) {
            monthlyPI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        } else {
            monthlyPI = principal / numberOfPayments;
        }

        // Estimate Taxes and Insurance (PITI) - using common percentages
        const monthlyTax = (homePrice * 0.011) / 12; // Assuming 1.1% annual property tax
        const monthlyInsurance = (homePrice * 0.005) / 12; // Assuming 0.5% annual homeowners insurance

        const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyInsurance;

        // --- Update the display ---
        document.getElementById('total-payment-display').textContent = `$${totalMonthlyPayment.toFixed(2)}`;
        document.querySelector('#pi-breakdown span').textContent = `$${monthlyPI.toFixed(2)}`;
        document.querySelector('#tax-breakdown span').textContent = `$${monthlyTax.toFixed(2)}`;
        document.querySelector('#ins-breakdown span').textContent = `$${monthlyInsurance.toFixed(2)}`;
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateMortgage);
        // Run once on page load with default values
        calculateMortgage();
    }
});