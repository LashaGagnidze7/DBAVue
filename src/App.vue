<template>
  <input :value="text" @input="(event) => (text = event.target.value)" />
  <!--v-model directive simplify above to-->
  <input v-model="text" />

  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" /><br />

  <span>Multiline text is:</span>
  <p style="white-space: per-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <input type="checkbox" i- />

  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">{{ option.text }}</option>
  </select>

  <!-- `picked` is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` is either true or false -->
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

  <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />

  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />

  <select v-model="selected">
    <!-- inline object literal -->
    <option :value="{ number: 123 }">123</option>
  </select>

  <!-- synced after "change" instead of "input" -->
  <input v-model.lazy="msg" />
  <input v-model.number="age" />
  <input v-model.trim="msg" />
</template>

<script>
export default {
  data() {
    return {
      text: null,
      message: null,
      checked: false,
      checkedNames: [],
      picked: null,
      selected: null,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      a: null,
      toggle: false,
    };
  },
};
</script>

<style>

</style>
