document.addEventListener('DOMContentLoaded', function() {
  //--------------------------------------------
  let button = document.querySelector('[data-selector="btn-add"]');
  let textDiv = document.querySelector('[data-selector="text-div"]');
  console.log(textDiv);
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let resultArray = [];
  let selection;

  // debounce the event
  let selectionChangeTimer = null;

  function handleSelectionChange() {
    clearTimeout(selectionChangeTimer);
    selectionChangeTimer = setTimeout(getSelection, 500);
  }

  function getSelection() {
    selection = document.getSelection();

    if (!selection.rangeCount) {
      return;
    }
    console.log('getSelection:', selection.toString());
  }

  document.onselectionchange = function() {
    //селекшн должен считываться только в блоке текста - containsNode()
    if (document.getSelection().containsNode(textDiv, true)) {
      handleSelectionChange();
      // textDiv.contentEditable = true;
      // textDiv.focus();
      // selection = document.getSelection();
      // console.log(selection.toString());
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
  // let range, markNode;
  let textDivInnerHtml = textDiv.innerHTML;
  // console.log('textDivInnerHtml--Start=', textDivInnerHtml);

  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // document.execCommand('hiliteColor', false, event.target.dataset.color);
      let markNode = document.createElement('mark');
      let dataName = document.createAttribute('data-name');
      let className = document.createAttribute('class');
      dataName.value = event.target.dataset.name;
      className.value = event.target.dataset.class;
      markNode.setAttributeNode(dataName);
      markNode.setAttributeNode(className);

      if (!selection || selection.isCollapsed) {
        window.alert('Сначала выделите текст');
      } else {
        let range = selection.getRangeAt(0);
        range.surroundContents(markNode);
        textDivInnerHtml = textDiv.innerHTML;
        // console.log('textDivInnerHtml--End=', textDivInnerHtml);
        selection.removeAllRanges();

        textDiv.innerHTML = textDivInnerHtml;
      }
    });
  });
});

//input.setSelectionRange(1, 56);
