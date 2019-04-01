document.addEventListener('DOMContentLoaded', function(event) {
  let button = document.querySelector('[data-selector="btn-add"]');
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let checkboxList = document.querySelector('[data-selector="checkbox-list"]');
  let checkbox = document.querySelector('[data-selector="checkbox"]');
  let resultArray = [];
  let selection;
  let arrLi = Array.from(checkboxList.children);

  document.onselectionchange = function() {
    selection = document.getSelection();
  };

  button.addEventListener('click', function() {
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });

  checkboxList.addEventListener('change', function() {
    arrLi.forEach(function(element) {
      let li = Array.from(element.children);
      mn(li, selection);
    });
  });
});

//проверяем чекбокс на соответствие текста лейбла и выделенного, и чекаем
function mn(elements, selection) {
  let sel;
  console.log('mn=', elements);

  if (selection) {
    sel = selection.toString();
    console.log('sel=', sel);
  }

  elements.forEach(function(element, i) {
    let labelText;

    if (element.tagName === 'LABEL') {
      labelText = element.textContent;
      console.log('labelText=', labelText);
    }

    if (labelText === sel) {
      console.log('чекать можно');
      if (element.tagName === 'INPUT') {
        element.setAttribute('checked', 'checked');
      }
    } else {
      console.log('чекать нельзя');
      if (element.tagName === 'INPUT') {
        element.removeAttribute('checked');
      }
    }
  });

  if (elements.tagName === 'INPUT') {
    // mn(elements);
  }

  /*if (input.checked) {
   console.log('Checkbox is checked');
   } else {
   console.log('Checkbox is not checked');
   }*/
  console.log('-------------');
}
