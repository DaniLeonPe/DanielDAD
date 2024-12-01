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
import { ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const initialValue = ref(0);

    const increment = () => counter.value++;
    const decrement = () => counter.value--;
    const reset = () => (counter.value = 0);
    const double = () => (counter.value *= 2);
    const setInitialValue = () => (counter.value = initialValue.value);

    return {
      counter,
      initialValue,
      increment,
      decrement,
      reset,
      double,
      setInitialValue,
    };
  },
};
</script>

<style >
button {
  margin: 5px;
}
</style>
