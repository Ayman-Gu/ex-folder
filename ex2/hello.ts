type Point = { x: number; y: number };

// Génération de 20 points (y = 2x + 3 + bruit)
const data: Point[] = Array.from({ length: 20 }, (_, i) => {
  const x = i + 1;
  const noise = Math.random() * 2 - 1; // bruit entre -1 et 1
  const y = 2 * x + 3 + noise;
  return { x, y };
});

function linearRegression(points: Point[]) {
  const n = points.length;
  const sumX = points.reduce((sum, p) => sum + p.x, 0);
  const sumY = points.reduce((sum, p) => sum + p.y, 0);
  const sumXY = points.reduce((sum, p) => sum + p.x * p.y, 0);
  const sumXX = points.reduce((sum, p) => sum + p.x * p.x, 0);

  // pente (m) et intercept (b)
  const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const b = (sumY - m * sumX) / n;

  return { slope: m, intercept: b };
}

const result = linearRegression(data);

console.log("Points:", JSON.stringify(data, null, 2));
console.log(`Equation estimée: y = ${result.slope.toFixed(2)}x + ${result.intercept.toFixed(2)}`);
