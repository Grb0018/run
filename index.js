*{
    padding:0;
    margin:0;
    image-rendering: -webkit-optimize-contrast;
}
body{
    display: flex;
    position: relative;
    width:100%;
    height: 100%;
    margin:auto 0;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
}
#gamediv{
    width: 80vw;
    height: 44vw;
    background-color: black;
    display: flex;
    position: absolute;
    overflow: hidden;
    margin: 0 10vw;
}
#idcloud{
    position: absolute;
    left: 0;
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: chocolate;
    z-index: 1;
    -webkit-transform :translate(0vw, 0vw)
}
#cloud1,#cloud{
    width: 100vw;
    bottom: 0;
}

#idbg{
    position: absolute;
    width: max-content;
    display: flex;
    flex-direction: row;
    z-index: 2;
    bottom: 2vw;
    -webkit-transform :translate(0vw, 0vw)
}
#runway{
    position: absolute;
    width: max-content;
    display: flex;
    flex-direction: row;
    bottom: -1vw;
    z-index: 3;
    -webkit-transform :translate(0vw, 0vw)
}
#runway a{
    width: 100vw;
}
#bg1{
    width: 100vw;
    bottom: 0;
}
#bg{
    width: 100vw;
    bottom: 0;
}
#g1{
    position: absolute;
    z-index: 2;
    bottom: 0vw;
    width: 101vw;
    bottom: 0;
}
#g{
    position: absolute;
    z-index: 2;
    bottom: 0vw;
    width: 101vw;

}
#cac1{
    position: absolute;
    z-index: 2;
    bottom: 8vw;
    width: 100vw;

}
#cac{
    position: absolute;
    z-index: 2;
    bottom: 8vw;
    width: 100vw;

}
#fog1{
    position: absolute;
    width:102vw;
    z-index: 3;
    bottom: 9vw;
    width: 100vw;

}
#fog{
    position: absolute;
    width:102vw;
    z-index: 3;
    bottom: 9vw;
    width: 100vw;
}

#cacblock1{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 73vw;
}

#cacblock3{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 178vw;
}
#cacblock2{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 108vw;
}
#cacblock4{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 328vw;
}
#cacblock5{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 408vw;
}
#cacblock6{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 658vw;
}
#cacblock7{
    position: absolute;
    z-index: 5;
    bottom: 5.5vw;
    width: 10vw;
    left: 778vw;
}
#character{
    position: absolute;
    bottom: 5.5vw;
    width: 6vw;
    height: 8vw;
    z-index: 5;
    left: 20px;
    background-image: url('./img file/f1.png');
    background-size: 100% 100%;
    -webkit-transform :translate(0vw, 0vw)
}

@keyframes down{
    0%{ -webkit-transform :translate(0vw, -0.5vw);left:4vw;background-image: url(./img/jump/f1.png)}
    1%{ -webkit-transform :translate(0vw, -1vw);left:4vw;background-image: url(./img/jump/f3.png)}
    35%{-webkit-transform :translate(0vw, -13vw);left:5vw;background-image: url(./img/jump/f3.png)}
    58%{-webkit-transform :translate(0vw,-9vw);left:5.6vw;background-image: url(./img/jump/f3.png)}
    72%{-webkit-transform :translate(0vw, -2.2vw);left:6.2vw;background-image: url(./img/jump/f4.png)}
    100%{-webkit-transform :translate(0vw, -0.5vw);left:7vw;background-image: url(./img/run.gif)}
}
@keyframes rot{
    00%{transform: rotateY(70deg)}
    50%{transform: rotateY(0deg)}
100%{transform: rotateY(-70deg)}
}
.coin{
    position: absolute;
    z-index: 2;
    bottom: 17vw;
    width: 3.5vw;
    animation: rot 2500ms linear infinite;
    box-shadow: 0px 2vw 7vw 4px #ffe500;
}
#score{
    position: absolute;
    z-index: 1;
    width: 4vw;
    left: 4vw;
    top: 2.55vw;
    animation: glow 3000ms infinite;
}
#scoreN{
    position: absolute;
    z-index: 1;
    width: 6vw;
    left: 9.5vw;
    font-family: system-ui;
    top: 1.6vw;
    font-size: 3.5vw;
    color: gold;
}
@keyframes glow{
    0%{filter: brightness(1);transform: scale(1);}
    50%{filter: brightness(1.3);transform: scale(1.1)}
    100%{filter: brightness(1);transform: scale(1)}
}
@keyframes bird{
    0%{transform: translate(0vw, -0vw) rotateY(0deg); }
    49%{transform: translate(100vw, -0vw) rotateY(0deg);}
    50%{transform: translate(100vw, -0vw) rotateY(180deg); }
    99%{transform: translate(0vw, 0vw) rotateY(180deg); }
    100%{transform: translate(0vw, 0vw)rotateY(0deg); }
}
#bird{
    position: relative;
    z-index: 3;
    width: 5vw;
    top: -8vw;
    left: 0vw;
    animation: bird 10000ms linear infinite;
}
@keyframes opps{
    0%{    filter: hue-rotate(0deg);}
    100%{    filter: hue-rotate(-60deg);}
}
#up{
    position: absolute;
    width: 5vw;
    left: 0.2vw;
    top: 10vw;
    box-shadow: 0px 2px 20px 2px #6a5a5a;
    padding: 0.5vw;
    z-index: 10;
    border-radius: 5vw;
    border-bottom-left-radius: 0px;
}
#lifeline{
    display: flex;
    position: absolute;
    z-index: 10;
    right: 5vw;
    top: 2vw;
    width: 8vw;
    padding: 0.3vw 1.5vw;
    border: 0.35vw solid #dfdfdf;
    border-radius: 5vw;
    justify-content: space-around;
}
#lifeline img{
    width: 1.6vw;
    height: 1.6vw;
}
