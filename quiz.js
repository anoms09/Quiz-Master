var selectedNumbers=[];
var counter=0; var status; var number;
var questions= [
		"Who is the minister for information in Nigeria?",
		"2+2*3/2-5 equals ?",
		"State the full name of the director general of NYSC.",
		"What is the square root of 16 * 25?",
		"Who is the owner of whatsapp?",
		"Quote Matthew 6:33.",
		"How old was Abraham when he was circumcised?",
		"_________ threw Shadrach, Messach and Abednego into a burning fiery furnace. Spell your answer.",
		"Where was Jonah told to go and preach against their wickedness?",
		"15 * 15 / 5 + 5",
		"The book of the Songs of Solomon has ______ chapters.",
		"Shortest verse in the Bible is ___________ and it is found in the Book of ___________.",
		"What is the full meaning of EFCC?",
		"When was population census last held in Nigeria?",
		"When was NYSC created?",
		"Solomon had ____ wives, princesses and _____ concubines.",
		"What is the name of Ado-odo Ota LGI?",
		"Who is the richest woman in Nigeria?",
		"Who is the first woman to drive a car in Nigeria?",
		"Nigeria became a republic in _____."
];

var answer= [
		"Lai Mohammed.",
		"0",
		"Brig. Gen. Suleiman Zakari Kazaure",
		"20",
		"Mark Zuckerberg",
		"But seek ye first the kingdom of God, and His righteousness; and all these things shall be added unto you",
		"Ninety-nine(99) years old",
		"King Nebuchadnezzar",
		"Nineveh",
		"50",
		"8 chapters",
		"Jesus Wept, John 11:35.",
		"Economic and Financial Crimes Commission.",
		"2006",
		"22 May, 1973",
		"700, 300 (1 Kings 11:3)",
		"Mr Abiodun Fatimehin",
		"Folorunso Alakija",
		"Funmilayo Ransom-Kuti",
		"1963"

];

function checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function countTime(){
	var now = new Date();
	var eventdate=new Date(now.getTime()+(dur));
    var currentTiime=now.getTime();
	var rem=eventdate-currentTiime;
	var s=Math.floor(rem/1000);
	var m=Math.floor(s/60);
	var h=Math.floor(m/60);
	mydur=dur;
	h%=24;
	m%=60;
	s%=60;
	
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	console.log(m);
    document.getElementById("timer").textContent =
    h + ":" + m + ":" + s;
	
	dur=dur-1000;
	if (dur>0){
		setTimeout(countTime, 1000);
	}else if (dur===0){
		 document.getElementById("timer").textContent ="TIME UP!!!";
		 var playAudio=document.getElementById("buzzer");
		 playAudio.play();
	}else{
		document.getElementById("timer").textContent ="00:00:45";
	}
}

function selectQuestion(){	
	number=document.getElementById('questionNumber').value;
	document.getElementById('answerBox').textContent="";

	if(number>19){
		alert("Invalid number");
	}else{
		for (i=0; i<selectedNumbers.length; i++){
			if (selectedNumbers[i] === number){
				status="picked";
			}else{
				status="Not picked";
			}
		}

		if (status === "picked"){
			alert("Number has been Selected already");
		}else{
			document.getElementById('questionBox').textContent=questions[number];
			var text=document.getElementById('numberPicked').textContent;
			document.getElementById('numberPicked').textContent=text+', '+number;
			dur=45*1000;
			countTime();
		}
		selectedNumbers[counter]=number;
		counter++;
	}
}

function showAnswer(){
	document.getElementById('answerBox').textContent=answer[number];
}

function resetTimer(){
	dur=0;
	document.getElementById('timer').textContent ="00:00:45";
	document.getElementById('questionBox').textContent="";
	document.getElementById('answerBox').textContent="";
	document.getElementById('questionNumber').value="";
}