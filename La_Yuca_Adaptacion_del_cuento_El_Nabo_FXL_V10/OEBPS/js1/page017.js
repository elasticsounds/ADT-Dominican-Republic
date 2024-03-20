function playaudio(myid1,myid2,color1,color2)
{
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        //if(audios[i] != e.target){
        audios[i].pause();
        //}
    }
    document.getElementById('a1').style.color="black";
    document.getElementById('a1a').style.color="black";
    document.getElementById('a2').style.color="black";
    document.getElementById('a2a').style.color="black";
    document.getElementById('a3').style.color="black";
    document.getElementById('a3a').style.color="black";
    document.getElementById('a4').style.color="black";
    document.getElementById('a4a').style.color="black";
    document.getElementById('a5').style.color="black";
    document.getElementById('a5a').style.color="black";
    document.getElementById('a6').style.color="black";
    document.getElementById('a6a').style.color="black";
    document.getElementById('a7').style.color="black";
    document.getElementById('a7a').style.color="black";
    document.getElementById('a8').style.color="black";
    document.getElementById('a8a').style.color="black";
    document.getElementById('a9').style.color="black";
    document.getElementById('a9a').style.color="black";
    document.getElementById(myid1).play();
    document.getElementById(color1).style.backgroundColor="#7800FF";
    document.getElementById(color1).style.color="#FFFFFF";
    document.getElementById(myid1).onended = function() {
        document.getElementById(myid2).play();
        document.getElementById(color2).style.backgroundColor="#7800FF";
        document.getElementById(color2).style.color="#FFFFFF";
        document.getElementById(color1).style.color="black";
        document.getElementById(color1).style.backgroundColor="";
    };
    document.getElementById(myid2).onended = function() {
        document.getElementById(color2).style.color="black";
        document.getElementById(color2).style.backgroundColor="";
    };

    switchContainer('sl_' + color1)
}
function playvideo1()
{
    document.getElementById('video1a').style.display="block";
    document.getElementById('video1').play();
    document.getElementById('video1').onended = function() {
        document.getElementById('video1a').style.display="none";
    };
}
function playvideo2()
{
    document.getElementById('video2a').style.display="block";
    document.getElementById('video2').play();
    document.getElementById('video2').onended = function() {
        document.getElementById('video2a').style.display="none";
    };
}
function playvideo3()
{
    document.getElementById('video3a').style.display="block";
    document.getElementById('video3').play();
    document.getElementById('video3').onended = function() {
        document.getElementById('video3a').style.display="none";
    };
}
function playvideo4()
{
    document.getElementById('video4a').style.display="block";
    document.getElementById('video4').play();
    document.getElementById('video4').onended = function() {
        document.getElementById('video4a').style.display="none";
    };
}
function playvideo5()
{
    document.getElementById('video5a').style.display="block";
    document.getElementById('video5').play();
    document.getElementById('video5').onended = function() {
        document.getElementById('video5a').style.display="none";
    };
}
function playvideo6()
{
    document.getElementById('video6a').style.display="block";
    document.getElementById('video6').play();
    document.getElementById('video6').onended = function() {
        document.getElementById('video6a').style.display="none";
    };
}
function playvideo7()
{
    document.getElementById('video7a').style.display="block";
    document.getElementById('video7').play();
    document.getElementById('video7').onended = function() {
        document.getElementById('video7a').style.display="none";
    };
}
function playvideo8()
{
    document.getElementById('video8a').style.display="block";
    document.getElementById('video8').play();
    document.getElementById('video8').onended = function() {
        document.getElementById('video8a').style.display="none";

    };
}
function playvideo9()
{
    document.getElementById('video9a').style.display="block";
    document.getElementById('video9').play();
    document.getElementById('video9').onended = function() {
        document.getElementById('video9a').style.display="none";
    };
}


function closevideo(myid1, myid2)
{
	document.getElementById(myid1).play();
	document.getElementById(myid2).style.display="none";
}