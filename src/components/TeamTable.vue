<script setup>
import { teams, teamStats } from "../data.js";

defineProps({
  filter: { type: String, default: "" },
});

const maxPrs = Math.max(...teams.map((t) => teamStats[t.id].prsMerged));
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>Members</th>
        <th>RFCs</th>
        <th>PRs merged</th>
        <th>AI-assisted</th>
        <th>Hours saved</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in teams" :key="t.id" :class="{ active: t.id === filter }">
        <td>{{ t.name }}</td>
        <td>{{ teamStats[t.id].members }}</td>
        <td>{{ teamStats[t.id].rfcCount }}</td>
        <td>
          <div class="bar-cell">
            <div class="bar" :style="{ width: (teamStats[t.id].prsMerged / maxPrs) * 100 + '%' }"></div>
            <span>{{ teamStats[t.id].prsMerged }}</span>
          </div>
        </td>
        <td>{{ teamStats[t.id].aiAssisted }}</td>
        <td>{{ teamStats[t.id].hoursSaved }}h</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}
th,
td {
  text-align: left;
  padding: 0.7rem 0.75rem;
  border-bottom: 1px solid #eef0f3;
}
@media (prefers-color-scheme: dark) {
  th,
  td {
    border-bottom-color: #2b3038;
  }
}
th {
  opacity: 0.6;
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
tr.active {
  background: rgba(63, 118, 255, 0.1);
}
.bar-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.bar {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3f76ff, #7c5cff);
  max-width: 120px;
}
</style>