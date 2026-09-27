<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  hint: { type: String, default: "" },
});
</script>

<template>
  <div class="card">
    <div class="label">{{ label }}</div>
    <div class="value">{{ value }}</div>
    <div class="hint">{{ hint }}</div>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border: 1px solid #e3e5e8;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
@media (prefers-color-scheme: dark) {
  .card {
    background: #1c2026;
    border-color: #2b3038;
  }
}
.label {
  font-size: 0.8rem;
  opacity: 0.65;
}
.value {
  font-size: 1.9rem;
  font-weight: 700;
  margin: 0.25rem 0;
}
.hint {
  font-size: 0.78rem;
  opacity: 0.55;
}
</style>