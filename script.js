//your JS code here. If required.
// document.addEventListener('DOMContentLoaded', function () {
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.getElementsByTagName('input')[0];


  removeButton.addEventListener('click',  ()=> {
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    
    if (selectedOption) {
      colorSelect.removeChild(selectedOption);
    }
  });
// });











