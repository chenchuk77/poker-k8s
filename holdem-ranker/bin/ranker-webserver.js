#!/usr/bin/node

// this is a nodejs ranker web server that accept a string of 4 cards in the url
// the first 2 are my cards
// the next  2 are opponent cards
// 
// example:
// to compare my hand [As 2h] vs opponent's [Td Tc] by averaging 100 instances use this:
// curl -X GET localhost:3000/As2hTdTc/100
//
// example response:
// rank={"handType":7,"handRank":12,"value":28684,"handName":"full house"}
//
// run as:
// $ ./ranker-webserver.js

// web server params
const http = require('http');
const port = 3000;

// this library can evaluate 7 cards poker hand. example usage:
// var rank = PokerEvaluator.evalHand(["As", "Ks", "Qs", "Js", "Ts", "3c", "5h"]);
var PokerEvaluator = require('/usr/src/app/lib/PokerEvaluator.js');

function get_deck() {
  console.log('getting deck')
  deck = ['2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc', 'Ac',
          '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd', 'Ad',
          '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh', 'Ah',
          '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As']
  deck = deck.sort(() => Math.random() - 0.5)
  return deck
}

function get_my_cards(cardsString){
  var my_cards=[];
  my_cards.push(cardsString[0] + cardsString[1]);
  my_cards.push(cardsString[2] + cardsString[3]);
  return my_cards
}

function get_op_cards(cardsString){
  var op_cards=[];
  op_cards.push(cardsString[4] + cardsString[5]);
  op_cards.push(cardsString[6] + cardsString[7]);
  return op_cards
}

function process_request(url) {
  // example url '/As2hTdTc/100'
  var cards = url.split('/')[1]
  var samples = parseInt(url.split('/')[2])
  var my_cards = get_my_cards(cards)
  var op_cards = get_op_cards(cards)
  console.log("cards: " + cards)
  console.log("samples: " + samples)
  console.log("my_cards: " + my_cards)
  console.log("op_cards: " + op_cards)
  var data = {
    my_cards: my_cards,
    op_cards: op_cards,
    records: []
  }
  
  // running samples and fill a data object to return
  var wins = 0
  var loses = 0
  var draws = 0
  for (var i=0 ; i<samples ; i++ ){
    var deck = get_deck()
    console.log("deck: " + deck)
    deck.pop(data.my_cards[0])
    deck.pop(data.my_cards[1])
    deck.pop(data.op_cards[0])
    deck.pop(data.op_cards[1])
    var my_temp_hand = [ my_cards[0], my_cards[1], deck[0], deck[1], deck[2], deck[3], deck[4] ]
    var op_temp_hand = [ op_cards[0], op_cards[1], deck[0], deck[1], deck[2], deck[3], deck[4] ]
    var my_temp_rank = PokerEvaluator.evalHand(my_temp_hand) 
    var op_temp_rank = PokerEvaluator.evalHand(op_temp_hand) 
    var temp_result = 0
    if (my_temp_rank.value > op_temp_rank.value) {
      temp_result = 1;
      wins ++;
    } else if (my_temp_rank.value < op_temp_rank.value) {
      temp_result = -1;
      loses ++;
    } else {
      draws ++;
    }
    var record = {
      board: deck[0] + deck[1] + deck[2] + deck[3] + deck[4], 
      my_rank: my_temp_rank.handName,
      op_rank: op_temp_rank.handName,
      result: temp_result
    }
    data.records.push(record)
  }
  data.win_percent   = 100 * (wins/samples)
  data.lost_percent  = 100 * (loses/samples)
  data.draws_percent = 100 * (draws/samples)
  return data
}

const requestHandler = (request, response) => {
  var url = request.url;
  console.log("received url: " + url);
  var results = process_request(url)
  console.log("results: " + results);
  console.log(results);
  response.end(JSON.stringify(results));
}

// start ranker server
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`ranking server is listening on ${port}`)
})

