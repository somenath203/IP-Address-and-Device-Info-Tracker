
$.getJSON("https://api.ipify.org?format=json",
        function(data) {


$("#gfg").html(data.ip);
})
		

	