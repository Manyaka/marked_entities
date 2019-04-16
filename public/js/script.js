document.addEventListener('DOMContentLoaded', function() {
  //--------------------------------------------
  let button = document.querySelector('[data-selector="btn-add"]');
  let buttonDelete = document.querySelector('[data-selector="btn-delete"]');
  let textDiv = document.querySelector('[data-selector="text-div"]');
  let resultDiv = document.querySelector('[data-selector="result-div"]');
  let resultArray = [];
  let selection;
  let buttons = document.querySelectorAll('[data-selector="buttons"]');
  let textDivInnerHtml = textDiv.innerHTML;
  let marksHTMLCollection = document.getElementsByTagName('mark');

  // debounce the selection event
  let selectionChangeTimer = null;

  function handleSelectionChange() {
    clearTimeout(selectionChangeTimer);
    selectionChangeTimer = setTimeout(getSelection, 500);
  }

  function getSelection() {
    selection = document.getSelection();

    if (!selection || selection.isCollapsed) {
      return;
    } else {
      //
    }
    // console.log('getSelection:', selection.toString());
  }

  //получаем селекшн
  document.onselectionchange = function() {
    //селекшн должен считываться только в блоке текста - containsNode()
    if (document.getSelection().containsNode(textDiv, true)) {
      handleSelectionChange();
    }
  };

  /*button.addEventListener('click', function() {
   resultArray.push(selection.toString());
   resultDiv.textContent = resultArray;
   });*/
  //--------------------------------------------
  //убираем обёртку с тега марк
  buttonDelete.addEventListener('click', function() {
    if (!selection || selection.isCollapsed) {
      window.alert('Сначала выделите текст');
    } else {
      // console.log(selection);
      // console.log(selection.anchorNode); //node
      // console.log(selection.anchorNode.parentElement); //mark
      let markNode = selection.anchorNode.parentElement;
      // console.log(markNode.id);
      // console.log(markNode.addEventListener('click', console.log('click')));

      marksHTMLCollection = document.getElementsByTagName('mark');
      let theMark = marksHTMLCollection.namedItem(markNode.id);
      // console.log(typeof theMark, '**', theMark instanceof Element);
      theMark.outerHTML = theMark.innerHTML;
    }
  });

  //--------------------------------------------
  //обёртываем в тег mark
  buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
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
      } else {
        let range = selection.getRangeAt(0);
        range.surroundContents(markNode);
        textDivInnerHtml = textDiv.innerHTML;
        selection.removeAllRanges();

        textDiv.innerHTML = textDivInnerHtml;
      }
    });
  });

  //*************** MutationObserver ***************//
  // Select the node that will be observed for mutations
  let targetNode = textDiv;

  // Options for the observer (which mutations to observe)
  let observerOptions = { childList: true, subtree: false };

  // Callback function to execute when mutations are observed
  let callback = function(mutationsList, observer) {
    // console.log('mutationsList=', mutationsList);
    for (let mutation of mutationsList) {
      // console.log('mutation=', mutation);
      // console.log('mutation.addedNodes=', mutation.addedNodes);
      for (let addedNode of mutation.addedNodes) {
        // console.log('addedNode=', addedNode);
        if (addedNode.nodeName === 'MARK') {
          // console.log('mark'); //this MutationObserver
          addedNode.addEventListener('click', function(event) {
            let markDataName = event.target.dataset.name;
            let markClassName = event.target.className;
            buttons.forEach(function(btn) {
              let btnDataName = btn.dataset.name;
              if (markDataName === btnDataName) {
                btn.className = markClassName;
              }
            });
          });
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  let observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(textDiv, observerOptions);

});

//input.setSelectionRange(1, 56);

function setRandomId() {
  return `id${Math.floor(Math.random() * 100)}`;
}
