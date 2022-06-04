let values = document.querySelector(".containerValues");
let kyanqer = document.querySelector("#kyanqer");
let keracner = document.querySelector("#keracner");

let kerac = 0;
keracner.value = kerac;
let kyanq = 5;
kyanqer.value = kyanq;

let xaxadasht = document.querySelector(".xaxadasht");
let heros = document.querySelector(".heros");
let herosX = 0;
let herosY = 0;

let mirgCount = 0;

document.addEventListener("keydown", (e)=>{

    let Mirg;
    let MirgX;
    let MirgY;
    if (mirgCount == 1) {
        Mirg = document.querySelector("img");
        MirgX = +Mirg.style.left.substr(0, Mirg.style.left.length-2);
        MirgY = +Mirg.style.top.substr(0, Mirg.style.top.length-2);;
    }
    let deltaX = MirgX - herosX;
    
    // աջ
    if(e.which == 39){
        herosX+=10;
        if(herosX >= xaxadasht.offsetWidth-100){
            herosX = 0;
            herosY = 0;
            kyanq--;       
        }
 
        let deltaX2 = herosX - MirgX;
        if(MirgY == herosY && deltaX2>=-10 && deltaX2<=0){
            mirgCount = 0;
            Mirg.remove();
            kerac++;
        }
    }
    // ձախ
    else if(e.which == 37){
        herosX-=10;
        if(herosX < 0){
            herosX = 0;
            herosY = 0;
            kyanq--;
        }

        if(MirgY == herosY && deltaX>=-10 && deltaX<=0){
            mirgCount = 0;
            Mirg.remove();
            kerac++;
        }
    }
    // վերև
    else if(e.which == 38){
        herosY-=10;
        if(herosY < 0){
            herosX = 0;
            herosY = 0;
            kyanq--;
        }
        let deltaY = MirgY - herosY;
        if(MirgX == herosX && deltaY < 10 && deltaY >= 0){
            mirgCount = 0;
            Mirg.remove();
            kerac++;
        }
    }
    // ներքև
    else if(e.which == 40){
        herosY+=10;
        if(herosY > xaxadasht.offsetHeight-102.2){
            herosX = 0;
            herosY = 0;
            kyanq--;
        }
        let deltaY2 = herosY - MirgY;
        if(MirgX == herosX && deltaY2 < 10 && deltaY2 >= 0){
            mirgCount = 0;
            Mirg.remove();
            kerac++;
        }
    }

    let Fmirg = setInterval(() => {
        if(mirgCount == 0){
            let deltaX = Math.floor(Math.random()*xaxadasht.offsetWidth - 200);
            deltaX = deltaX - (deltaX%10);
            let deltaY = Math.floor(Math.random()*xaxadasht.offsetHeight - 80);
            deltaY = deltaY - (deltaY%10);
            if(deltaX<0){
                deltaX = 0;
            }
            if(deltaY<0){
                deltaY = 0;
            }
            if(deltaY>700){
                deltaY = 700;
            }
            let mirg = document.createElement("img");
            mirg.style.width = "100px";
            mirg.style.borderRadius = "90%";
            mirg.src = "https://gnel.am/images/product/13/08d6056dc8b831247660d75ea542a7ed.jpg";
            mirg.style.top = deltaY + "px";
            mirg.style.left = deltaX + "px";
            mirg.style.position = "absolute";
            console.log(deltaX);
            console.log(deltaY);
            xaxadasht.appendChild(mirg);
            mirgCount++;
        }
    }, 500)

    if(kyanq < 0){
        kyanq = 5;
        kerac = 0;
        alert("Game Over");
    }

    kyanqer.value = kyanq;   
    keracner.value = kerac;
    heros.style.top = herosY + "px";
    heros.style.left = herosX + "px";
})