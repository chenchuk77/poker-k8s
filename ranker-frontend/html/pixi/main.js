//Create a Pixi Application
let app = new PIXI.Application({ 
    width: 800, 
    //height: 600,                       
    height: 300,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

// --------------------------------------------------------------------------
const sprites = {};

//load an image and run the `setup` function when it's done
PIXI.Loader.shared
  .add(imageFiles)
  .load(setup);

function get_sprite(code){
  card = new PIXI.Sprite(PIXI.Loader.shared.resources[card_files[code]].texture);
  card.scale.x = 0.5;
  card.scale.y = 0.5;
  return card;
}

var hearts   = ['2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah'];
var spades   = ['2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As'];
var diamonds = ['2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad'];
var clubs    = ['2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac'];

for (var i=0; i<12; i++){
    var code = hearts[i]
    sprites[code] = get_sprite(hearts[i]);
}

function draw_cards(){
  var y_offset = 64
  var x_offset = 55
  var y_position = 0
  for (var i=0; i<=12; i++){
    position = i*x_offset;
    var code = hearts[i]
    sprites[code] = get_sprite(hearts[i]);
    sprites[code].position.x += position;
    sprites[code].position.y = y_position;
    app.stage.addChild(sprites[code])
  }

  var y_position = y_position + y_offset;
  for (var i=0; i<=12; i++){
    position = i*x_offset;
    var code = spades[i]
    sprites[code] = get_sprite(spades[i]);
    sprites[code].position.x += position;
    sprites[code].position.y = y_position;
    app.stage.addChild(sprites[code])
  }

  var y_position = y_position + y_offset;
  for (var i=0; i<=12; i++){
    position = i*x_offset;
    var code = diamonds[i]
    sprites[code] = get_sprite(diamonds[i]);
    sprites[code].position.x += position;
    sprites[code].position.y = y_position;
    app.stage.addChild(sprites[code])
  }

  var y_position = y_position + y_offset;
  for (var i=0; i<=12; i++){
    position = i*x_offset;
    var code = clubs[i]
    sprites[code] = get_sprite(clubs[i]);
    sprites[code].position.x += position;
    sprites[code].position.y = y_position;
    app.stage.addChild(sprites[code])
  }
}

function get_results(url, callback) {
    fetch(url)
       .then(response => response.json())
       .then(json => callback(null, json.restaurants))
       .catch(error => callback(error, null))
}


function show_results(data){
  var res_string = data.my_cards + " wins " + data.win_percent + "%" + " vs. " + data.op_cards + " over " + data.records.length + " samples."
  console.log(data);
  document.getElementById("results").innerHTML = res_string;  
}

function evaluate_hands(hands, samples){
  var url = "http://127.0.0.1:3000/" + hands + "/" + samples
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(data => show_results(data));
	
//    .catch((error) => {
//       console.error('holdem-ranker api returned an error:', error);
//    });

    //.then(data => console.log(data));
}

//This `setup` function will run when the image has loaded
function setup() {
  draw_cards()
  
  //let c1 = get_sprite('7h');
  //let c2 = get_sprite('9c');
  //app.stage.addChild(c1);
  //app.stage.addChild(c2);
}

