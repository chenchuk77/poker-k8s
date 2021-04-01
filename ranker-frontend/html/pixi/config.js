// this is a config file, it should be loaded into the DOM before the main.js
// it provides values to main.js environment

let card_files = {
    'Tc': 'images/cards/Tc.png',
    'Td': 'images/cards/Td.png',
    'Th': 'images/cards/Th.png',
    'Ts': 'images/cards/Ts.png',
    '2c': 'images/cards/2c.png',
    '2d': 'images/cards/2d.png',
    '2h': 'images/cards/2h.png',
    '2s': 'images/cards/2s.png',
    '3c': 'images/cards/3c.png',
    '3d': 'images/cards/3d.png',
    '3h': 'images/cards/3h.png',
    '3s': 'images/cards/3s.png',
    '4c': 'images/cards/4c.png',
    '4d': 'images/cards/4d.png',
    '4h': 'images/cards/4h.png',
    '4s': 'images/cards/4s.png',
    '5c': 'images/cards/5c.png',
    '5d': 'images/cards/5d.png',
    '5h': 'images/cards/5h.png',
    '5s': 'images/cards/5s.png',
    '6c': 'images/cards/6c.png',
    '6d': 'images/cards/6d.png',
    '6h': 'images/cards/6h.png',
    '6s': 'images/cards/6s.png',
    '7c': 'images/cards/7c.png',
    '7d': 'images/cards/7d.png',
    '7h': 'images/cards/7h.png',
    '7s': 'images/cards/7s.png',
    '8c': 'images/cards/8c.png',
    '8d': 'images/cards/8d.png',
    '8h': 'images/cards/8h.png',
    '8s': 'images/cards/8s.png',
    '9c': 'images/cards/9c.png',
    '9d': 'images/cards/9d.png',
    '9h': 'images/cards/9h.png',
    '9s': 'images/cards/9s.png',
    'Ac': 'images/cards/Ac.png',
    'Ad': 'images/cards/Ad.png',
    'Ah': 'images/cards/Ah.png',
    'As': 'images/cards/As.png',
    'Jc': 'images/cards/Jc.png',
    'Jd': 'images/cards/Jd.png',
    'Jh': 'images/cards/Jh.png',
    'Js': 'images/cards/Js.png',
    'Kc': 'images/cards/Kc.png',
    'Kd': 'images/cards/Kd.png',
    'Kh': 'images/cards/Kh.png',
    'Ks': 'images/cards/Ks.png',
    'Qc': 'images/cards/Qc.png',
    'Qd': 'images/cards/Qd.png',
    'Qh': 'images/cards/Qh.png',
    'Qs': 'images/cards/Qs.png'
};

// PIXI loader needs an array to load all images
var imageFiles = [];
for (const code in card_files) {
  console.log(`code: ${code}:, filename: ${card_files[code]}`);
  imageFiles.push(card_files[code]);
}

