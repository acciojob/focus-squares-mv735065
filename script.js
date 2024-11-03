//your JS code here. If required.

let boxes=document.querySelectorAll(".square");

for(let i=0;i<boxes.length;i++){
	let box=boxes[i];
	box.addEventListener('mouseover',(event)=>{
		for(let j=0;j<boxes.length;j++){
			if(box!=boxes[j]) boxes[j].style.backgroundColor = '#6F4E37';
		}
	})
	box.addEventListener('mouseout',(event)=>{
		for(let j=0;j<boxes.length;j++){
			 boxes[j].style.backgroundColor = '#E6E6FA';
		}
		
	})
	
}


