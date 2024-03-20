var currnumber=0;
var answer_success=false;
var playhighlight=false;
function openactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page3').style.display="none";
	document.getElementById('Page4').style.display="none";
    document.getElementById('Page4a').style.display="none";
	document.getElementById('Page2').style.display="block";
	
	document.getElementById('act1_option1').style.border="0em solid black";
	document.getElementById('act1_option2').style.border="0em solid black";
	document.getElementById('act1_option3').style.border="0em solid black";
    document.getElementById('act1_option4').style.border="0em solid black";
    document.getElementById('act1_option5').style.border="0em solid black";
    document.getElementById('act1_option6').style.border="0em solid black";
    
	document.getElementById('act2_option1').style.border="0em solid black";
	document.getElementById('act2_option2').style.border="0em solid black";
	document.getElementById('act2_option3').style.border="0em solid black";
    document.getElementById('act2_option4').style.border="0em solid black";
    document.getElementById('act2_option5').style.border="0em solid black";
    document.getElementById('act2_option6').style.border="0em solid black";

    document.getElementById('act3_option1').style.border="0em solid black";
	document.getElementById('act3_option2').style.border="0em solid black";
	document.getElementById('act3_option3').style.border="0em solid black";
    document.getElementById('act3_option4').style.border="0em solid black";
    document.getElementById('act3_option5').style.border="0em solid black";
    document.getElementById('act3_option6').style.border="0em solid black";

    document.getElementById('act3a_option1').style.border="0em solid black";
    document.getElementById('act3a_option2').style.border="0em solid black";
    document.getElementById('act3a_option3').style.border="0em solid black";
    document.getElementById('act3a_option4').style.border="0em solid black";
    document.getElementById('act3a_option5').style.border="0em solid black";
    document.getElementById('act3a_option6').style.border="0em solid black";

	document.getElementById('act1_head1').style.display="block";
	document.getElementById('act1_head2').style.display="block";
	document.getElementById('act1_head3').style.display="block";
    document.getElementById('act1_head3a').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	/*document.getElementById("Slide2-5").play();
	document.getElementById("heading1").style.color="white";
    document.getElementById("heading1").style.backgroundColor="#5626E0";
	document.getElementById("Slide2-5").onended = function() 
	{
        document.getElementById("heading1").style.backgroundColor="";
		document.getElementById("heading1").style.color="black";
	};*/
	playhighlight=true;
	highlighttext();
}

function exitactivity()
{
	document.getElementById('Page1').style.display="block";
	document.getElementById('Page3').style.display="none";
	document.getElementById('Page4').style.display="none";
    document.getElementById('Page4a').style.display="none";
	document.getElementById('Page2').style.display="none";
	
	document.getElementById('act1_option1').style.border="0em solid black";
	document.getElementById('act1_option2').style.border="0em solid black";
	document.getElementById('act1_option3').style.border="0em solid black";
    document.getElementById('act1_option4').style.border="0em solid black";
    document.getElementById('act1_option5').style.border="0em solid black";
    document.getElementById('act1_option6').style.border="0em solid black";

	document.getElementById('act2_option1').style.border="0em solid black";
	document.getElementById('act2_option2').style.border="0em solid black";
	document.getElementById('act2_option3').style.border="0em solid black";
    document.getElementById('act2_option4').style.border="0em solid black";
    document.getElementById('act2_option5').style.border="0em solid black";
    document.getElementById('act2_option6').style.border="0em solid black";

	document.getElementById('act3_option1').style.border="0em solid black";
	document.getElementById('act3_option2').style.border="0em solid black";
	document.getElementById('act3_option3').style.border="0em solid black";
    document.getElementById('act3_option4').style.border="0em solid black";
    document.getElementById('act3_option5').style.border="0em solid black";
    document.getElementById('act3_option6').style.border="0em solid black";

    document.getElementById('act3a_option1').style.border="0em solid black";
    document.getElementById('act3a_option2').style.border="0em solid black";
    document.getElementById('act3a_option3').style.border="0em solid black";
    document.getElementById('act3a_option4').style.border="0em solid black";
    document.getElementById('act3a_option5').style.border="0em solid black";
    document.getElementById('act3a_option6').style.border="0em solid black";

    document.getElementById('act1_option1').style.backgroundColor="";
    document.getElementById('act1_option2').style.backgroundColor="";
    document.getElementById('act1_option3').style.backgroundColor="";
    document.getElementById('act1_option4').style.backgroundColor="";
    document.getElementById('act1_option5').style.backgroundColor="";
    document.getElementById('act1_option6').style.backgroundColor="";
    
    document.getElementById('act2_option1').style.backgroundColor="";
    document.getElementById('act2_option2').style.backgroundColor="";
    document.getElementById('act2_option3').style.backgroundColor="";
    document.getElementById('act2_option4').style.backgroundColor="";
    document.getElementById('act2_option5').style.backgroundColor="";
    document.getElementById('act2_option6').style.backgroundColor="";

    document.getElementById('act3_option1').style.backgroundColor="";
    document.getElementById('act3_option2').style.backgroundColor="";
    document.getElementById('act3_option3').style.backgroundColor="";
    document.getElementById('act3_option4').style.backgroundColor="";
    document.getElementById('act3_option5').style.backgroundColor="";
    document.getElementById('act3_option6').style.backgroundColor="";

    document.getElementById('act3a_option1').style.backgroundColor="";
    document.getElementById('act3a_option2').style.backgroundColor="";
    document.getElementById('act3a_option3').style.backgroundColor="";
    document.getElementById('act3a_option4').style.backgroundColor="";
    document.getElementById('act3a_option5').style.backgroundColor="";
    document.getElementById('act3a_option6').style.backgroundColor="";
	
	document.getElementById('act1_head1').style.display="block";
	document.getElementById('act1_head2').style.display="block";
	document.getElementById('act1_head3').style.display="block";
    document.getElementById('act1_head3a').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
		
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	playhighlight=false;
//	highlighttext();
	
}

function restartactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page3').style.display="none";
	document.getElementById('Page4').style.display="none";
    document.getElementById('Page4a').style.display="none";
	document.getElementById('Page2').style.display="block";
	
	document.getElementById('act1_option1').style.border="0em solid black";
	document.getElementById('act1_option2').style.border="0em solid black";
	document.getElementById('act1_option3').style.border="0em solid black";
    document.getElementById('act1_option4').style.border="0em solid black";
    document.getElementById('act1_option5').style.border="0em solid black";
    document.getElementById('act1_option6').style.border="0em solid black";
    
	document.getElementById('act2_option1').style.border="0em solid black";
	document.getElementById('act2_option2').style.border="0em solid black";
	document.getElementById('act2_option3').style.border="0em solid black";
    document.getElementById('act2_option4').style.border="0em solid black";
    document.getElementById('act2_option5').style.border="0em solid black";
    document.getElementById('act2_option6').style.border="0em solid black";
    
	document.getElementById('act3_option1').style.border="0em solid black";
	document.getElementById('act3_option2').style.border="0em solid black";
	document.getElementById('act3_option3').style.border="0em solid black";
    document.getElementById('act3_option4').style.border="0em solid black";
    document.getElementById('act3_option5').style.border="0em solid black";
    document.getElementById('act3_option6').style.border="0em solid black";

    document.getElementById('act3a_option1').style.border="0em solid black";
    document.getElementById('act3a_option2').style.border="0em solid black";
    document.getElementById('act3a_option3').style.border="0em solid black";
    document.getElementById('act3a_option4').style.border="0em solid black";
    document.getElementById('act3a_option5').style.border="0em solid black";
    document.getElementById('act3a_option6').style.border="0em solid black";

    document.getElementById('act1_option1').style.backgroundColor="";
    document.getElementById('act1_option2').style.backgroundColor="";
    document.getElementById('act1_option3').style.backgroundColor="";
    document.getElementById('act1_option4').style.backgroundColor="";
    document.getElementById('act1_option5').style.backgroundColor="";
    document.getElementById('act1_option6').style.backgroundColor="";
    
    document.getElementById('act2_option1').style.backgroundColor="";
    document.getElementById('act2_option2').style.backgroundColor="";
    document.getElementById('act2_option3').style.backgroundColor="";
    document.getElementById('act2_option4').style.backgroundColor="";
    document.getElementById('act2_option5').style.backgroundColor="";
    document.getElementById('act2_option6').style.backgroundColor="";

    document.getElementById('act3_option1').style.backgroundColor="";
    document.getElementById('act3_option2').style.backgroundColor="";
    document.getElementById('act3_option3').style.backgroundColor="";
    document.getElementById('act3_option4').style.backgroundColor="";
    document.getElementById('act3_option5').style.backgroundColor="";
    document.getElementById('act3_option6').style.backgroundColor="";

    document.getElementById('act3a_option1').style.backgroundColor="";
    document.getElementById('act3a_option2').style.backgroundColor="";
    document.getElementById('act3a_option3').style.backgroundColor="";
    document.getElementById('act3a_option4').style.backgroundColor="";
    document.getElementById('act3a_option5').style.backgroundColor="";
    document.getElementById('act3a_option6').style.backgroundColor="";
	
	document.getElementById('act1_head1').style.display="block";
	document.getElementById('act1_head2').style.display="block";
	document.getElementById('act1_head3').style.display="block";
    document.getElementById('act1_head3a').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
		document.getElementById("wrong").pause();
		document.getElementById("right").currentTime=0;
		document.getElementById("wrong").currentTime=0;
		
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	
	playhighlight=true;
	highlighttext();
	
	/*document.getElementById("Slide2-5").play();
   	document.getElementById("heading1").style.color="white";
    document.getElementById("heading1").style.backgroundColor="#5626E0";

	document.getElementById("Slide2-5").onended = function() 
	{
    document.getElementById("heading1").style.backgroundColor="";
    document.getElementById("heading1").style.color="black";
	};*/
	
}


function gotonextactivity(currid, nextid)
{
	if (answer_success==true)
	{
		document.getElementById("right").pause();
		document.getElementById("wrong").pause();
		document.getElementById("right").currentTime=0;
		document.getElementById("wrong").currentTime=0;
		
		document.getElementById("Slide1").pause();
		document.getElementById("Slide2-5").pause();
		document.getElementById("Slide1").currentTime=0;
		document.getElementById("Slide2-5").currentTime=0;
	
		document.getElementById('Page1').style.display="none";
		document.getElementById('Page2').style.display="none";
		document.getElementById('Page3').style.display="none";
		document.getElementById('Page4').style.display="none";
        document.getElementById('Page4a').style.display="none";
		document.getElementById(nextid).style.display="block";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="none";
	
		document.getElementById('act1_head1').style.display="block";
		document.getElementById('act1_head2').style.display="block";
		document.getElementById('act1_head3').style.display="block";
        document.getElementById('act1_head3a').style.display="block";
        
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="none";
		answer_success=false;
		
		if (nextid=="Page3")
		{
			document.getElementById('qvideo1').style.display="block"
			/*document.getElementById("Slide2-5").play();
           	document.getElementById("heading2").style.color="white";
            document.getElementById("heading2").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading2").style.backgroundColor="";
				document.getElementById("heading2").style.color="black";
			};*/
			playhighlight=true;
			highlighttext2();
		}
		else if (nextid=="Page4")
		{
			/*document.getElementById("Slide2-5").play();
            document.getElementById("heading3").style.color="white";
            document.getElementById("heading3").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading3").style.backgroundColor="";
				document.getElementById("heading3").style.color="black";
			};*/
			playhighlight=true;
			highlighttext3();
		}
		else if (nextid=="Page4a")
		{
			/*document.getElementById("Slide2-5").play();
            document.getElementById("heading4").style.color="white";
            document.getElementById("heading4").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading4").style.backgroundColor="";
				document.getElementById("heading4").style.color="black";
			};*/
			playhighlight=true;
			highlighttext4();
		}
		else
		{
			alert("else: " + nextid);
		}
		
		
	}
}

function checkactivity1(currid)
{
	document.getElementById('act1_option1').style.border="0em solid";
	document.getElementById('act1_option2').style.border="0em solid";
	document.getElementById('act1_option3').style.border="0em solid";
    document.getElementById('act1_option4').style.border="0em solid";
    document.getElementById('act1_option5').style.border="0em solid";
    document.getElementById('act1_option6').style.border="0em solid";
    
    document.getElementById('act1_option1').style.backgroundColor="";
    document.getElementById('act1_option2').style.backgroundColor="";
    document.getElementById('act1_option3').style.backgroundColor="";
    document.getElementById('act1_option4').style.backgroundColor="";
    document.getElementById('act1_option5').style.backgroundColor="";
    document.getElementById('act1_option6').style.backgroundColor="";
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	
	if (currid=="act1_option2")
	{
		document.getElementById(currid).style.border="0.2em solid green";
        document.getElementById(currid).style.backgroundColor="green";
		document.getElementById("right").play();
		document.getElementById('act1_head1').style.display="none";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="block";
		answer_success=true;
		document.getElementById('answerwrong1').pause();
		document.getElementById('answerright1').play();
		
		document.getElementById('qvideo1').style.display="none";
		
		document.getElementsByClassName('sl-video-container1a')[0].style.display="none";
		document.getElementsByClassName('sl-video1a')[0].style.display="none";
		
		document.getElementsByClassName('sl-video-container1a')[1].style.display="block";
		document.getElementsByClassName('sl-video1a')[1].style.display="block";

		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[1].style.display="none";
			document.getElementsByClassName('sl-video1a')[1].style.display="none";
		}, 3000);
	}
	else
	{
		answer_success=false;
		document.getElementById(currid).style.border="0.2em solid red";
        document.getElementById(currid).style.backgroundColor="red";
		document.getElementById("wrong").play();
		document.getElementById('act1_head1').style.display="none";
		document.getElementById('wrong1').style.display="block";
		document.getElementById('right1').style.display="none";
		
		document.getElementById('qvideo1').style.display="none";
		
		
		document.getElementsByClassName('sl-video-container1a')[1].style.display="none";
		document.getElementsByClassName('sl-video1a')[1].style.display="none";
		document.getElementsByClassName('sl-video-container1a')[0].style.display="block";
		document.getElementsByClassName('sl-video1a')[0].style.display="block";
		document.getElementById('answerright1').pause();
		document.getElementById('answerwrong1').play();
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[0].style.display="none";
			document.getElementsByClassName('sl-video1a')[0].style.display="none";
		}, 3000);
		
		console.log("wrong");
	}
}

function checkactivity2(currid)
{
	document.getElementById('act2_option1').style.border="0em solid";
	document.getElementById('act2_option2').style.border="0em solid";
	document.getElementById('act2_option3').style.border="0em solid";
    document.getElementById('act2_option4').style.border="0em solid";
    document.getElementById('act2_option5').style.border="0em solid";
    document.getElementById('act2_option6').style.border="0em solid";
    document.getElementById('act2_option1').style.backgroundColor="";
    document.getElementById('act2_option2').style.backgroundColor="";
    document.getElementById('act2_option3').style.backgroundColor="";
    document.getElementById('act2_option4').style.backgroundColor="";
    document.getElementById('act2_option5').style.backgroundColor="";
    document.getElementById('act2_option6').style.backgroundColor="";
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	if (currid=="act2_option1")
	{
		document.getElementById(currid).style.border="0.2em solid green";
        document.getElementById(currid).style.backgroundColor="green";
		document.getElementById("right").play();
		document.getElementById('act1_head2').style.display="none";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="block";
		answer_success=true;
		document.getElementById('answerwrong2').pause();
		document.getElementById('answerright2').play();
		document.getElementById('qvideo2').style.display="none";
		document.getElementsByClassName('sl-video-container1a')[2].style.display="none";
		document.getElementsByClassName('sl-video1a')[2].style.display="none";
		document.getElementsByClassName('sl-video-container1a')[3].style.display="block";
		document.getElementsByClassName('sl-video1a')[3].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[3].style.display="none";
			document.getElementsByClassName('sl-video1a')[3].style.display="none";
		}, 3000);
	}
	else
	{
		answer_success=false;
		document.getElementById(currid).style.border="0.2em solid red";
        document.getElementById(currid).style.backgroundColor="red";
		document.getElementById("wrong").play();
		document.getElementById('act1_head2').style.display="none";
		document.getElementById('wrong1').style.display="block";
		document.getElementById('right1').style.display="none";
		document.getElementById('qvideo2').style.display="none";
		document.getElementsByClassName('sl-video-container1a')[3].style.display="none";
		document.getElementsByClassName('sl-video1a')[3].style.display="none";
		document.getElementById('answerright2').pause();
		document.getElementById('answerwrong2').play();
		document.getElementsByClassName('sl-video-container1a')[2].style.display="block";
		document.getElementsByClassName('sl-video1a')[2].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[2].style.display="none";
			document.getElementsByClassName('sl-video1a')[2].style.display="none";
		}, 3000);
	}
}

function checkactivity3(currid)
{
	document.getElementById('act3_option1').style.border="0em solid";
	document.getElementById('act3_option2').style.border="0em solid";
	document.getElementById('act3_option3').style.border="0em solid";
    document.getElementById('act3_option4').style.border="0em solid";
    document.getElementById('act3_option5').style.border="0em solid";
    document.getElementById('act3_option6').style.border="0em solid";
    document.getElementById('act3_option1').style.backgroundColor="";
    document.getElementById('act3_option2').style.backgroundColor="";
    document.getElementById('act3_option3').style.backgroundColor="";
    document.getElementById('act3_option4').style.backgroundColor="";
    document.getElementById('act3_option5').style.backgroundColor="";
    document.getElementById('act3_option6').style.backgroundColor="";

	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	if (currid=="act3_option4")
	{
        document.getElementById(currid).style.border="0.2em solid green";
        document.getElementById(currid).style.backgroundColor="green";
		document.getElementById("right").play();
		document.getElementById('qvideo3').style.display="none";
		document.getElementById('act1_head3').style.display="none";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="block";
		answer_success=true;
		document.getElementsByClassName('sl-video-container1a')[4].style.display="none";
		document.getElementsByClassName('sl-video1a')[4].style.display="none";
		document.getElementById('answerwrong3').pause();
		document.getElementById('answerright3').play();
		document.getElementsByClassName('sl-video-container1a')[5].style.display="block";
		document.getElementsByClassName('sl-video1a')[5].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[5].style.display="none";
			document.getElementsByClassName('sl-video1a')[5].style.display="none";
		}, 3000);
	}
	else
	{
		answer_success=false;
		document.getElementById(currid).style.border="0.2em solid red";
        document.getElementById(currid).style.backgroundColor="red";
		document.getElementById("wrong").play();
		document.getElementById('act1_head3').style.display="none";
		document.getElementById('wrong1').style.display="block";
		document.getElementById('right1').style.display="none";
		document.getElementById('qvideo3').style.display="none";
		document.getElementsByClassName('sl-video-container1a')[5].style.display="none";
		document.getElementsByClassName('sl-video1a')[5].style.display="none";
		document.getElementById('answerright3').pause();
		document.getElementById('answerwrong3').play();
		document.getElementsByClassName('sl-video-container1a')[4].style.display="block";
		document.getElementsByClassName('sl-video1a')[4].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[4].style.display="none";
			document.getElementsByClassName('sl-video1a')[4].style.display="none";
		}, 3000);
		
	}
}

function checkactivity3a(currid)
{
    document.getElementById('act3a_option1').style.border="0em solid";
    document.getElementById('act3a_option2').style.border="0em solid";
    document.getElementById('act3a_option3').style.border="0em solid";
    document.getElementById('act3a_option4').style.border="0em solid";
    document.getElementById('act3a_option5').style.border="0em solid";
    document.getElementById('act3a_option6').style.border="0em solid";
    document.getElementById('act3a_option1').style.backgroundColor="";
    document.getElementById('act3a_option2').style.backgroundColor="";
    document.getElementById('act3a_option3').style.backgroundColor="";
    document.getElementById('act3a_option4').style.backgroundColor="";
    document.getElementById('act3a_option5').style.backgroundColor="";
    document.getElementById('act3a_option6').style.backgroundColor="";

    document.getElementById("right").pause();
    document.getElementById("wrong").pause();
    document.getElementById("right").currentTime=0;
    document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	
    if (currid=="act3a_option3")
    {
        document.getElementById(currid).style.border="0.2em solid green";
        document.getElementById(currid).style.backgroundColor="green";
        document.getElementById("right").play();
        document.getElementById('act1_head3a').style.display="none";
        document.getElementById('wrong1').style.display="none";
        document.getElementById('right1').style.display="block";
        document.getElementById('done6a').style.display="block";
        document.getElementById('done6').style.display="block";
        document.getElementById('done6b').style.display="block";
        document.getElementById('continuar4a').style.display="none";
        document.getElementById('continuar4b').style.display="none";
        document.getElementById('continuar4c').style.display="none";

        answer_success=true;
		document.getElementById('qvideo4').style.display="none";
		document.getElementsByClassName('sl-video-container1a')[6].style.display="none";
		document.getElementsByClassName('sl-video1a')[6].style.display="none";
		document.getElementById('answerwrong4').pause();
		document.getElementById('answerright4').play();
		document.getElementsByClassName('sl-video-container1a')[7].style.display="block";
		document.getElementsByClassName('sl-video1a')[7].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[7].style.display="none";
			document.getElementsByClassName('sl-video1a')[7].style.display="none";
		}, 3000);
    }
    else
    {
        answer_success=false;
        document.getElementById(currid).style.border="0.2em solid red";
        document.getElementById(currid).style.backgroundColor="red";
        document.getElementById("wrong").play();
        document.getElementById('act1_head3a').style.display="none";
        document.getElementById('wrong1').style.display="block";
        document.getElementById('right1').style.display="none";
		document.getElementById('qvideo4').style.display="none";
		
		document.getElementsByClassName('sl-video-container1a')[7].style.display="none";
		document.getElementsByClassName('sl-video1a')[7].style.display="none";
		document.getElementById('answerright4').pause();
		document.getElementById('answerwrong4').play();
		document.getElementsByClassName('sl-video-container1a')[6].style.display="block";
		document.getElementsByClassName('sl-video1a')[6].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[6].style.display="none";
			document.getElementsByClassName('sl-video1a')[6].style.display="none";
		}, 3000);

    }
}

function selectanswer(chooseoption)
{
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading1").style.color="black";
	document.getElementById("heading2").style.color="black";
	document.getElementById("heading3").style.color="black";
	document.getElementById("heading4").style.color="black";
	document.getElementById("Slide1").pause();
	document.getElementById("Slide2-5").pause();
	document.getElementById("Slide1").currentTime=0;
	document.getElementById("Slide2-5").currentTime=0;
	
	if (currnumber=="act5_option1")
	{
		if (chooseoption=="3")
		{
			document.getElementById(currnumber).style.border="0.5em solid green";
			document.getElementById("right").play();
			document.getElementById('number').style.display="none";
			document.getElementById('act5_a3').style.display="block";
			document.getElementById('act5_a1').style.display="none";
			document.getElementById('act5_a2').style.display="none";
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="none";
			document.getElementById('right1').style.display="block";
		}
		else
		{
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="block";
			document.getElementById('right1').style.display="none";
			document.getElementById(currnumber).style.border="0.5em solid red";
			document.getElementById("wrong").play();
			if (chooseoption=="1")
			{
				document.getElementById('act5_a1').style.display="block";
				document.getElementById('act5_a2').style.display="none";
				document.getElementById('act5_a3').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_a1').style.display="none";			
				}, 800);
			}
			else if (chooseoption=="2")
			{
				document.getElementById('act5_a2').style.display="block";
				document.getElementById('act5_a1').style.display="none";
				document.getElementById('act5_a3').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_a2').style.display="none";			
				}, 800);
			}
		}
	}
	else if (currnumber=="act5_option2")
	{
		if (chooseoption=="1")
		{
			document.getElementById(currnumber).style.border="0.5em solid green";
			document.getElementById("right").play();
			document.getElementById('number').style.display="none";
			document.getElementById('act5_b1').style.display="block";
			document.getElementById('act5_b2').style.display="none";
			document.getElementById('act5_b3').style.display="none";
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="none";
			document.getElementById('right1').style.display="block";
		}
		else
		{
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="block";
			document.getElementById('right1').style.display="none";
			document.getElementById(currnumber).style.border="0.5em solid red";
			document.getElementById("wrong").play();
			if (chooseoption=="2")
			{
				document.getElementById('act5_b2').style.display="block";
				document.getElementById('act5_b1').style.display="none";
				document.getElementById('act5_b3').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_b2').style.display="none";			
				}, 800);
			}
			else if (chooseoption=="3")
			{
				document.getElementById('act5_b3').style.display="block";
				document.getElementById('act5_b2').style.display="none";
				document.getElementById('act5_b1').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_b3').style.display="none";			
				}, 800);
			}
		}
	}
	else if (currnumber=="act5_option3")
	{
		if (chooseoption=="2")
		{
			document.getElementById(currnumber).style.border="0.5em solid green";
			document.getElementById("right").play();
			document.getElementById('number').style.display="none";
			document.getElementById('act5_c2').style.display="block";
			document.getElementById('act5_c1').style.display="none";
			document.getElementById('act5_c3').style.display="none";
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="none";
			document.getElementById('right1').style.display="block";
            document.getElementById('done6a').style.display="block";
            document.getElementById('done6').style.display="block";
            document.getElementById('done6b').style.display="block";
            document.getElementById('continuar6a').style.display="none";
            document.getElementById('continuar6c').style.display="none";
            document.getElementById('continuar6b').style.display="none";
		}
		else
		{
			document.getElementById('act1_head5').style.display="none";
			document.getElementById('wrong1').style.display="block";
			document.getElementById('right1').style.display="none";
			document.getElementById(currnumber).style.border="0.5em solid red";
			document.getElementById("wrong").play();
			if (chooseoption=="1")
			{
				document.getElementById('act5_c1').style.display="block";
				document.getElementById('act5_c2').style.display="none";
				document.getElementById('act5_c3').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_c1').style.display="none";			
				}, 800);
			}
			else if (chooseoption=="3")
			{
				document.getElementById('act5_c3').style.display="block";
				document.getElementById('act5_c2').style.display="none";
				document.getElementById('act5_c3').style.display="none";
				setTimeout(function () 
				{			
					document.getElementById('act5_c3').style.display="none";			
				}, 800);
			}
		}
	}
}

function highlighttext()
{
	document.getElementById("Slide2-5").play();
	document.getElementById("word5").style.color="white";
    document.getElementById("word5").style.backgroundColor="#5626E0";
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word5").style.color="";
		document.getElementById("word5").style.backgroundColor="";
		document.getElementById("word6").style.color="white";
		document.getElementById("word6").style.backgroundColor="#5626E0";	
		}		
	}, 1040);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word6").style.color="";
		document.getElementById("word6").style.backgroundColor="";
		document.getElementById("word7").style.color="white";
		document.getElementById("word7").style.backgroundColor="#5626E0";
		}		
	}, 1190);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word7").style.color="";
		document.getElementById("word7").style.backgroundColor="";
		document.getElementById("word8").style.color="white";
		document.getElementById("word8").style.backgroundColor="#5626E0";		
		}
	}, 1760);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word8").style.color="";
		document.getElementById("word8").style.backgroundColor="";
		document.getElementById("word9").style.color="white";
		document.getElementById("word9").style.backgroundColor="#5626E0";	
		}		
	}, 2090);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word9").style.color="";
		document.getElementById("word9").style.backgroundColor="";
		document.getElementById("word10").style.color="white";
		document.getElementById("word10").style.backgroundColor="#5626E0";	
		}		
	}, 2930);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word10").style.color="";
		document.getElementById("word10").style.backgroundColor="";
		document.getElementById("word11").style.color="white";
		document.getElementById("word11").style.backgroundColor="#5626E0";	
		}		
	}, 3140);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word11").style.color="";
		document.getElementById("word11").style.backgroundColor="";
		document.getElementById("word12").style.color="white";
		document.getElementById("word12").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word12").style.color="";
		document.getElementById("word12").style.backgroundColor="";
		}
	}, 4200);
	
}

function highlighttext2()
{
	document.getElementById("Slide2-5").play();
	document.getElementById("word13").style.color="white";
    document.getElementById("word13").style.backgroundColor="#5626E0";
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word13").style.color="";
		document.getElementById("word13").style.backgroundColor="";
		document.getElementById("word14").style.color="white";
		document.getElementById("word14").style.backgroundColor="#5626E0";	
		}		
	}, 1040);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word14").style.color="";
		document.getElementById("word14").style.backgroundColor="";
		document.getElementById("word15").style.color="white";
		document.getElementById("word15").style.backgroundColor="#5626E0";
		}		
	}, 1190);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word15").style.color="";
		document.getElementById("word15").style.backgroundColor="";
		document.getElementById("word16").style.color="white";
		document.getElementById("word16").style.backgroundColor="#5626E0";		
		}
	}, 1760);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word16").style.color="";
		document.getElementById("word16").style.backgroundColor="";
		document.getElementById("word17").style.color="white";
		document.getElementById("word17").style.backgroundColor="#5626E0";	
		}		
	}, 2090);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word17").style.color="";
		document.getElementById("word17").style.backgroundColor="";
		document.getElementById("word18").style.color="white";
		document.getElementById("word18").style.backgroundColor="#5626E0";	
		}		
	}, 2930);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word18").style.color="";
		document.getElementById("word18").style.backgroundColor="";
		document.getElementById("word19").style.color="white";
		document.getElementById("word19").style.backgroundColor="#5626E0";	
		}		
	}, 3140);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word19").style.color="";
		document.getElementById("word19").style.backgroundColor="";
		document.getElementById("word20").style.color="white";
		document.getElementById("word20").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word20").style.color="";
		document.getElementById("word20").style.backgroundColor="";
		}
	}, 4200);
	
}

function highlighttext3()
{
	document.getElementById("Slide2-5").play();
	document.getElementById("word21").style.color="white";
    document.getElementById("word21").style.backgroundColor="#5626E0";
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word21").style.color="";
		document.getElementById("word21").style.backgroundColor="";
		document.getElementById("word22").style.color="white";
		document.getElementById("word22").style.backgroundColor="#5626E0";	
		}		
	}, 1040);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word22").style.color="";
		document.getElementById("word22").style.backgroundColor="";
		document.getElementById("word23").style.color="white";
		document.getElementById("word23").style.backgroundColor="#5626E0";
		}		
	}, 1190);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word23").style.color="";
		document.getElementById("word23").style.backgroundColor="";
		document.getElementById("word24").style.color="white";
		document.getElementById("word24").style.backgroundColor="#5626E0";		
		}
	}, 1760);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word24").style.color="";
		document.getElementById("word24").style.backgroundColor="";
		document.getElementById("word25").style.color="white";
		document.getElementById("word25").style.backgroundColor="#5626E0";	
		}		
	}, 2090);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word25").style.color="";
		document.getElementById("word25").style.backgroundColor="";
		document.getElementById("word26").style.color="white";
		document.getElementById("word26").style.backgroundColor="#5626E0";	
		}		
	}, 2930);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word26").style.color="";
		document.getElementById("word26").style.backgroundColor="";
		document.getElementById("word27").style.color="white";
		document.getElementById("word27").style.backgroundColor="#5626E0";	
		}		
	}, 3140);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word27").style.color="";
		document.getElementById("word27").style.backgroundColor="";
		document.getElementById("word28").style.color="white";
		document.getElementById("word28").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word28").style.color="";
		document.getElementById("word28").style.backgroundColor="";
		}
	}, 4200);
	
}

function highlighttext4()
{
	document.getElementById("Slide2-5").play();
	document.getElementById("word29").style.color="white";
    document.getElementById("word29").style.backgroundColor="#5626E0";
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word29").style.color="";
		document.getElementById("word29").style.backgroundColor="";
		document.getElementById("word30").style.color="white";
		document.getElementById("word30").style.backgroundColor="#5626E0";	
		}		
	}, 1040);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word30").style.color="";
		document.getElementById("word30").style.backgroundColor="";
		document.getElementById("word31").style.color="white";
		document.getElementById("word31").style.backgroundColor="#5626E0";
		}		
	}, 1190);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word31").style.color="";
		document.getElementById("word31").style.backgroundColor="";
		document.getElementById("word32").style.color="white";
		document.getElementById("word32").style.backgroundColor="#5626E0";		
		}
	}, 1760);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word32").style.color="";
		document.getElementById("word32").style.backgroundColor="";
		document.getElementById("word33").style.color="white";
		document.getElementById("word33").style.backgroundColor="#5626E0";	
		}		
	}, 2090);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word33").style.color="";
		document.getElementById("word33").style.backgroundColor="";
		document.getElementById("word34").style.color="white";
		document.getElementById("word34").style.backgroundColor="#5626E0";	
		}		
	}, 2930);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word34").style.color="";
		document.getElementById("word34").style.backgroundColor="";
		document.getElementById("word35").style.color="white";
		document.getElementById("word35").style.backgroundColor="#5626E0";	
		}		
	}, 3140);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word35").style.color="";
		document.getElementById("word35").style.backgroundColor="";
		document.getElementById("word36").style.color="white";
		document.getElementById("word36").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word36").style.color="";
		document.getElementById("word36").style.backgroundColor="";
		}
	}, 4200);
	
}