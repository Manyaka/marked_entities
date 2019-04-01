document.addEventListener('DOMContentLoaded', function(event) {
  let button = document.querySelector('[data-selector="btn-add"]');
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let checkboxList = document.querySelector('[data-selector="checkbox-list"]');
  let checkbox = document.querySelector('[data-selector="checkbox"]');
  let resultArray = [];
  let selection;

  document.onselectionchange = function() {
    selection = document.getSelection();
  };

  button.addEventListener('click', function() {
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });

  checkboxList.addEventListener('change', function() {
    let arrLi = Array.from(checkboxList.children);

    arrLi.forEach(function(element, i) {
      let li = Array.from(element.children);

      li.forEach(function(element, i) {
        if (element.tagName === 'INPUT') {
          mn(element);
        }
      });
    });
  });
});

function mn(input) {
  // console.log('mn=', input);
  if (input.checked) {
    console.log('Checkbox is checked');
  } else {
    console.log('Checkbox is not checked');
  }
}
