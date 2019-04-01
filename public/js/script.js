document.addEventListener('DOMContentLoaded', function(event) {
  //--------------------------------------------
  let button = document.querySelector('[data-selector="btn-add"]');
  let textDiv = document.querySelector('[data-selector="text-div"]');
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let resultArray = [];
  let selection;
  document.onselectionchange = function() {
    //селекшн должен считываться только в блоке текста - containsNode()
    if (document.getSelection().containsNode(textDiv, true)) {
      selection = document.getSelection();
    }
  };

  button.addEventListener('click', function() {
    //TODO предупреждать, что выделен текст не в том месте, или просто деражть кнопку
    // дисайблед
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });
  //--------------------------------------------

  //--------------------------------------------
  //selection, textDiv тоже используется в этом блоке
  let checkboxList = document.querySelector('[data-selector="checkbox-list"]');
  let arrLi = Array.from(checkboxList.children);

  let checkboxes = document.querySelectorAll('[data-selector="checkbox"]');
  // console.log('checkboxes=', checkboxes, '***', typeof checkboxes);

  // let arrCheckboxes = Array.from(checkboxes);
  // console.log('arrCheckboxes=', arrCheckboxes, '***', typeof arrCheckboxes);
  let range;
  let markNode = document.createElement("mark");
  let textDivInnerHtml = textDiv.innerHTML;
  // console.log('textDivInnerHtml=', textDivInnerHtml);

  checkboxes.forEach((input) => {
    input.addEventListener('change', (event) => {
      console.log('selection.isCollapsed=', selection.isCollapsed);
      if (!selection || selection.isCollapsed) {
        event.target.checked = false;
        window.alert('Сначала выделите текст');
      } else {
        // console.log('else=', selection.toString());
        // console.log('else=', selection.anchorNode);
        // console.log('else=', selection.anchorOffset);
        // console.log('else=', selection.focusNode);
        // console.log('else=', selection.focusOffset);
        // console.log('else=', selection);
        range = selection.getRangeAt(0);
        console.log('range=', range);
        //поставить марку
        range.surroundContents(markNode); //работает, только марк ставится 1 раз и
        // чекбокс
        //чекается сразу
      }
    });
  });

  /*checkboxes.forEach(function(element) {
   console.log('element=', element);
   element.addEventListener('change', function(event) {
   console.log('event=', event);
   // event.preventDefault();
   // event.stopImmediatePropagation();
   event.stopPropagation();
   })
   });*/

  /*checkboxList.addEventListener('change', function(event) {
   console.log('event.target=', event.target); //input
   console.log('event.currentTarget=', event.currentTarget); //ul
   //предупреждать, когда нет выделения
   if (!selection) {
   // window.alert('Сначала выделите текст');
   } else {
   // console.log('else');
   /!*arrLi.forEach(function(element) {
   let li = Array.from(element.children);
   tn(li, selection);
   });*!/
   }
   });*/
});

//ставим mark вкруг выделенного текста
function tn(element, selection) {
  console.log(selection);
}

//проверяем чекбокс на соответствие текста лейбла и выделенного, и чекаем
function mn(element, selection) {
  let sel;
  console.log('mn=', element, '**', typeof element); //object

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
