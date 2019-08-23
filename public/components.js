console.log(Vue.version);

const CodeTable = {
  props: ["items"],
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>Frase</th>
          <th>Palíndromo</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items">
        <td>{{item.frase}}</td>
        <template v-if="item.palindromo == 'Sim'">
          <td data-verificado="positivo">{{item.palindromo}}</td>
        </template>
        <template v-else>
          <td data-verificado="negativo">{{item.palindromo}}</td>
        </template>
        </tr>
      </tbody>
    </table>
  `
};

const CodeContainer = {
  template: `
    <div class="container box">
      <slot/>
    </div>
    `
};
