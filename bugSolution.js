function writeData(data) {
  // Input validation to check if the data is a valid JSON object
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    console.error('Invalid data format. Data must be a JSON object.');
    return;
  }

  // Write the data to Firebase
  firebase.database().ref('/').set(data)
    .then(() => {
      console.log('Data written successfully!');
    })
    .catch((error) => {
      console.error('Error writing data:', error);
    });
} 