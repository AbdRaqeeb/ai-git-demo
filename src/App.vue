<script setup>
import { totals } from "./data.js";
import MetricsCard from "./components/MetricsCard.vue";
import TeamTable from "./components/TeamTable.vue";
</script>

<template>
  <main class="wrap">
    <header>
      <h1>AI Adoption Dashboard</h1>
      <p class="subtitle">Built per RFC-0001 · data refreshed weekly</p>
    </header>

    <section class="cards">
      <MetricsCard label="RFCs authored" :value="totals.rfcCount" hint="+6 this month" />
      <MetricsCard label="PRs merged" :value="totals.prsMerged" hint="+88 this month" />
      <MetricsCard label="AI-assisted PRs" :value="totals.aiAssisted" :hint="'Share: ' + totals.aiShare" />
      <MetricsCard label="Hours saved" :value="totals.hoursSaved + 'h'" hint="~18h / engineer" />
    </section>

    <section class="panel">
      <h2>Per-team breakdown</h2>
      <TeamTable />
    </section>
  </main>
</template>

<style scoped>
.wrap {
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}
header {
  margin-bottom: 1.5rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.panel {
  background: #fff;
  border: 1px solid #e3e5e8;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
}
@media (prefers-color-scheme: dark) {
  .panel {
    background: #1c2026;
    border-color: #2b3038;
  }
}
h2 {
  font-size: 1rem;
  margin: 0 0 0.75rem;
}
</style>