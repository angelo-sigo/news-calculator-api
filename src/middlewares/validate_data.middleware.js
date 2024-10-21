export const validate_data = (req, res, next) => {
    const { respiratory_rate, oxygen_saturation, supplemental_oxygen, temperature, systolic_blood_pressure, heart_rate, level_of_consciousness } = req.body;

    if (!validate_respiratory_rate(respiratory_rate)) {
        return res.status(400).json({ error: 'Invalid respiratory rate' });
    }
    
    if (!validate_oxygen_saturation(oxygen_saturation)) {
        return res.status(400).json({ error: 'Invalid oxygen saturation' });
    }
    
    if (!validate_supplemental_oxygen(supplemental_oxygen)) {
        return res.status(400).json({ error: 'Invalid supplemental oxygen' });
    }
    
    if (!validate_temperature(temperature)) {
        return res.status(400).json({ error: 'Invalid temperature' });
    }
    
    if (!validate_blood_pressure(systolic_blood_pressure)) {
        return res.status(400).json({ error: 'Invalid systolic blood pressure' });
    }
    
    if (!validate_heart_rate(heart_rate)) {
        return res.status(400).json({ error: 'Invalid heart rate' });
    }
    
    if (!validate_consciousness(level_of_consciousness)) {
        return res.status(400).json({ error: 'Invalid level of consciousness' });
    }

    // Se todos os dados forem válidos, passa para o próximo middleware
    next();
};

// Funções de validação
const validate_respiratory_rate = (rate) => Number.isInteger(rate) && rate >= 0 && rate <= 60;

const validate_oxygen_saturation = (saturation) => saturation >= 0 && saturation <= 100;

const validate_supplemental_oxygen = (supplementalOxygen) => typeof supplementalOxygen === 'boolean';

const validate_temperature = (temp) => temp >= 25 && temp <= 45;

const validate_blood_pressure = (pressure) => Number.isInteger(pressure) && pressure >= 0 && pressure <= 300;

const validate_heart_rate = (rate) => Number.isInteger(rate) && rate >= 0 && rate <= 300;

const validate_consciousness = (levelOfConsciousness) => 
    ['Alert', 'Voice', 'Pain', 'Unresponsive'].includes(levelOfConsciousness);