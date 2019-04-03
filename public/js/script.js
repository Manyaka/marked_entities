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
      document.execCommand('hiliteColor', false, event.target.dataset.color);
    });
  });
});
