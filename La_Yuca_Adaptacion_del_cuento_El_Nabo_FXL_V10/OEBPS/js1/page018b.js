var currnumber=0;
var answer_success=false;
var playhighlight=false;

function openactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page6').style.display="block";
	
	document.getElementById('act5_option1').style.border="0em solid black";
	document.getElementById('act5_option2').style.border="0em solid black";
	document.getElementById('act5_option3').style.border="0em solid black";
	
	document.getElementById('act1_head5').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide7").pause();
	document.getElementById("Slide7").currentTime=0;
	
	/*document.getElementById("Slide7").play();
	document.getElementById("heading6").style.color="white";
    document.getElementById("heading6").style.backgroundColor="#5626E0";
	document.getElementById("Slide7").onended = function() 
	{
        document.getElementById("heading6").style.backgroundColor="";
		document.getElementById("heading6").style.color="black";
	};*/
	playhighlight=true;
	highlighttext();
}

function exitactivity()
{
	document.getElementById('Page1').style.display="block";
	document.getElementById('Page6').style.display="none";
	
	document.getElementById('act5_option1').style.border="0em solid black";
	document.getElementById('act5_option2').style.border="0em solid black";
	document.getElementById('act5_option3').style.border="0em solid black";

	document.getElementById('act1_head5').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	document.getElementById("Slide7").pause();
	document.getElementById("Slide7").currentTime=0;
	playhighlight=false;
}

function restartactivity()
{
	document.getElementById('Page1').style.display="none";
	document.getElementById('Page6').style.display="block";
	
	document.getElementById('act5_option1').style.border="0em solid black";
	document.getElementById('act5_option2').style.border="0em solid black";
	document.getElementById('act5_option3').style.border="0em solid black";

	document.getElementById('act1_head5').style.display="block";
	document.getElementById('wrong1').style.display="none";
	document.getElementById('right1').style.display="none";
	
	document.getElementById("right").pause();
		document.getElementById("wrong").pause();
		document.getElementById("right").currentTime=0;
		document.getElementById("wrong").currentTime=0;
		
	document.getElementById("Slide7").pause();
	document.getElementById("Slide7").currentTime=0;
	
	document.getElementById("heading6").style.color="black";
	
	/*document.getElementById("Slide2-5").play();
   	document.getElementById("heading1").style.color="white";
    document.getElementById("heading1").style.backgroundColor="#5626E0";

	document.getElementById("Slide2-5").onended = function() 
	{
    document.getElementById("heading1").style.backgroundColor="";
    document.getElementById("heading1").style.color="black";
	};
	*/
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
		
		document.getElementById("Slide7").pause();
		document.getElementById("Slide7").currentTime=0;
	
		document.getElementById('Page1').style.display="none";
		document.getElementById('Page6').style.display="none";
		document.getElementById(nextid).style.display="block";
		document.getElementById('wrong1').style.display="none";
		document.getElementById('right1').style.display="none";
	
		document.getElementById('act1_head5').style.display="block";
        
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
			alert("else: " + nextid);
		}
		
		
	}
}
function shownumbers(currid)
{
	document.getElementById('number').style.display="block";
	currnumber=currid;
}

function selectanswer(chooseoption)
{
	document.getElementById("right").pause();
	document.getElementById("wrong").pause();
	document.getElementById("right").currentTime=0;
	document.getElementById("wrong").currentTime=0;
	
	document.getElementById("heading6").style.color="black";
	document.getElementById("Slide7").pause();
	document.getElementById("Slide7").currentTime=0;
	
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
			document.getElementById('mainvideo2').style.display="none";
			document.getElementById("answerwrong1").pause();
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
			document.getElementById('mainvideo2').style.display="none";
			document.getElementsByClassName('sl-video-container1a')[0].style.display="none";
			document.getElementsByClassName('sl-video1a')[0].style.display="none";
			document.getElementById("answerwrong1").pause();
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
           // document.getElementById('continuar6b').style.display="none";
			document.getElementById('mainvideo2').style.display="none";
			document.getElementById("answerwrong1").pause();
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
}

function highlighttext()
{
	document.getElementById("Slide7").play();
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
	}, 680);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word6").style.color="";
		document.getElementById("word6").style.backgroundColor="";
		document.getElementById("word7").style.color="white";
		document.getElementById("word7").style.backgroundColor="#5626E0";
		}		
	}, 830);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word7").style.color="";
		document.getElementById("word7").style.backgroundColor="";
		document.getElementById("word8").style.color="white";
		document.getElementById("word8").style.backgroundColor="#5626E0";		
		}
	}, 1400);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word8").style.color="";
		document.getElementById("word8").style.backgroundColor="";
		document.getElementById("word9").style.color="white";
		document.getElementById("word9").style.backgroundColor="#5626E0";	
		}		
	}, 1490);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word9").style.color="";
		document.getElementById("word9").style.backgroundColor="";
		document.getElementById("word10").style.color="white";
		document.getElementById("word10").style.backgroundColor="#5626E0";	
		}		
	}, 1610);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word10").style.color="";
		document.getElementById("word10").style.backgroundColor="";
		document.getElementById("word11").style.color="white";
		document.getElementById("word11").style.backgroundColor="#5626E0";	
		}		
	}, 2270);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word11").style.color="";
		document.getElementById("word11").style.backgroundColor="";
		document.getElementById("word12").style.color="white";
		document.getElementById("word12").style.backgroundColor="#5626E0";		
		}
	}, 2600);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word12").style.color="";
		document.getElementById("word12").style.backgroundColor="";
		document.getElementById("word13").style.color="white";
		document.getElementById("word13").style.backgroundColor="#5626E0";		
		}
	}, 2990);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word13").style.color="";
		document.getElementById("word13").style.backgroundColor="";
		document.getElementById("word14").style.color="white";
		document.getElementById("word14").style.backgroundColor="#5626E0";		
		}
	}, 3290);
	setTimeout(function () 
	{			
		if (playhighlight==true)
		{
		document.getElementById("word14").style.color="";
		document.getElementById("word14").style.backgroundColor="";
		}
	}, 4030);
	
}