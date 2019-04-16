document.addEventListener('DOMContentLoaded', function() {
  //--------------------------------------------
  let button = document.querySelector('[data-selector="btn-add"]');
  let buttonDelete = document.querySelector('[data-selector="btn-delete"]');
  let textDiv = document.querySelector('[data-selector="text-div"]');
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

    if (!selection || selection.isCollapsed) {
      return;
    }
    // console.log('getSelection:', selection.toString());
  }

  document.onselectionchange = function() {
    //селекшн должен считываться только в блоке текста - containsNode()
    if (document.getSelection().containsNode(textDiv, true)) {
      handleSelectionChange();
      // textDiv.contentEditable = true;
      // textDiv.focus();
      // selection = document.getSelection();
    }
  };

  button.addEventListener('click', function() {
    resultArray.push(selection.toString());
    resultDiv.textContent = resultArray;
  });
  //--------------------------------------------

  buttonDelete.addEventListener('click', function() {
    if (!selection || selection.isCollapsed) {
      window.alert('Сначала выделите текст');
      return;
    } else {
      // console.log(selection);
      // console.log(selection.anchorNode); //node
      // console.log(selection.anchorNode.parentElement); //mark
      let markNode = selection.anchorNode.parentElement;
      // console.log(markNode.id);
      // console.log(markNode.addEventListener('click', console.log('click')));

      let marksHTMLCollection = document.getElementsByTagName('mark');
      // console.log(marksHTMLCollection);
      let theMark = marksHTMLCollection.namedItem(markNode.id);
      // console.log(typeof theMark, '**', theMark instanceof Element);
      theMark.outerHTML = theMark.innerHTML;
    }
  });

  //--------------------------------------------
  //selection тоже используется в этом блоке
  let buttons = document.querySelectorAll('[data-selector="buttons"]');
  // let range, markNode;
  let textDivInnerHtml = textDiv.innerHTML;

  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      // document.execCommand('hiliteColor', false, event.target.dataset.color);
      let markNode = document.createElement('mark');
      let dataName = document.createAttribute('data-name');
      let className = document.createAttribute('class');
      let id = document.createAttribute('id');
      dataName.value = event.target.dataset.name;
      className.value = event.target.dataset.class;
      id.value = setRandomId();
      markNode.setAttributeNode(dataName);
      markNode.setAttributeNode(className);
      markNode.setAttributeNode(id);

      if (!selection || selection.isCollapsed) {
        window.alert('Сначала выделите текст');
        return;
      } else {
        let range = selection.getRangeAt(0);
        range.surroundContents(markNode);
        textDivInnerHtml = textDiv.innerHTML;
        selection.removeAllRanges();

        textDiv.innerHTML = textDivInnerHtml;
      }
    });
  });
});

//input.setSelectionRange(1, 56);

function setRandomId() {
  return `id${Math.floor(Math.random() * 100)}`;
}
