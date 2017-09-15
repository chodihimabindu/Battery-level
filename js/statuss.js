	<script type="text/javascript">
	// set minutes
	var mins = 47;

	// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
	var secs = mins * 60;
	function countdown() {
		setTimeout('Decrement()',1000);
	}
	function Decrement() {
		if (document.getElementById) {
			minutes = document.getElementById("minutes");
			seconds = document.getElementById("seconds");
			// if less than a minute remaining
			if (seconds < 59) {
				seconds.value = secs;
			} else {
				minutes.value = getminutes();
				seconds.value = getseconds();
			}
			secs--;
			setTimeout('Decrement()',1000);
		}
	}
	function getminutes() {
		// minutes is seconds divided by 60, rounded down
		mins = Math.floor(secs / 60);
		return mins;
	}
	function getseconds() {
		// take mins remaining (as seconds) away from total seconds remaining
		return secs-Math.round(mins *60);
	}

	var value = 0;
	function increase(){
		value = value + 20;
		if(value>=100) value = 100;
		document.getElementById("progress").style.width = value + "%";
		if(value>60)
			document.getElementById("status").innerHTML="Paired.";
			else if(value>40)
			document.getElementById("status").innerHTML="Connected...";
			else
			document.getElementById("status").innerHTML="Connecting...";

			setTimeout(increase, 2000);
			value1++;
		}
	</script>