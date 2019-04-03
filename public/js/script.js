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
      textDiv.contentEditable = true;
      textDiv.focus();
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
  //selection тоже используется в этом блоке
  let buttons = document.querySelectorAll('[data-selector="buttons"]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      console.log('event', event.target);
      console.log('event', event.target.dataset);
      console.log('event', event.target.dataset.color);
      console.log('event', event.target.dataset.name);
      document.execCommand('hiliteColor', false, event.target.dataset.color);
      // highlight('blue');
    });
  });
});

//для IE 9
function makeEditableAndHighlight(colour) {
  let range,
    sel = window.getSelection();
  if (sel.rangeCount && sel.getRangeAt) {
    range = sel.getRangeAt(0);
  }
  document.designMode = 'on';
  if (range) {
    sel.removeAllRanges();
    sel.addRange(range);
  }
  // Use HiliteColor since some browsers apply BackColor to the whole block
  if (!document.execCommand('HiliteColor', false, colour)) {
    document.execCommand('BackColor', false, colour);
  }
  document.designMode = 'off';
}

function highlight(colour) {
  let range, sel;
  if (window.getSelection) {
    // IE9 and non-IE
    try {
      if (!document.execCommand('BackColor', false, colour)) {
        makeEditableAndHighlight(colour);
      }
    } catch (ex) {
      makeEditableAndHighlight(colour);
    }
  } else if (document.selection && document.selection.createRange) {
    // IE <= 8 case
    range = document.selection.createRange();
    range.execCommand('BackColor', false, colour);
  }
}
