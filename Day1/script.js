function OnClickSubmit() {
  const nameInput = document.getElementById('nameInput').value;
  if (nameInput.trim() === '') {
    alert('Please enter your name!');
  } else {
    alert('Welcome, ' + nameInput + '!');
  }
}
