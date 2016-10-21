function getByClass(clsName,parent){
  var oParent=parent?document.getElementById(parent):document,
      eles=[],
      elements=oParent.getElementsByTagName('*');
  
  for(var i=0,l=elements.length;i<l;i++){
    var elementss = elements[i].className.split(' ');
    for(var j = 0; j<elementss.length; j++){
      if(elementss[j] == clsName){
      eles.push(elements[i]);
      break;
     }
    } 
  }
  return eles;
}
window.onload = drag;
function drag(){
	var oTitle = getByClass('login_logo_webqq','loginPanel')[0];
	oTitle.onmousedown = fnDown;
	var close = document.getElementById('ui_boxyClose'),
	    loginPanel = document.getElementById('loginPanel'),
	    loginstate = document.getElementById('loginState'),
	    loginStatePanel = document.getElementById('loginStatePanel'),
	    list = loginStatePanel.getElementsByTagName('li'),
	    login2qq_state_txt = document.getElementById('login2qq_state_txt'),
	    loginStateShow = document.getElementById('loginStateShow');
	close.onclick = function(){
        loginPanel.style.display = 'none';
	}
	loginstate.onclick = function(event){
		loginStatePanel.style.display = 'block';
        if (event.stopPropagation) {
        	event.stopPropagation()
        }else event.cancleBubble = true;
	}
	document.onclick = function(){
			loginStatePanel.style.display = 'none';
		}
	for(var i = 0; i<list.length; i++){
		list[i].onmouseover = function(){
			this.style.background='#567'
		}
		list[i].onmouseout = function(){
			this.style.background='#fff'
		}
		list[i].onclick = function(event){
			event = event || window.event;
			event.stopPropagation();
			loginStatePanel.style.display = 'none';
			var idname = this.id;
			loginstate.onclick = null;
			login2qq_state_txt.innerHTML = getByClass('stateSelect_text',idname)[0].innerHTML;
			loginStateShow.className = '';
			loginStateShow.className = 'login-state-show '+idname;


		}
	}




}
function fnDown(event){
	var oDrag=document.getElementById('loginPanel');
    var disx=event.clientX-oDrag.offsetLeft,
        disy=event.clientY-oDrag.offsetTop;
    document.onmousemove=function(event){
    	event = event||window.event;
    	var l = event.clientX-disx;
    	var t = event.clientY-disy;
    	var manW = document.documentElement.clientWidth || document.body.clientWidth,
    	    manH = document.documentElement.clientHeight || document.body.clienHeight;
    	    
        if (l<0) {
        	l = 10;
        }else if (l>manW-oDrag.offsetWidth) {
        	l = manW-oDrag.offsetWidth-10;
        }
        if (t<0) {
        	t=10;
        }else if (t>manH-oDrag.offsetHeight) {
            t = manH-oDrag.offsetHeight-10;
        }
        oDrag.style.left = (l)+'px';
        oDrag.style.top = (t)+'px';
        document.title=l+','+t;




    }
    document.onmouseup=function(){
    	document.onmousemove=null;
    }
    

}

