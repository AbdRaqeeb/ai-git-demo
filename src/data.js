export const teams = [
  { id: "platform", name: "Platform" },
  { id: "data", name: "Data" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "ml", name: "ML" },
];

export const teamStats = {
  platform: { members: 8, rfcCount: 12, prsMerged: 96, aiAssisted: 71, hoursSaved: 132 },
  data: { members: 6, rfcCount: 9, prsMerged: 74, aiAssisted: 58, hoursSaved: 104 },
  frontend: { members: 7, rfcCount: 10, prsMerged: 83, aiAssisted: 66, hoursSaved: 118 },
  backend: { members: 9, rfcCount: 14, prsMerged: 101, aiAssisted: 78, hoursSaved: 145 },
  ml: { members: 5, rfcCount: 11, prsMerged: 88, aiAssisted: 74, hoursSaved: 129 },
};

export const weeklyPrs = [
  { week: "W1", platform: 18, data: 14, frontend: 16, backend: 20, ml: 17 },
  { week: "W2", platform: 21, data: 16, frontend: 18, backend: 23, ml: 19 },
  { week: "W3", platform: 24, data: 19, frontend: 22, backend: 26, ml: 22 },
  { week: "W4", platform: 33, data: 25, frontend: 27, backend: 32, ml: 30 },
];

export const totals = {
  members: 35,
  rfcCount: 56,
  prsMerged: 442,
  aiAssisted: 347,
  hoursSaved: 628,
  aiShare: "78%",
};