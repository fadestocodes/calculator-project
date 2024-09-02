function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function clear(element){
    element.textContent = " ";
}




function createCalc(){
    const container = document.createElement("div")
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.width = "650px";
    container.style.height = "900px";
    container.style.justifyContent = "space-around";
    container.style.borderRadius="15px";
    container.style.border = "2px solid black";
    container.style.padding = "5px";
    buttonsArray = ["CLEAR", "+", "7", '8', '9', "-", '4','5','6',"/",'1','2','3',"*",'0','00',".","="];
    


    for (let i=0;i<6;i++){
        const row = document.createElement("div");
        row.style.display = 'flex';
        row.style.justifyContent = 'space-around';
        row.style.gap='5px';
        row.style.flex="1";
        row.style.padding = "5px 5px";


        if (i===0){
            for (let j=0;j<1;j++){


                const screen = document.createElement("div");
                screen.style.flex = "1";
                // button.style.height="75px";
               
                screen.style.border = "2px solid black";
                screen.className = "screen";
    
                row.appendChild(screen);
        
    
            }

        }

        else if (i===1){
            for (let j=0;j<2;j++){

                if (j===0){
                    const button = document.createElement("button");
                    button.style.flex="3";
                    button.textContent="CLEAR";
                    button.style.fontFamily = "Helvetica";
                    button.style.fontSize = "30px";
                    button.className = buttonsArray[0];
        
                    row.appendChild(button);
                } else {
                    const button = document.createElement("button");
                    button.style.flex="1";
                    button.textContent="+";
                    button.style.fontFamily = "Helvetica";
                    button.style.fontSize = "30px";
                    button.className = buttonsArray[1];
                    row.appendChild(button);
                }

        
    
            }
        }
        
        else if (i===2) {
        
            for (let j=0;j<4;j++){


                const button = document.createElement("button");
                button.style.flex="4";
                button.className = buttonsArray[j+2];
                button.textContent=buttonsArray[j+2];
                button.style.fontFamily = "Helvetica";
                button.style.fontSize = "30px";

                row.appendChild(button);
        

            }
        }

        else if (i===3) {
        
            for (let j=0;j<4;j++){


                const button = document.createElement("button");
                button.style.flex="4";
                button.className = buttonsArray[j+6];
                button.textContent=buttonsArray[j+6];
                button.style.fontFamily = "Helvetica";
                button.style.fontSize = "30px";

                row.appendChild(button);
        

            }
        }

        else if (i===4) {
        
            for (let j=0;j<4;j++){


                const button = document.createElement("button");
                button.style.flex="4";
                button.className = buttonsArray[j+10];
                button.textContent=buttonsArray[j+10];
                button.style.fontFamily = "Helvetica";
                button.style.fontSize = "30px";

                row.appendChild(button);
        

            }
        }

        else if (i===5) {
        
            for (let j=0;j<4;j++){


                const button = document.createElement("button");
                button.style.flex="4";
                button.className = buttonsArray[j+14];
                button.textContent=buttonsArray[j+14];
                button.style.fontFamily = "Helvetica";
                button.style.fontSize = "30px";

                row.appendChild(button);
        

            }
        }

        container.appendChild(row);
    }


    document.body.appendChild(container);
   
};


createCalc();