<template>
  <div class="main__wrapper">
    <div class="main">
      <div class="main__text" v-bind:data-name="initSelection">
        {{ initSelection() }}
        {{ mainText }}
      </div>

      <div class="main__checkboxes">
        <ul class="checkboxes-list">
          <li
            class="checkboxes-list__item"
            v-for="checkbox in mainCheckboxes"
            v-bind:key="checkbox.id"
          >
            <input
              type="checkbox"
              v-bind:name="checkbox.label"
              v-bind:id="'ch' + checkbox.id"
            />
            <label class="checkboxes-list__label" v-bind:for="'ch' + checkbox.id">
              {{ checkbox.label }}</label
            >
          </li>
        </ul>
      </div>
    </div>

    <button class="btn" v-on:click="addToSelectionResult">Добавить в selection</button>

    <div class="result">{{ mainResult }}</div>
  </div>
</template>

<script>
  function mn(target) {
    let selObj = document.getSelection();
    console.log(`selObj from ${target}=`, selObj.toString());
  }

  document.onselectstart = function() {
    console.log('Selection started!');
    // mn('start');
  };

  // не фаерится внутри вью
  document.onselectionchange = function() {
    console.log('Selection change!'); //изменяется на каждый символ
    mn('change');
  };

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
      id: 0,
      label: 'text'
    },
    {
      id: 1,
      label: 'masha'
    },
    {
      id: 2,
      label: 'vue'
    }
  ];

  export default {
    name: 'MarkedEntities',
    data() {
      return {
        mainText: mainText,
        mainCheckboxes: mainCheckboxes,
        mainResult: '',
        //область выделения
        selection: '',
        sel: '',
        array: []
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
      mainText: function() {
      }
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
      window.mn = this;
      /*onSelect() {
       return document.onselectionchange;
       }*/
    },
    updated() {
    },
    methods: {
      //тут следить за текстом и его выделением?
      initSelection() {
        console.log('Selection инициировался');
        // let self = this;
        this.selection = document.getSelection();
        this.sel = this.selection.toString();
        console.log('methods this.sel=', this.sel);
      },
      addToSelectionResult() {
        console.log('masha=', this.sel);
        this.array.push(this.sel);
        // this.sel = '';
        console.log('this.array=', this.array);
      }
    }
  };
</script>

<style scoped src="./MarkedEntities.css"></style>
