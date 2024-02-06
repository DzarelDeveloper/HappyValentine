const delay_1 = 1500;
const delay_2 = 2700;
const delay_3 = 4175;

class Heart extends mojs.CustomShape {
  getShape() {
    return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>';
  }

  getLength() {
    return 200;
  }
}

mojs.addShape('heart', Heart);

const rect = new mojs.Shape({
  shape: 'polygon',
  points: '3',
  fill: 'none',
  radius: { 800: 120 },
  angle: 180,
  stroke: { 'orange': 'white' },
  strokeWidth: { 60: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-75%': '100%' },
  duration: 1000
});

const firstExplosion = new mojs.Burst({
  radius: { 0: 500 },
  angle: { 0: -90 },
  count: 60,
  children: {
    radius: { 300: 0 },
    shape: 'polygon',
    points: '10',
    fill: 'none',
    stroke: { 'magenta': 'darkblue' },
    duration: 1000,
    delay: delay_1
  }
});

const firstExplosionBG = new mojs.Burst({
  radius: { 200: 1000 },
  count: 120,
  children: {
    radius: { 100: 0 },
    shape: 'line',
    fill: 'none',
    stroke: { 'orange': 'darkblue' },
    duration: 1500,
    delay: delay_1 + 900
  }
});

const ring1 = new mojs.Burst({
  radius: { 10: 800 },
  count: 30,
  children: {
    shape: 'zigzag',
    points: '20',
    fill: 'none',
    stroke: { 'darkblue': 'pink' },
    angle: { '-360': 0 },
    duration: 3000,
    strokeWidth: { 60: 0 },
    delay: delay_1
  }
});

const ring2 = new mojs.Burst({
  radius: { 0: 1000 },
  count: 20,
  children: {
    shape: 'circle',
    fill: { 'orange': 'red' },
    duration: 5750,
    delay: delay_1
  }
});

const ring3 = new mojs.Burst({
  radius: { 0: 400 },
  angle: { 0: 90 },
  count: 100,
  children: {
    shape: 'circle',
    fill: 'magenta',
    duration: 3000,
    delay: delay_1
  }
}).then({
  radius: 0,
  duration: 1000
});

const ring4 = new mojs.Burst({
  radius: { 0: 200, easing: 'sin.in' },
  angle: { 0: -90 },
  count: 20,
  children: {
    radius: 100,
    shape: 'circle',
    fill: 'none',
    stroke: 'magenta',
    duration: 1000,
    delay: delay_1 + 500
  }
});

const heart = new mojs.Shape({
  shape: 'heart',
  fill: 'none',
  stroke: 'white',
  scale: { 0: 3 },
  strokeWidth: { 50: 0 },
  y: 25,
  duration: 1000,
  delay: delay_2
}).then({
  shape: 'heart',
  stroke: 'white',
  scale: 0,
  strokeWidth: 50,
  duration: 200
}).then({
  shape: 'heart',
  fill: 'red',
  stroke: 'none',
  scale: 2,
  strokeWidth: 0,
  duration: 600
});

const crazy = new mojs.Burst({
  radius: { 10: 1000 },
  count: 10,
  children: {
    shape: 'circle',
    delay: delay_2,
    duration: 2500
  }
});

const timeline = new mojs.Timeline({
  onComplete: function () {
    window.location.href = 'Valentine.html';
  }
});

timeline.add(ring1, ring2, ring3, ring4, firstExplosion, firstExplosionBG);

timeline.add(crazy, rect, heart);

timeline.play();

const loveElement = document.getElementById('love');
loveElement.addEventListener('click', function () {
  window.location.href = 'Valentine.html';
});