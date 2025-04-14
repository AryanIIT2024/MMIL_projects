const scriptURL = 'https://script.google.com/macros/s/AKfycbwnyBbxpdy_eO_LZ9Uh7Nok5qAr1QVCUh4J17eozSAqpT7Ft-TfUTJ3AtlmqwKxy9capw/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert('✅ Data submitted successfully!');
      form.reset(); 
      console.log('Success!', response);
    })
    .catch(error => {
      alert('❌ There was an error submitting the form. Please try again.');
      console.error('Error!', error.message);
    });
});
