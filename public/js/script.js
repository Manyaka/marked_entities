document.addEventListener('DOMContentLoaded', function(event) {
  let button = document.querySelector('[data-selector="btn-add"]');
  let textDiv = document.querySelector('[data-selector="text-div"]');
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let checkboxList = document.querySelector('[data-selector="checkbox-list"]');
  let checkbox = document.querySelector('[data-selector="checkbox"]');
  let resultArray = [];
  let selection;
  let arrLi = Array.from(checkboxList.children);

  document.onselectionchange = function() {
    //TODO селекшн должен считываться только в блоке текста - containsNode()
    //console.log(document.getSelection().containsNode(document.textDiv, true));
    selection = document.getSelection();
  };

  button.addEventListener('click', function() {
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });

  checkboxList.addEventListener('change', function() {
    //TODO предупреждать, когда нет выделения
    arrLi.forEach(function(element) {
      let li = Array.from(element.children);
      mn(li, selection);
    });
  });
});

//проверяем чекбокс на соответствие текста лейбла и выделенного, и чекаем
function mn(element, selection) {
  let sel;
  console.log('mn=', element, '**', typeof element);//object

  if (selection) {
    sel = selection.toString();
    console.log('sel=', sel);
  }
  //element[0] - label
  let labelText = element[0].textContent.trim();
  console.log('labelText=', labelText);

  let input = element[0].children[0];

  if (labelText === sel) {
    console.log('чекать можно');
    input.setAttribute('checked', true);
    console.log('input', input);
  } else {
    console.log('чекать нельзя');
    input.removeAttribute('checked');
    console.log('input', input);
  }

  /*element.forEach(function(element, i) {

   if (element.tagName === 'LABEL') {
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
  });*/

  /*if (elements.tagName === 'INPUT') {
     // mn(elements);
     }*/

  /*if (input.checked) {
   console.log('Checkbox is checked');
   } else {
   console.log('Checkbox is not checked');
   }*/
  console.log('-------------');
}
