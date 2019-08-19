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
        <td>{{item.palindromo}}</td>
        </tr>
      </tbody>
    </table>
  `
};

const CodeInput = {
  template: `<input @keyup.enter="$emit('insert')"/>`
};

const CodeContainer = {
  template: `
    <div class="container box">
      <slot/>
    </div>
    `
};
