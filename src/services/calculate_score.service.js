export const calculate_news_score = (data) => {
  const respiratory_rate_score = calculate_respiratory_rate_score(data.respiratory_rate);
  const oxygen_saturation_score = calculate_oxygen_saturation_score(data.oxygen_saturation);
  const supplemental_oxygen_score = data.supplemental_oxygen ? 2 : 0;
  const temperature_score = calculate_temperature_score(data.temperature);
  const blood_pressure_score = calculate_blood_pressure_score(data.systolic_blood_pressure);
  const heart_rate_score = calculate_heart_rate_score(data.heart_rate);
  const consciousness_score = data.level_of_consciousness !== 'Alert' ? 3 : 0;

  const total_score = respiratory_rate_score + oxygen_saturation_score + supplemental_oxygen_score +
                      temperature_score + blood_pressure_score + heart_rate_score + consciousness_score;

  return {
    total_score,
    respiratory_rate_score,
    oxygen_saturation_score,
    supplemental_oxygen_score,
    temperature_score,
    blood_pressure_score,
    heart_rate_score,
    consciousness_score
  };
};

const calculate_respiratory_rate_score = (rate) => 
  rate <= 8 ? 3 :
  rate <= 11 ? 1 :
  rate >= 25 ? 3 :
  rate >= 21 ? 2 : 0;

const calculate_oxygen_saturation_score = (saturation) => 
  saturation <= 91 ? 3 :
  saturation <= 93 ? 2 : 
  saturation <= 95 ? 1 : 0;

const calculate_temperature_score = (temp) => 
  temp <= 35.0 ? 3 :
  temp <= 36.0 ? 1 : 
  temp >= 39.1 ? 2 :
  temp >= 38.1 ? 1 : 0;

const calculate_blood_pressure_score = (pressure) => 
  pressure <= 90 ? 3 :
  pressure <= 100 ? 2 :
  pressure <= 110 ? 1 : 
  pressure >= 220 ? 3 : 0;

const calculate_heart_rate_score = (rate) => 
  rate <= 40 ? 3 : 
  rate <= 50 ? 1 : 
  rate >= 131 ? 3 :
  rate >= 111 ? 2 : 
  rate >= 91 ? 1 : 0;