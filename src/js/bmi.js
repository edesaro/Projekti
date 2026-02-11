document.addEventListener('DOMContentLoaded', () => {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const calculateBtn = document.querySelector('.calculate-btn');
  const bmiScore = document.querySelector('.bmi-score');
  const analysisText = document.querySelector('.analysis-text');
  
  // Varmistetaan että elementit löytyvät
  console.log('Elementit:', {
    weightInput,
    heightInput,
    calculateBtn,
    bmiScore,
    analysisText
  });
  
  // Painoindeksitiedot (lyhennettynä)
  const bmiData = {
    low: "Jos painoindeksi on alle 18,5, se merkitsee liiallista laihuutta.",
    normal: "Normaaliksi on valittu se painoindeksin alue, jossa ihmisen terveys on parhaimmillaan.",
    high: "Kun painoindeksi ylittää 25, ollaan liikapainon puolella.",
    obese: "Painoindeksi yli 30 kertoo, että on kyse lihavuudesta."
  };
  
  calculateBtn.addEventListener('click', () => {
    console.log('Lasketaan BMI...');
    
    const weight = parseFloat(weightInput.value.replace(',', '.'));
    const height = parseFloat(heightInput.value.replace(',', '.'));
    
    console.log('Paino:', weight, 'Pituus:', height);
    
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Ole hyvä ja syötä kelvollinen paino ja pituus.');
      return;
    }
    
    // Laske BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    console.log('BMI:', bmi);
    
    // Päivitä BMI-tulos
    bmiScore.textContent = bmi;
    
    // Poista vanhat aktiiviset luokat
    document.querySelectorAll('.bmi-range').forEach(range => {
      range.classList.remove('active');
    });
    
    // Lisää aktiivinen luokka ja päivitä teksti
    let analysis = '';
    if (bmi < 18.5) {
      document.querySelector('.underweight').classList.add('active');
      analysis = bmiData.low;
    } else if (bmi < 25) {
      document.querySelector('.normal').classList.add('active');
      analysis = bmiData.normal;
    } else if (bmi < 30) {
      document.querySelector('.overweight').classList.add('active');
      analysis = bmiData.high;
    } else {
      document.querySelector('.obese').classList.add('active');
      analysis = bmiData.obese;
    }
    
    analysisText.textContent = analysis;
    console.log('Analyysi päivitetty');
  });
  
  // Enter-näppäin toimii myös
  [weightInput, heightInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        calculateBtn.click();
      }
    });
  });
});