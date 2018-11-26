(function () {
	"use strict";
	
	document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
	
	function onDeviceReady(){
		document.addEventListener('online', ononline);
		document.addEventListener('offline', onoffline);
		document.getElementById("check").addEventListener('click',checknetworkinfo)
	};
	
	function checknetworkinfo() {
		var connectiontype = navigator.connection.type;
		var status = {};
		
    status[Connection.WIFI]     = "WiFi connection";
	status[Connection.CELL]     = "Cell generic connection";
	status[Connection.CELL_2G]  = "Cell 2G connection";
	status[Connection.CELL_3G]  = "Cell 3G connection";
    status[Connection.CELL_4G]  = "Cell 4G connection";
	status[Connection.ETHERNET] = "Ethernet connection";
	status[Connection.NONE]     = "No network connection";
	status[Connection.UNKNOWN]  = "Unknown connection";
	alert("Connection Status" + status[connectiontype]);
	}
	function ononline(){
		alert( 'Estado conectado');
	}

	function onoffline(){
		alert('Fuera de linea');
	}
	
} )();