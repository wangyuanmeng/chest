/**
 * Created by wangyuanmeng on 2018-02-01.
 */
var chest=document.getElementById("chest");
var context=chest.getContext("2d");
context.strokeStyle="#898989";
var img_01=new Image();
img_01.src="../images/水印01.png";
img_01.onload=function(){
    context.drawImage(img_01,0,0,450,450);
    drawChessBoard();
    var me=true;
    var chessBoard=[];
    for(i=0;i<15;i++){
        chessBoard[i]=[];
        for(j=0;j<15;j++){
            chessBoard[i][j]=0;
        }
    }
    onestep(0,0,true);
    onestep(1,1,false);
    chest.onclick=function(e){
        var x=e.offsetX;
        var y=e.offsetY;
        var i=Math.floor(x/30);
        var j=Math.floor(y/30);
        if (chessBoard[i][j]==0){
            onestep(i,j,me);
            if(me){
                chessBoard[i][j]=1;
            }
            else{
                chessBoard[i][j]=2;
            }
            me=!me;
        }
    }
}

onestep=function (i,j,me) {
    context.beginPath();
    context.arc(i*30+15,j*30+15,13,0,2*Math.PI);
    var gradient=context.createRadialGradient(i*30+15+2,j*30+15-2,13,i*30+15,j*30+15,0);
    if(me==true){
        gradient.addColorStop(0,"#0A0A0A");
        gradient.addColorStop(1,"#636766");
    }
    else{
        gradient.addColorStop(0,"#D1D1D1");
        gradient.addColorStop(1,"#F9F9F9");
    }
    me=!me;
    context.fillStyle=gradient;
    context.fill();
    context.closePath();
}

drawChessBoard=function(){
    for(var i=0;i<=15;i++){
        context.moveTo(15+30*i,15);
        context.lineTo(15+30*i,435);
        context.moveTo(15,15+30*i);
        context.lineTo(435,15+30*i);
        context.stroke();
    }
}



