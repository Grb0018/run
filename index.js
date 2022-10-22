
var vw = window.innerWidth/100;
var block = ['./block/run3A.png','./block/run3B.png','./block/run3C.png','./block/run3D.png','./block/run3E.png']
var getblock = block[Math.floor(Math.random() * 5)]
var moveani = true;
var jumop = true;
var run;
var runchk = 0;

function move(){  
    if(runchk ==0){
        if(parseInt($('#character').css('left'))>6*vw){
            setTimeout(()=>{
                $('#character').animate({left:'4vw'},500);
            },1000)
        }
        runchk++;
         run = setInterval(()=>{
            if(moveani == true&& -(810.48*vw)<parseInt($('#runway').css('transform').split(',')[4])){moveall()}
            else if(parseInt($('#character').css('transform').split(',')[4])>(53.6*vw)){
                clearInterval('run')
                $('#character').fadeOut(150)
                
            }
            else{moveani=false;jumop=false
                var chl = parseInt($('#character').css('transform').split(',')[4])
                $('#character').css('background-image','url(./img/run.gif)')
                chl=chl+(0.5*vw)
                $('#character').css('transform','translate('+chl+'px, 0px)')}
            },20) 
    }
}

var jump = 0;
document.getElementById('up').onclick=(e)=>{
    if(jump==0 && jumop==true){
        document.getElementById('character').style = 'animation:down 1000ms ease-in';
        coinchk();
     jump++;
     setTimeout(()=>{$('#character').css({left:'7vw',});
    },980) 
    
    setTimeout(function(){$('#character').css({animation:'none'});
    $('#character').css({
        'background-image': 'url("./img file/f1.png")'
    })
    jump=0
},700)
    }
}
document.body.ontouchstart=()=>{
         run = setInterval(()=>{
            move()
            touch()
            },0) 
            document.getElementById('bgs').volume='0.8' ;
            document.getElementById('bgs').volume='0.4'
            document.getElementById('bgs').play()
            document.getElementById('bgs1').play()
            document.getElementById('coinSound').play()
            document.getElementById('coinSound').pause()
            document.getElementById('lose').play()
            document.getElementById('lose').pause()
}
document.body.onclick=()=>{
    run = setInterval(()=>{
       move()
       touch()
       },0) 
       document.getElementById('bgs').volume='0.8' ;
       document.getElementById('bgs').volume='0.4'
       document.getElementById('bgs').play()
       document.getElementById('bgs1').play()
       document.getElementById('coinSound').play()
       document.getElementById('coinSound').pause()
       document.getElementById('lose').play()
       document.getElementById('lose').pause()
}

document.addEventListener('keyup',(e)=>{
    if(e.code === "Space"){
        if(jump==0&& jumop==true){
            coinchk();
         jump++;
        
         setTimeout(()=>{$('#character').css({left:'7vw',});
    },700)
        document.getElementById('character').style = 'animation:down 1000ms ease-in';
        setTimeout(function(){$('#character').css({animation:'none'});
        $('#character').css({
            'background-image': 'url("./img file/f1.png")'
        })
        jump=0
    },700)
        }
    }
    if(e.key ==='ArrowRight'){ 
        clearInterval(run);
        runchk=0;
        $('#character').css({
            'background-image': 'url("./img file/f1.png")'
        })
    }

})
var touchchk;
function touch(){
    cleft = parseInt($('#character').css('left')) + parseInt($('#character').css('width'))
    var allblock = document.getElementsByClassName('block');
    for (const x of allblock) {
       var iteml = parseInt($(x).css('left')) + parseInt($('#runway').css('transform').split(',')[4]);
       var characterl = parseInt($('#character').css('left')) + parseInt($('#character').css('width'))-(2*vw)
       var itemh = parseInt($(a[0]).css('bottom')) +  parseInt($(a[0]).css('height'));
       var characterh = parseInt($('#character').css('transform').split(',')[5])
        if(characterl > iteml+(vw*3.78) && iteml> (vw/3.07)){
       if( -(vw*9) < characterh || parseInt($('#character').css('transform').split(',')[5])==0){
        if($(x).attr('no')!=='true'){
            crash()
            $(x).attr('no','true')
           //document.body.style.backgroundColor= 'red'
            
            setTimeout(()=>{
                document.getElementById('bgs').volume='0.6'
            document.getElementById('bgs1').volume='1';
          //  document.body.style.backgroundColor= 'white'
            },800)
        }
            }
        }
    }

}






/////////////  moving items /////////////////////////
function moveall(){
    moveani= false;
    $('#character').css({
        'background-image': 'url("./img file/run.gif")'
    })

    var lefty = parseInt($('#idcloud').css('-webkit-transform').split(',')[4]) - 0.1*vw
    $('#idcloud').css({
        '-webkit-transform': 'translate(' + lefty +'px, 0px)'
    })
 

var leftybg = parseInt($('#idbg').css('-webkit-transform').split(',')[4]) - 0.25*vw
$('#idbg').css({
    '-webkit-transform': 'translate(' + leftybg +'px, 0px)'
})


var leftyrun = parseInt($('#runway').css('-webkit-transform').split(',')[4]) - 0.55*vw
$('#runway').css({
    '-webkit-transform': 'translate(' +leftyrun +'px, 0px)'
})
setTimeout(()=>{moveani=true})
}

var a = document.getElementsByClassName('block')
$(a[0].parentElement).css('left')

///////////// coin check///////////////
function coinchk(){
    var startCoinChk = setInterval(()=>{
        var allblock = document.getElementsByClassName('coin');
        for (const x of allblock) {
            var coinLeft = parseInt($(x).css('left')) + parseInt($('#runway').css('transform').split(',')[4]);
            var coinWidth = parseInt($(x).css('left')) + parseInt($('#runway').css('transform').split(',')[4]) +  parseInt($(x).css('width'))
            var characterLeft = parseInt($('#character').css('transform').split(',')[4]) + parseInt($('#character').css('width')) + 30 
            var characterTop = parseInt($('#character').css('transform').split(',')[5])
            if(characterLeft+(1.5*vw)>coinLeft && characterLeft<coinWidth+(1.5*vw)){
              if((vw*4.883)>characterTop && characterTop<(vw*10.48)){
                if($(x).attr('type') != 'no'){
                    $(x).attr('type','no')
                    $(x).css({
                        transform:'translate(40vw, -20vw)',
                        width:'8.5vw',
                    })
                    document.getElementById('coinSound').currentTime = 0;
                    document.getElementById('coinSound').play()
                    setTimeout(()=>{
                        $(x).remove();
                    },300)
                    var score = parseInt($('#scoreN').text())
                    score  = score + 1
                    $('#scoreN').text(score++)
                }
              }
            }
            
        }
    },200)
    setTimeout(()=>{clearInterval(startCoinChk)},800)
    
}
setInterval(()=>{
    $('#score').css({
        filter: 'brightness(1)',
        transform: 'scale(1)'
    })
    $('#score').animate({
        filter: 'brightness(1.3)',
        transform: 'scale(1.1)'
    },3000)
},3000)

function crash(){
    var a = document.getElementById('lifeline').children

    if($(a[a.length-1]).css('filter')=='grayscale(1)'){
     if($(a[a.length-2]).css('filter')=='grayscale(1)'){
        if($(a[a.length-3]).css('filter')=='grayscale(1)'){
            alert('Game Over')
        }else{
            $(a[a.length-3]).css('filter','grayscale(1)')
        }
     }else{
        $(a[a.length-2]).css('filter','grayscale(1)')
     }
    }else{
        $(a[a.length-1]).css('filter','grayscale(1)')
    }
            document.getElementById('lose').currentTime = '0'
            document.getElementById('lose').play()
            document.getElementById('bgs').volume='0.3'
            document.getElementById('bgs1').volume='0.3'
}
