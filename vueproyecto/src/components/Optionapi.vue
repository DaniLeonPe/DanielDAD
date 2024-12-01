<template>
  <div>
    <h1>Contador: {{ counter }}</h1>
    <p v-if="counter > 10">¡El valor es alto!</p>

    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
    <button @click="reset">Reiniciar</button>
    <button @click="double">Duplicar</button>

    <div>
      <input v-model.number="initialValue" type="number" placeholder="Establecer valor inicial" />
      <button @click="setInitialValue">Establecer</button>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      counter: 0,
      initialValue: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
    double() {
      this.counter *= 2;
    },
    setInitialValue() {
      this.counter = this.initialValue;
    },
  },
};
</script>

<style>
button {
  margin: 5px;
}
</style>
