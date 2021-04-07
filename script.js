
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=num;
	}	
}
document.getElementById("clear").addEventListener("click",clear);
	function clear(){
		printHistory("");
		printOutput("");
    }
    document.getElementById("backspace").addEventListener("click",backspace);
	function backspace(){
		var output=getOutput().toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
    }
    document.getElementById("1").addEventListener("click",number);
    document.getElementById("2").addEventListener("click",number);
    document.getElementById("3").addEventListener("click",number);
    document.getElementById("4").addEventListener("click",number);
    document.getElementById("5").addEventListener("click",number);
    document.getElementById("6").addEventListener("click",number);
    document.getElementById("7").addEventListener("click",number);
    document.getElementById("8").addEventListener("click",number);
    document.getElementById("9").addEventListener("click",number);
    document.getElementById("0").addEventListener("click",number);
    document.getElementById(".").addEventListener("click",number);
    document.getElementById("zeroes").addEventListener("click",()=>{
    	var output=getOutput().toString();
		output=output+"0"+"0";
		printOutput(output); 
	});
	document.getElementById("+").addEventListener("click",number);
	document.getElementById("-").addEventListener("click",number);
	document.getElementById("*").addEventListener("click",number);
	document.getElementById("/").addEventListener("click",number);
	document.getElementById("%").addEventListener("click",number);
    function number(){
	    var output=getOutput().toString();
		output=output+this.id;
		printOutput(output);
    }
    document.getElementById("equalto").addEventListener("click",()=>{
    	var output=getOutput();
    	printHistory(output);
		var num=eval(output);
		printOutput(num); 
	});