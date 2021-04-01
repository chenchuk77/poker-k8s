<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello World</title>
</head>
  <script src="pixi/pixi.min.js"></script>
<body>

  <div id="header">
    This is the header div
    <hr />
  </div>

  <div id="pixi_canvas">
    <script src="pixi/config.js"></script> 
    <script src="pixi/main.js"></script>
  </div>

 <div id="input">
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
      <table>
        <tr>
           <td>Cards:</td>
           <td><input type="text" name="cards_string" value="AdKdQcQs"></td>
        </tr>
        <tr>
           <td>Samples:</td>
           <td><input type="text" name="samples" value="100"></td>
        </tr>
      </table>
      <input type="submit" value="check equity">
    </form>
  </div>

  <div id="output">
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $cards_string = $_POST['cards_string'];
        $samples      = $_POST['samples'];

        // send request to ranker service
        $ranker_endpoint = $_SERVER["RANKER_ADDRESS"] . ":" . $_SERVER["RANKER_PORT"];
        $url = "http://$ranker_endpoint/$cards_string/$samples"; 
        echo("<script>console.log('PHP: will send internal request to: " . $url . "');</script>");
        $data = file_get_contents($url);
        $json = json_decode($data);
      
        // for debug, output to client js console
        echo("<script>console.log('PHP: " . $data . "');</script>");
        $my_cards=$json->my_cards[0] . $json->my_cards[1];
        $op_cards=$json->op_cards[0] . $json->op_cards[1];
        $win_percent=$json->win_percent;
        $draws_percent=$json->draws_percent;

        // dynamic result div
        echo('<div id="php_data">');
        echo("$my_cards wins vs $op_cards about $win_percent% over $samples samples.");
        echo('</div>');
      }
    ?>
  </div>

  <div id="php_server_info">
    <?php 
      $server_id      = $_SERVER['HOSTNAME'];
      $server_version = $_SERVER['SERVER_SOFTWARE'];
      echo "<p>PHP hosted on $server_version/$server_id</p>"; 
    ?> 
  <div>

 


</body>
</html>

