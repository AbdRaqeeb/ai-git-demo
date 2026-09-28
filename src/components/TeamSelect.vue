<script setup>
import { teams } from "../data.js";

defineProps({
  modelValue: { type: String, required: true },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="select">
    <span>Team</span>
    <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="t in teams" :key="t.id" :value="t.id">{{ t.name }}</option>
    </select>
  </label>
</template>

<style scoped>
.select {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
}
.select span {
  opacity: 0.65;
}
select {
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: 1px solid #e3e5e8;
  background: #fff;
  font: inherit;
}
@media (prefers-color-scheme: dark) {
  select {
    background: #14171c;
    border-color: #2b3038;
    color: inherit;
  }
}
</style>