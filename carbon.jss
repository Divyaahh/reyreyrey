function calculateFootprint() {
    const distance = document.getElementById('distance').value;
    const fuelEfficiency = document.getElementById('fuelEfficiency').value;
    const carType = document.getElementById('carType').value;
    
    if (!distance || !fuelEfficiency || !carType) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple calculation for carbon footprint (CO2 emissions)
    // Different multipliers based on car type
    let multiplier = 2.3; // Default for sedan
    
    switch(carType) {
        case 'suv':
            multiplier = 2.7;
            break;
        case 'truck':
            multiplier = 3.0;
            break;
        case 'hybrid':
            multiplier = 1.8;
            break;
        case 'electric':
            multiplier = 0.5; // Significantly lower for electric vehicles
            break;
        default:
            multiplier = 2.3;
    }
    
    const carbonFootprint = (distance * fuelEfficiency * multiplier / 100).toFixed(2);
    
    document.getElementById('result').innerHTML = `Your annual carbon footprint is <strong>${carbonFootprint}</strong> kg CO2`;
}
