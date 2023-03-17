import React, { useState } from 'react';

const ExerciseTracker = () => {
  const [date, setDate] = useState('');
  const [equipment, setEquipment] = useState('');
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleEquipmentChange = (e) => {
    setEquipment(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleRepsChange = (e) => {
    setReps(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would save the exercise information to your database or wherever you're storing it
    console.log(`Date: ${date}, Equipment: ${equipment}, Weight: ${weight}, Reps: ${reps}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <br />
      <label>
        Equipment:
        <select value={equipment} onChange={handleEquipmentChange}>
          <option value="">Select an option</option>
          <option value="Dumbbells">Dumbbells</option>
          <option value="Barbell">Barbell</option>
          <option value="Resistance bands">Resistance bands</option>
        </select>
      </label>
      <br />
      <label>
        Weight:
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <label>
        Reps:
        <input type="number" value={reps} onChange={handleRepsChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExerciseTracker;