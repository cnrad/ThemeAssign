/*
#17161F,
#CCCCCC,
#1A1A27,
#5C5C87,
#61D0FF,
*/


document.body.style.background = "#000000";
document.body.style.color = "#FFF";
document.body.style.caretColor = "#FFF";

//override caret color
let mqCursorNew = document.createElement('style')
mqCursorNew.innerHTML = `
  .mq-cursor {
    border-left: 1px solid #FFFFFF !important;
  }
`
document.body.append(mqCursorNew);


//
//head -------------------------
//

//assignment title 
document.querySelectorAll(".css-f75khf").forEach(
	(el) => {
		el.style.color = "#FFF";
	}
);

let overrideTopColor = document.createElement('style')
overrideTopColor.innerHTML = `
	.css-6xh4hr, .css-rcesf5 {
    	color: #FFFFFF !important;
  	}
`
document.body.append(overrideTopColor);

document.querySelectorAll(".waQBox > .qAlert").forEach(
	(el) => {
		el.style.background = "#444478";
	}
);

document.querySelectorAll(".qMessage").forEach(
	(el) => {
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(".revertState").forEach(
	(el) => {
		el.style.color = "#61D0FF";
	}
);

document.querySelectorAll(".css-lal50k").forEach(
	(el) => {
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(".css-1enip6m").forEach(
	(el) => {
		el.style.backgroundColor = "#1A1A27";
		el.style.borderRadius = "10px";
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(".css-6xh4hr, .css-rcesf5").forEach(
	(el) => {
		el.style.color = "#FFFFFF !important";
	}
);

document.querySelectorAll(".css-xd4348").forEach(
	(el) => {
		el.childNodes.forEach((child) => {child.style.color = "#FFFFFF !important"});
	}
);

//total score
document.querySelectorAll(".css-l1j587").forEach(
	(el) => {
		el.style.backgroundColor = "#1A1A27";
	}
);
document.querySelectorAll(".css-61mckp, .css-1w47i63").forEach(
	(el) => {
		el.style.backgroundColor = "#5C5C87";
	}
);

//progress questions containers for each
document.querySelectorAll(".css-1aunjf4").forEach(
	(el) => {
		el.style.backgroundColor = "#1A1A27";
		// el.style.border = "1px solid #CCCCCC"
		// el.style.borderRadius = "10px";
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(".css-1xtak44").forEach(
	(el) => {
		el.style.backgroundColor = "#222238";
		el.style.color = "#FFFFFF";
	}
);

	//inner cont ^^
	document.querySelectorAll(".css-19dp8pl").forEach(
		(el) => {
			el.style.backgroundColor = "#343657";
			el.style.color = "#FFFFFF";
			el.style.width = "100%";
			el.style.height = "100%";
			el.style.padding = "0.4rem 0.6rem 1.875rem";
			el.style.margin = "0";
		}
	);

	document.querySelectorAll(".css-ivbv8a").forEach(
		(el) => {
			el.style.color = "#FFFFFF";
		}
	);



//
//body + questions --------------------------------------------
//

document.querySelectorAll("img").forEach(
	(el) => {
		if(el.src.includes("watex") || el.src.includes("lateximages")){
			el.style.filter = "invert(100)";
		};
	}
);

document.querySelectorAll(".css-1enip6m").forEach(
	(el) => {
		el.style.backgroundColor = "#1A1A27";
		el.style.borderRadius = "10px";
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(".css-mzz8f4-BaseStyledButton").forEach(
	(el) => {
		el.style.color = "#61D0FF";
	}
);

document.querySelectorAll(".standard").forEach(
	(el) => {
		el.style.background = "#222238";
		el.style.color = "#FFFFFF";
	}
);

document.querySelectorAll(`[title="Read It"], [title="Watch It"], [title="Master It"]`).forEach(
	(el) => {
		el.style.filter = "invert(100)";
	}
);

document.querySelectorAll(`.text`).forEach(
	(el) => {
		if(el.innerHTML.includes("You have now completed the Master It.")) el.parentElement.style.backgroundColor = "#252357";
	}
);

document.querySelectorAll(`[title="Need Help?"]`).forEach(
	(el) => {
		var parentElem = el.parentElement;
		parentElem.style.display = "flex";
		parentElem.style.flexDirection = "row";
		parentElem.style.gap = "10px";

		let newElem = document.createElement("div");
		newElem.innerHTML = "Need Help?";
		newElem.style.color = "#FFFFFF";
		newElem.style.fontWeight = "bold";
	 	newElem.style.boxSizing = "border-box"

		parentElem.insertBefore(newElem, parentElem.childNodes[0]);
		el.remove();
	}
);

document.querySelectorAll(`.qButtons`).forEach(
	(el) => {
		el.style.backgroundColor = "#222238";
		el.style.padding = "0.6em 0.6em 0.6em 0.6em";
	}
);

document.querySelectorAll(`.qUtility`).forEach(
	(el) => {
		el.style.borderRadius = "10px";
		el.style.padding = "3px 1em 21px 2.6em";
	}
);

document.querySelectorAll(`.sButton`).forEach(
	(el) => {
		el.style.border = "solid 1px #fff";
		el.style.background = "#5C5C87";
		el.style.borderRadius = "5px";
		el.style.color = "#ffffff";
		el.style.font = "sans-serif";
		el.style.fontWeight = "bold";
		el.style.padding = "10px";
		el.style.transition = "color 0.25s ease-in-out, background-color 0.25s ease-in-out"

		el.addEventListener('mouseover', () => {
			el.style.background = "#FFFFFF";
			el.style.color = "#17161F";
		})
		el.addEventListener('mouseleave', () => {
			el.style.background = "#5C5C87";
			el.style.color = "#ffffff";
		})
	}
);

document.querySelectorAll(`.mq-editable-field`).forEach(
	(el) => {
		el.style.border = "solid 1px #fff";
	}
);

document.querySelectorAll(`[type="text"]`).forEach(
	(el) => {
		el.style.backgroundColor = "#222238";
		el.style.color = "#FFFFFF";
		el.style.border = "solid 1px #ffffff";
		el.style.padding = "5px";
	}
);

document.querySelectorAll(`.disabled`).forEach(
	(el) => {
		el.style.background = "#5C5C87";
		el.style.color = "#CCCCCC";
	}
);


document.querySelectorAll(`.comp_header_title`).forEach(
	(el) => {
		el.style.color = "#CCCCCC";
	}
);

document.querySelectorAll(`[style="color: red"], [color="red"]`).forEach(
	(el) => {
		el.style.color = "#61D0FF";
	}
);

document.querySelectorAll(`.css-mlv4jg`).forEach(
	(el) => {
		el.style.backgroundColor = "#17161F";
	}
);

document.querySelectorAll(`.css-2igf4k`).forEach(
	(el) => {
		el.style.backgroundColor = "#5389e0";
		el.style.border = "0.0625rem solid #5389e0";
		el.style.padding = "1em";
	}
);

document.querySelectorAll(`.css-10ba0kl`).forEach(
	(el) => {
		el.style.border = "0.0625rem solid #5389e0";
		el.style.backgroundColor = "#17161F";
		el.style.color = "#FFFFFF";
		el.style.padding = "1em";
	}
);

