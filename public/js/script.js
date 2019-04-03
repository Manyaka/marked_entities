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
    //TODO предупреждать, что выделен текст не в том месте, или просто держать кнопку
    // дисайблед
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });
  //--------------------------------------------

  //--------------------------------------------
  //selection, textDiv тоже используется в этом блоке
  let checkboxList = document.querySelector('[data-selector="checkbox-list"]');
  let arrLi = Array.from(checkboxList.children);

  let range, clone;
  let markNode = document.createElement('mark');
  let spanNode = document.createElement('span');
  let textDivInnerHtml = textDiv.innerHTML;

  let buttons = document.querySelectorAll('[data-selector="buttons"]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.execCommand('hiliteColor', false, 'blue');
    });
  });
});

function tn() {
  if (!selection || selection.isCollapsed) {
    window.alert('Сначала выделите текст');
  } else {
    // debugger;
    // console.log('selectionStart=', selection);
    // console.log('selection=', selection.toString());
    range = selection.getRangeAt(0);
    // console.log('rangeStart=', range);
    // clone = range.cloneRange();
    range.surroundContents(markNode);
    // console.log('rangeAfterNode', range);
    // selection.removeAllRanges();
    // console.log('selectionMiddle=', selection);
    // selection.addRange(clone);
    // console.log('selectionEnd=', selection);
  }
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

let selectionRange;

function highlight(highlightID, color) {
  if (window.getSelection && window.getSelection().toString()) {
    let node = getSelectionParentElement(); //зачем получаем парента? Без него не работает
    if (node != null) {
      let text = getSelectionText();
      console.log('Selected text: ' + text);
      markFunc(node, text, /*HIGHLIGHT_CLASS + " " + */ color);
    } else {
      console.log('Parent node is null for some reason');
    }
  } else {
    window.alert('Сначала выделите текст');
    // console.log('tapped without selection');
  }
}

function getSelectionText() {
  if (window.getSelection) {
    let sel = window.getSelection();
    return sel.toString();
  }
}

function getSelectionParentElement() {
  let parentEl = null,
    sel;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      selectionRange = sel.getRangeAt(0);
      parentEl = selectionRange.commonAncestorContainer;
      if (parentEl.nodeType !== 1) {
        parentEl = parentEl.parentNode;
      }
    }
  } else if ((sel = document.selection) && sel.type !== 'Control') {
    parentEl = sel.createRange().parentElement();
  }
  return parentEl;
}

function markFunc(node, text, color) {
  let instance = new Mark(node);

  instance.mark(text, {
    element: 'mark',
    className: color,
    separateWordSearch: false,
    accuracy: 'partially',
    diacritics: true,
    acrossElements: true,
    ignoreJoiners: true,
    each: function(element) {
      element.setAttribute('class', 'mn');
    },
    /*filter: function(node, term, totalCounter, counter) {
      let res = false;
      if (counter === 0) {
        res = selectionRange.isPointInRange(node, selectionRange.startOffset);
      } else {
        res = selectionRange.isPointInRange(node, 1);
      }
      console.log('Counter: ' + counter + ', startOffset: ' + selectionRange.startOffset);
      return res;
    },*/
    done: function(totalMarks) {
          window.getSelection().empty(); //This only in Chrome
          console.log('total marks: ' + totalMarks);
        },
    debug: true
  });
}
