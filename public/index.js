new Vue({
  el: "#app",
  components: {
    CodeTable,
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
      <h3 class="subtitle">Verificador de Palíndromo</h3>    
        <div class="buttons has-addons is-right">
          <a v-on:click="erase()" data-test="limpar-dados" class="button">Apagar Histórico</a>
        </div>
        <div class="control">
          <input v-on:keyup.enter="addItem(form)"
          data-test="entrada"
          class="input" v-model="form.frase" 
          placeholder="Frase a ser verificada" />
        </div>
      </div>
      <code-table :items="items"></code-table>
    </code-container>
  `,

  methods: {
    addItem(form) {
      if (form.frase.trim()) {
        form.palindromo = (this.isPalindrome(form.frase) ? "Sim" : "Não");
        this.items.push({ ...form });
        form.frase = "";
      }
    },
    erase(){
      this.items = [];
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
