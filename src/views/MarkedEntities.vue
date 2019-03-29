<template>
  <div class="main__wrapper">
    <div class="main">
      <div class="main__text">{{ mainText }}</div>
      <div class="main__checkboxes">
        <ul class="checkboxes-list">
          <li
            class="checkboxes-list__item"
            v-for="checkbox in mainCheckboxes"
            v-bind:key="checkbox.id"
          >
            <span class="pseudo-checkbox"></span> {{ checkbox.label }}
          </li>
        </ul>
      </div>
    </div>
    <div class="result">{{ mainResult }}</div>
  </div>
</template>

<script>
  // let selObj = window.getSelection();
  // console.log('selObj=', selObj);
  /*document.onselectstart = function() {
    console.log('Selection started!');
  };*/

  // import json from '/json/mainText.json'
  // import json2 from '/json/mainCheckboxes.json'

  //получить данные из json
  // let mainText = require('@/json/mainText.json');
  /*let mainCheckboxes = fetch('https://api.github.com/users/chriscoyier/repos')
     .then(response => response.json())
     .then(data => {
     console.log('data=', data);
     }
     );
     console.log('mainCheckboxes=', mainCheckboxes);*/

  let mainText =
    'При транскрибировании терминов корейской топонимики односложные ' +
    'номенклатурные термины, за некоторыми исключениями, сохраняются в транскрипции. ' +
    'Они пишутся слитно с собственным названием и повторяются также в переводе; ' +
    'например: 한강 — река Ханган, 백두산 — гора Пэктусан, 제주도 остров Чеджудо, ' +
    '평안도 — провинция Пхёнандо, 광안동 — квартал Кванандон, 연화리 — деревня Йонхвари и т. д.' +
    ' Исключение составляют односложные номенклатурные термины, обозначающие город (시), ' +
    'уезд (군), район города (구), уездный город или административный центр уезда (읍), ' +
    'волость (면): 김해시 — город Кимхэ, 평창군 — уезд Пхёнчхан, 수영구 — район Суён, ' +
    '흥해읍 — уездный город Хынхэ, 철마면 — волость Чхольма. Однако в сочетании с ' +
    'односложными названиями они всегда передаются в транскрипции: 동면 — волость ' +
    'Тонмён, 북구 — район Пукку.[2]';

  let mainText2 = 'Masha';

  let mainCheckboxes = [
    {
      "id": 0,
      "label": "text"
    },
    {
      "id": 1,
      "label": "masha"
    },
    {
      "id": 2,
      "label": "vue"
    }];



  export default {
    name: 'MarkedEntities',
    data() {
      return {
        mainText: mainText,
        mainCheckboxes: mainCheckboxes,
        mainResult: '',
        // publicPath: process.env.BASE_URL
      };
    },
    computed: {
      /*mainResult: function() {
        return this.mainText.startsWith('П'); //true
      }*/
    },
    watch: {
      //тут следить за текстом и его выделением?
      mainText: function() {}
    },
    created() {
      //получить данные из json
      /*fetch('https://api.github.com/users/chriscoyier/repos')
        .then(response => {
          this.mainResult = response.data;
          console.log(this.mainResult);
      });*/
    },
    mounted() {
    },
    updated() {
      this.selection();
    },
    methods: {
      //тут следить за текстом и его выделением?
      selection: function() {
        let self = this;
        let selObj = window.getSelection();
        console.log('methods selObj=', selObj);
      }
    },
  };
</script>

<style scoped src="./MarkedEntities.css"></style>
