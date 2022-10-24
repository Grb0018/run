<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="./index.js" defer></script>
    <script src="./jquery-3.5.1.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap" rel="stylesheet">
    <title>Escape Part 1</title>
</head>
<body>

    <div id="start" >ESCAPE <br><p style="font-size:2vw;    position: relative;
        transform: translate(10px, -10vw);">(Part 1)</p> <button id="ok">Play Now</button></div>
    <div id="screen"></div>
    <audio src="./img file/bgs.mp3" id="bgs" loop></audio>
    <audio src="./img file/bgs1.mp3" id="bgs1" loop></audio>
    <audio src="./img file/coin.mp3" id="coinSound"></audio>
    <audio src="./img file/loss.mp3" id="lose"></audio>
    <audio src="./img file/gameOver.mp3" id="over"></audio>
    <main id="gamediv">
        <div id="lifeline">
            <img src="./img file/life.png" alt="" srcset="">
            <img src="./img file/life.png" alt="" srcset="">
            <img src="./img file/life.png" alt="" srcset="">
        </div>
        <text id="up">Jump</text>
        <div id="character"></div>
        <div id="idcloud">
            <img src="./img/run2a.webp" class="cloud"><img src="./img/run2a.webp" class="cloud1"><img src="./img/run2a.webp" class="cloud"><img src="./img/run2a.webp" class="cloud1"><img src="./img/run2a.webp" class="cloud"><img src="./img/run2a.webp" class="cloud1"><img src="./img/run2a.webp" class="cloud"><img src="./img/run2a.webp" class="cloud1">
        </div>
      
         <div id="idbg">
            <img src="./img/run2b.webp" id="bg"><img src="./img/run2b.webp" id="bg1"><img src="./img/run2b.webp" id="bg"><img src="./img/run2b.webp" id="bg1"><img src="./img/run2b.webp" id="bg"><img src="./img/run2b.webp" id="bg1"><img src="./img/run2b.webp" id="bg"><img src="./img/run2b.webp" id="bg1">
        </div>
        <img src="./img/coin.webp" id="score"><text id="scoreN">0</text>
        <div id="runway">
            <a style="left:0vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/coin.webp" id="coin" style='left: 42vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 45vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 48vw;' class="coin">
                <img src="./block/run3A.webp" id="cacblock1" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img/run2e.webp" id="fog">
            </a>
            <a style="left:100vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./block/run3C.webp" id="cacblock3" class="block" style="filter: drop-shadow(2px 4px 6px #fff);" >
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/run2e.webp" id="fog">
                <img src="./block/run3C.webp" id="cacblock2" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img/coin.webp" id="coin" style='left: 185vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 188vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left:191vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 194vw;' class="coin">
            </a>
            <a style="left:200vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/run2e.webp" id="fog">
                <img src="./block/run3C.webp" id="cacblock3" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
            </a>
            <a style="left:300vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/coin.webp" id="coin" style='left: 305vw;' class="coin">
                <img src="./img/run2e.webp" id="fog">
                <img src="./block/run3A.webp" id="cacblock4" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img file/bird.gif" id="bird">
            </a>
            <a style="left:400vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./block/run3A.webp" id="cacblock5" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img/run2e.webp" id="fog">
            </a>
            <a style="left:500vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/coin.webp" id="coin" style='left: 545vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 548vw;' class="coin">
                <img src="./img/run2e.webp" id="fog">
            </a>
            <a style="left:600vw">
                <img src="./img/run2c.webp" id="g"><img src="./img/coin.webp" id="coin" style='left: 630vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 618vw;' class="coin">
                <img src="./img/run2d.webp" id="cac">
                <img src="./block/run3C.webp" id="cacblock6" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img/run2e.webp" id="fog">
            </a>
            <a style="left:700vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./block/run3C.webp" id="cacblock7" class="block" style="filter: drop-shadow(2px 4px 6px #fff);">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/coin.webp" id="coin" style='left: 745vw;' class="coin">
                <img src="./img/coin.webp" id="coin" style='left: 708vw;' class="coin">
                <img src="./img/run2e.webp" id="fog">
            </a>
            <a style="left:800vw">
                <img src="./img/run2c.webp" id="g">
                <img src="./img/run2d.webp" id="cac">
                <img src="./img/run2e.webp" id="fog">
                <img src="./img/cave1.webp" id="cave1">
                <img src="./img/cave2.webp" id="cave2">
            </a>
        </div>
         


    </main>
</body>
</html>
