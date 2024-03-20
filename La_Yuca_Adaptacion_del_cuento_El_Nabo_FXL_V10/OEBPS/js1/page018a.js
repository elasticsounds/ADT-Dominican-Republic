var currnumber=0;
var answer_success=false;
var playhighlight=false;
function openactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page5').style.display="block";

    document.getElementById('act4_option1').style.border="0em solid black";
	document.getElementById('act4_option2').style.border="0em solid black";
	document.getElementById('act4_option3').style.border="0em solid black";
	document.getElementById('act4_option4').style.border="0em solid black";
	document.getElementById('act4_option5').style.border="0em solid black";
    
	document.getElementById('act1_head4').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide6").pause();
	document.getElementById("Slide6").currentTime=0;
	
	/*document.getElementById("Slide6").play();
	document.getElementById("heading5").style.color="white";
    document.getElementById("heading5").style.backgroundColor="#5626E0";
	document.getElementById("heading5a").style.color="white";
    document.getElementById("heading5a").style.backgroundColor="#5626E0";
	document.getElementById("Slide6").onended = function() 
	{
        document.getElementById("heading5").style.backgroundColor="";
		document.getElementById("heading5").style.color="black";
		document.getElementById("heading5a").style.backgroundColor="";
		document.getElementById("heading5a").style.color="black";
	};*/
	
	playhighlight=true;
	highlighttext();
}

function exitactivity()
{
	document.getElementById('Page1').style.display="block";
	document.getElementById('Page5').style.display="none";

    document.getElementById('act4_option1').style.border="0em solid black";
	document.getElementById('act4_option2').style.border="0em solid black";
	document.getElementById('act4_option3').style.border="0em solid black";
	document.getElementById('act4_option4').style.border="0em solid black";
	document.getElementById('act4_option5').style.border="0em solid black";
    
	document.getElementById('act1_head4').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById('act4_u1').style.display="none";
	document.getElementById('act4_a1').style.display="none";
	document.getElementById('act4_e1').style.display="none";
	document.getElementById('act4_i1').style.display="none";
	document.getElementById('act4_o1').style.display="none";
	
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide6").pause();
	document.getElementById("Slide6").currentTime=0;
	playhighlight=false;
	
}

function restartactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page5').style.display="block";
	
    document.getElementById('act4_option1').style.border="0em solid black";
	document.getElementById('act4_option2').style.border="0em solid black";
	document.getElementById('act4_option3').style.border="0em solid black";
	document.getElementById('act4_option4').style.border="0em solid black";
	document.getElementById('act4_option5').style.border="0em solid black";
    
	document.getElementById('act1_head4').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById('act4_u1').style.display="none";
	document.getElementById('act4_a1').style.display="none";
	document.getElementById('act4_e1').style.display="none";
	document.getElementById('act4_i1').style.display="none";
	document.getElementById('act4_o1').style.display="none";
	
	document.getElementById("right").pause();
		document.getElementById("wrong").pause();
		document.getElementById("right").currentTime=0;
		document.getElementById("wrong").currentTime=0;
		
	document.getElementById("Slide6").pause();
	document.getElementById("Slide6").currentTime=0;
	
	document.getElementById("heading5").style.color="black";
	
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


function gotonextactivity(currid, nextid)
{
	if (answer_success==true)
	{
		document.getElementById("right").pause();
		document.getElementById("wrong").pause();
		document.getElementById("right").currentTime=0;
		document.getElementById("wrong").currentTime=0;
		
		document.getElementById("Slide6").pause();
		document.getElementById("Slide6").currentTime=0;
	
		document.getElementById('Page1').style.display="none";
		document.getElementById('Page5').style.display="none";
		document.getElementById(nextid).style.display="block";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="none";
	
		document.getElementById('act1_head4').style.display="block";
        
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="none";
		answer_success=false;
		
		if (nextid=="Page3")
		{
			document.getElementById("Slide2-5").play();
           	document.getElementById("heading2").style.color="white";
            document.getElementById("heading2").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading2").style.backgroundColor="";
				document.getElementById("heading2").style.color="black";
			};
		}
		else if (nextid=="Page4")
		{
			document.getElementById("Slide2-5").play();
            document.getElementById("heading3").style.color="white";
            document.getElementById("heading3").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading3").style.backgroundColor="";
				document.getElementById("heading3").style.color="black";
			};
		}
		else if (nextid=="Page4a")
		{
			document.getElementById("Slide2-5").play();
            document.getElementById("heading4").style.color="white";
            document.getElementById("heading4").style.backgroundColor="#5626E0";
			document.getElementById("Slide2-5").onended = function() 
			{
                document.getElementById("heading4").style.backgroundColor="";
				document.getElementById("heading4").style.color="black";
			};
		}
		else if (nextid=="Page5")
		{
			document.getElementById("Slide6").play();
            document.getElementById("heading5").style.color="white";
            document.getElementById("heading5").style.backgroundColor="#5626E0";
            document.getElementById("heading5a").style.color="white";
            document.getElementById("heading5a").style.backgroundColor="#5626E0";
			document.getElementById("Slide6").onended = function() 
			{
                document.getElementById("heading5").style.backgroundColor="";
				document.getElementById("heading5").style.color="black";
                document.getElementById("heading5a").style.backgroundColor="";
                document.getElementById("heading5a").style.color="black";
			};
		}
		else if (nextid=="Page6")
		{
			document.getElementById("Slide7").play();
            document.getElementById("heading6").style.color="white";
            document.getElementById("heading6").style.backgroundColor="#5626E0";
			document.getElementById("Slide7").onended = function() 
			{
                document.getElementById("heading6").style.backgroundColor="";
				document.getElementById("heading6").style.color="black";
			};
		}
		else
		{
			//alert("else: " + nextid);
		}
		
		
	}
}
function checkactivity4(currid)
{
	document.getElementById('act4_option1').style.border="0em solid";
	document.getElementById('act4_option2').style.border="0em solid";
	document.getElementById('act4_option3').style.border="0em solid";
	document.getElementById('act4_option4').style.border="0em solid";
	document.getElementById('act4_option5').style.border="0em solid";
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading5").style.color="black";
	document.getElementById("Slide6").pause();
	document.getElementById("Slide6").currentTime=0;
	
	if (currid=="act4_option5")
	{
		document.getElementById(currid).style.border="0.2em solid green";
		document.getElementById("right").play();
		document.getElementById('act4_u1').style.display="block";
		document.getElementById('act4_a1').style.display="none";
		document.getElementById('act4_e1').style.display="none";
		document.getElementById('act4_i1').style.display="none";
		document.getElementById('act4_o1').style.display="none";
		document.getElementById('act1_head4').style.display="none";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="block";
        document.getElementById('done6a').style.display="block";
        document.getElementById('done6').style.display="block";
        document.getElementById('done6b').style.display="block";
        document.getElementById('continuar5a').style.display="none";
        document.getElementById('continuar5b').style.display="none";
        document.getElementById('continuar5c').style.display="none";
		document.getElementById('mainvideo2').style.display="none";
		answer_success=true;
		document.getElementsByClassName('sl-video-container1a')[0].style.display="none";
		document.getElementsByClassName('sl-video1a')[0].style.display="none";
			
		document.getElementById('answerright1').play();
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
		document.getElementById("wrong").play();
		
		document.getElementById('act4_a1').style.display="none";
		document.getElementById('act4_e1').style.display="none";
		document.getElementById('act4_i1').style.display="none";
		document.getElementById('act4_o1').style.display="none";
		document.getElementById('act4_u1').style.display="none";
		document.getElementById('act1_head4').style.display="none";
		document.getElementById('wrong1').style.display="block";
		document.getElementById('right1').style.display="none";
		
		if (currid=="act4_option1")
		{
			document.getElementById('act4_a1').style.display="block";
			setTimeout(function () 
			{			
				document.getElementById('act4_a1').style.display="none";			
			}, 800);
		}
		else if (currid=="act4_option2")
		{
			document.getElementById('act4_e1').style.display="block";
			setTimeout(function () 
			{			
				document.getElementById('act4_e1').style.display="none";			
			}, 800);
		}
		else if (currid=="act4_option3")
		{
			document.getElementById('act4_i1').style.display="block";
			setTimeout(function () 
			{			
				document.getElementById('act4_i1').style.display="none";			
			}, 800);
		}
		else if (currid=="act4_option4")
		{
			document.getElementById('act4_o1').style.display="block";
			setTimeout(function () 
			{			
				document.getElementById('act4_o1').style.display="none";			
			}, 800);
		}
		document.getElementById('mainvideo2').style.display="none";
		
		document.getElementById('answerwrong1').play();
		document.getElementsByClassName('sl-video-container1a')[0].style.display="block";
		document.getElementsByClassName('sl-video1a')[0].style.display="block";
		
		setTimeout(function ()
		{
			document.getElementsByClassName('sl-video-container1a')[0].style.display="none";
			document.getElementsByClassName('sl-video1a')[0].style.display="none";
		}, 3000);
	}
}

function shownumbers(currid)
{
	document.getElementById('number').style.display="block";
	currnumber=currid;
}

function highlighttext()
{
	document.getElementById("Slide6").play();
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
	}, 980);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word6").style.color="";
		document.getElementById("word6").style.backgroundColor="";
		document.getElementById("word7").style.color="white";
		document.getElementById("word7").style.backgroundColor="#5626E0";
		}		
	}, 1130);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word7").style.color="";
		document.getElementById("word7").style.backgroundColor="";
		document.getElementById("word8").style.color="white";
		document.getElementById("word8").style.backgroundColor="#5626E0";		
		}
	}, 1490);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word8").style.color="";
		document.getElementById("word8").style.backgroundColor="";
		document.getElementById("word9").style.color="white";
		document.getElementById("word9").style.backgroundColor="#5626E0";	
		}		
	}, 1670);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word9").style.color="";
		document.getElementById("word9").style.backgroundColor="";
		document.getElementById("word10").style.color="white";
		document.getElementById("word10").style.backgroundColor="#5626E0";	
		}		
	}, 2120);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word10").style.color="";
		document.getElementById("word10").style.backgroundColor="";
		document.getElementById("word11").style.color="white";
		document.getElementById("word11").style.backgroundColor="#5626E0";	
		}		
	}, 2480);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word11").style.color="";
		document.getElementById("word11").style.backgroundColor="";
		document.getElementById("word12").style.color="white";
		document.getElementById("word12").style.backgroundColor="#5626E0";		
		}
	}, 3140);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word12").style.color="";
		document.getElementById("word12").style.backgroundColor="";
		document.getElementById("heading5a").style.color="white";
		document.getElementById("heading5a").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("heading5a").style.color="";
		document.getElementById("heading5a").style.backgroundColor="";
		}
	}, 4200);
	
}