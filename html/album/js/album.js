/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-06 08:56:54
 * @version $Id$
 */

window.onload=function(){
    		var oBig=document.getElementById("big");
    		var oBtn=document.getElementById("btn");
    		var oBigImg=oBig.getElementsByTagName("img")[0];
    		var oBox=document.getElementById("box");
    		var aLi=oBox.getElementsByTagName("li");
            var oBat=document.getElementById("bat");

    		oBox.style.position="relative";
            oBox.style.top=0;
            oBox.style.width="80%";
            oBox.style.transform="rotateY(720deg)";

    		for(var i=0;i<aLi.length;i++){
    			aLi[i].onclick=function(){
    				oBigImg.src=this.getElementsByTagName("img")[0].src;
    				oBig.style.width="60%";
    				oBig.style.opacity=1;
    				oBig.style.transform="rotateX(360deg)";
    			}
    		}

    		oBtn.onclick=function(){
    			oBig.style.width=0;
    			oBig.style.opacity=0;
    			oBig.style.transform="rotateX(-360deg)";
    		}

    	}