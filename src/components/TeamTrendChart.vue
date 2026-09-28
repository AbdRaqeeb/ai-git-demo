<script setup>
import { computed } from "vue";
import { weeklyPrs, teamStats, teams } from "../data.js";

const props = defineProps({
  team: { type: String, required: true },
});

const teamName = computed(() => teams.find((t) => t.id === props.team)?.name ?? props.team);

const series = computed(() => weeklyPrs.map((w) => ({ label: w.week, value: w[props.team] ?? 0 })));

const width = 520;
const height = 180;
const pad = { top: 16, right: 16, bottom: 28, left: 32 };

const points = computed(() => {
  const values = series.value.map((p) => p.value);
  const max = Math.max(...values, 1);
  const stepX = (width - pad.left - pad.right) / (values.length - 1);
  return values.map((v, i) => ({
    x: pad.left + i * stepX,
    y: pad.top + (height - pad.top - pad.bottom) * (1 - v / max),
  }));
});

const linePath = computed(() =>
  points.value.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ")
);

const areaPath = computed(() => {
  const last = points.value[points.value.length - 1];
  const first = points.value[0];
  return `${linePath.value} L${last.x},${height - pad.bottom} L${first.x},${height - pad.bottom} Z`;
});
</script>

<template>
  <div class="trend">
    <h3>PR trend — {{ teamName }} <small>last 4 weeks</small></h3>
    <svg :viewBox="`0 0 ${width} ${height}`" role="img" :aria-label="'PR trend for ' + teamName">
      <path :d="areaPath" class="area" />
      <path :d="linePath" class="line" />
      <g v-for="(p, i) in points" :key="i">
        <circle :cx="p.x" :cy="p.y" r="4" class="dot" />
        <text :x="p.x" :y="height - 8" class="axis">{{ series[i].label }}</text>
        <text :x="p.x" :y="p.y - 10" class="value">{{ series[i].value }}</text>
      </g>
    </svg>
    <p class="meta">{{ teamStats[team].aiAssisted }} of {{ teamStats[team].prsMerged }} PRs AI-assisted · {{ teamStats[team].hoursSaved }}h saved</p>
  </div>
</template>

<style scoped>
.trend {
  margin-top: 1rem;
}
h3 {
  font-size: 0.95rem;
  margin: 0 0 0.5rem;
}
h3 small {
  opacity: 0.55;
  font-weight: 400;
}
svg {
  width: 100%;
  height: auto;
}
.area {
  fill: rgba(63, 118, 255, 0.12);
}
.line {
  fill: none;
  stroke: #3f76ff;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.dot {
  fill: #fff;
  stroke: #3f76ff;
  stroke-width: 2;
}
@media (prefers-color-scheme: dark) {
  .dot {
    fill: #1c2026;
  }
}
.axis,
.value {
  font-size: 11px;
  fill: currentColor;
  opacity: 0.6;
}
.value {
  opacity: 0.85;
  font-weight: 600;
}
.meta {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  opacity: 0.6;
}
</style>