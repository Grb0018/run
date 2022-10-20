
var vw = screen.availWidth/100;
var block = ['./block/run3A.png','./block/run3B.png','./block/run3C.png','./block/run3D.png','./block/run3E.png']
var getblock = block[Math.floor(Math.random() * 5)]
var moveani = true;

var run;
var runchk = 0;
document.addEventListener('keydown',(e)=>{
if(e.key ==='ArrowRight'){  
    if(runchk ==0){
        if(parseInt($('#character').css('left'))>6*vw){
            setTimeout(()=>{
                $('#character').animate({left:'4vw'},500);
            },1000)
        }
        runchk++;
         run = setInterval(()=>{
            if(moveani == true){moveall()}
            },20) 
    }
  
}
})
var jump = 0;
document.getElementById('up').onclick=(e)=>{
    if(jump==0){
        coinchk();
     jump++;
    setTimeout(()=>{$('#character').css({left:'7vw',});
},650)   
    document.getElementById('character').style = 'animation:down 1000ms ease-in';
    setTimeout(function(){$('#character').css({animation:'none'});
    $('#character').css({
        'background-image': 'url("./img file/f1.png")'
    })
    jump=0
},700)
    }
}
document.body.ontouchstart=()=>{
    if(runchk ==0){
        if(parseInt($('#character').css('left'))>6*vw){
            setTimeout(()=>{
                $('#character').animate({left:'4vw'},500);
            },1000)
        }
        runchk++;
         run = setInterval(()=>{
            if(moveani == true){moveall()}
            },20) 
    }
}
document.addEventListener('keyup',(e)=>{
    if(e.code === "Space"){
        if(jump==0){
            coinchk();
         jump++;
        setTimeout(()=>{$('#character').css({left:'7vw',});
    },650)   
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
  touchchk = setInterval(()=>{
    cleft = parseInt($('#character').css('left')) + parseInt($('#character').css('width'))
    var allblock = document.getElementsByClassName('block');
    for (const x of allblock) {
       var iteml = parseInt($(x).css('left')) + parseInt($('#runway').css('translate'));
       var characterl = parseInt($('#character').css('left')) + parseInt($('#character').css('width'));
       var itemh = parseInt($(a[0]).css('bottom')) +  parseInt($(a[0]).css('height'));
       var characterh = parseInt($('#character').css('translate').slice(4))
        if(characterl > iteml+58 && iteml> (vw/3.07)){
       if( -(vw*7.5) < characterh || isNaN(parseInt($('#character').css('translate').slice(4)))==true){
               console.log('a')
                $('body').css('filter','hue-rotate(-60deg)')
                setTimeout(()=>{$('body').css('filter','unset')},600)
            }
        }
    }
  },100)
}

touch()




/////////////  moving items /////////////////////////
function moveall(){
    moveani= false;
    $('#character').css({
        'background-image': 'url("./img file/run.gif")'
    })

    var lefty = parseInt($('#idcloud').css('translate')) - 0.1*vw
    $('#idcloud').css({
        left: lefty +'px 0px'
    })
 

var leftybg = parseInt($('#idbg').css('translate')) - 0.25*vw
$('#idbg').css({
    left: leftybg +'px 0px'
})
 

var leftyrun = parseInt($('#runway').css('translate')) - 0.55*vw
$('#runway').css({
    translate: leftyrun +'px 0px'
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
            var coinLeft = parseInt($(x).css('left')) + parseInt($('#runway').css('translate'));
            var coinWidth = parseInt($(x).css('left')) + parseInt($('#runway').css('translate')) +  parseInt($(x).css('width'))
            var characterLeft = parseInt($('#character').css('translate')) + parseInt($('#character').css('width')) - 1.87*vw;
            var characterTop = parseInt($('#character').css('translate').slice(4))
            if(characterLeft>coinLeft && characterLeft<coinWidth){
              if((vw*4.883)>characterTop<(vw*10.48)){
                if($(x).attr('type') != 'no'){
                    $(x).attr('type','no')
                    $(x).animate({
                        bottom:'20vw',
                        width:'5.5vw',
                    },700)
                    setTimeout(()=>{
                        $(x).remove();
                    },700)
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
