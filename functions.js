/* File: functions.js               *
 * Project: ITW 2                   *
 * Author: Martin Ivanco (xivanc03) */

function getCookie(name) {
	var cookies = decodeURIComponent(document.cookie).split(";");
	for (var i = 0; i < cookies.length; i++) {
		while (cookies[i].charAt(0) == ' ') {
            cookies[i] = cookies[i].slice(1);
        }
		if (cookies[i].indexOf(name) == 0) {
			return cookies[i].slice(name.length + 1);
		}
	}
	return null;
}

function setCookie(name, val) {
	document.cookie = name + "=" + val + ";";
}

function applyCookies() {
	// set news box
	var cookie = getCookie("news");
	if ((cookie != null) && (document.getElementById("newscontent") != null)) {
		if (cookie == "1") {
			document.getElementById("newscontent").style.display = "block";
			document.getElementById("newstitle").style.backgroundImage = "url('images/misc/arrowdownbk.png')";
		}
		else {
			document.getElementById("newscontent").style.display = "none";
			document.getElementById("newstitle").style.backgroundImage = "url('images/misc/arrowrightbk.png')";
		}
	}
	else if (document.getElementById("newscontent") != null) {
		document.getElementById("newscontent").style.display = "none";
		document.getElementById("newstitle").style.backgroundImage = "url('images/misc/arrowrightbk.png')";
		setCookie("news", "0");
	}

	// set language
	cookie = getCookie("lang");
	if (cookie != null) {
		document.getElementById("actlang").innerHTML = cookie;
	}
}

function changeLang(nlang) {
	document.getElementById("actlang").innerHTML = nlang;
	setCookie("lang", nlang);
}

function toggleVisibile() {
	if (getCookie("news") == "0") {
		document.getElementById("newscontent").style.display = "block";
		document.getElementById("newstitle").style.backgroundImage = "url('images/misc/arrowdownbk.png')";
		setCookie("news", "1");
	}
	else {
		document.getElementById("newscontent").style.display = "none";
		document.getElementById("newstitle").style.backgroundImage = "url('images/misc/arrowrightbk.png')";
		setCookie("news", "0");
	}
}

function gallery(section, picture) {
	document.getElementById("activepic").src = "images/" + section + "/" + picture + ".jpg";	
}
