function setCookie(cname, cvalue, exsecs) {
    console.log('setting')
	var d = new Date();
	d.setTime(d.getTime() + (exsecs*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  var val=getCookie(cname);
  if (val == "") {
    setCookie(cname, "0", 10);
  }
}



