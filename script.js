// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration goes here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase Realtime Database
  const database = firebase.database();
  
  // Get a reference to the notepad text area
  const notepadText = document.getElementById('notepadText');
  
  // Sync the notepad text with Firebase Realtime Database
  const notepadRef = database.ref('notepad');
  
  // Listen for changes in the database and update the notepad text
  notepadRef.on('value', (snapshot) => {
    notepadText.value = snapshot.val() || '';
  });
  
  // Update the database when the notepad text changes
  notepadText.addEventListener('input', () => {
    notepadRef.set(notepadText.value);
  });
  