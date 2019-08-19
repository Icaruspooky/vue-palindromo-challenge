new Vue({
  el: "#app",
  components: {
    CodeTable,
    CodeInput,
    CodeContainer
  },

  data() {
    return {
      items: [],
      form: {
        frase: '',
        palindromo: '',
      }
    };
  },

  template: `
    <code-container>
      <div class="field">
        <label class="label">Verificador de Palíndromo</label>
        <div class="control">
          <code-input @insert="addItem(form)" class="input" v-model="form.frase"/>
        </div>
      </div>
      <code-table :items="items"></code-table>
    </code-container>
  `,

  methods: {
    addItem(form) {
      if (form) {
        form.palindrome = (this.isPalindrome(form.frase) ? "Sim" : "Não");
        this.items.push({ ...form });
        this.value = "";
      }
    },
    loadItems() {
      this.items = data;
    },
    isPalindrome(sentence){
      let = re = /[\W_]/g;
      let lowerCaseSentence = sentence.toLowerCase().replace(re, '');
      let reverse = lowerCaseSentence.split('').reverse().join('');
      return lowerCaseSentence === reverse;
    }
  }
});
