let j=1;

function mudaCor(){
        let x = document.getElementsByClassName("center");
        let y = x[0].getElementsByTagName("div");
    
        if (a1==1){
            if (j%2==0) y[0].style.backgroundImage="url('img/o.png')";
            else y[0].style.backgroundImage="url('img/x.png')";
            a1=2;
            j++;
        }
        if (a2==1){
            if (j%2==0) y[1].style.backgroundImage="url('img/o.png')";
            else y[1].style.backgroundImage="url('img/x.png')";
            a2=2;
            j++;
        }
        if (a3==1){
            if (j%2==0) y[2].style.backgroundImage="url('img/o.png')";
            else y[2].style.backgroundImage="url('img/x.png')";
            a3=2;
            j++;
        }
        if (b1==1){
            if (j%2==0) y[3].style.backgroundImage="url('img/o.png')";
            else y[3].style.backgroundImage="url('img/x.png')";
            b1=2;
            j++;
        }
        if (b2==1){
            if (j%2==0) y[4].style.backgroundImage="url('img/o.png')";
            else y[4].style.backgroundImage="url('img/x.png')";
            b2=2;
            j++;
        }
        if (b3==1){
            if (j%2==0) y[5].style.backgroundImage="url('img/o.png')";
            else y[5].style.backgroundImage="url('img/x.png')";
            b3=2;
            j++;
        }
        if (c1==1){
            if (j%2==0) y[6].style.backgroundImage="url('img/o.png')";
            else y[6].style.backgroundImage="url('img/x.png')";
            c1=2;
            j++;
        }
        if (c2==1){
            if (j%2==0) y[7].style.backgroundImage="url('img/o.png')";
            else y[7].style.backgroundImage="url('img/x.png')";
            c2=2;
            j++;
        }
        if (c3==1){
            if (j%2==0) y[8].style.backgroundImage="url('img/o.png')";
            else y[8].style.backgroundImage="url('img/x.png')";
            c3=2;
            j++;
        }

}


function reset(){
    let i;
    let x = document.getElementsByClassName("center");
    let y = x[0].getElementsByTagName("div");
    for (i=0;i<9;i++){
        y[i].removeAttribute("style");
    }
    a1=0;a2=0;a3=0;
    b1=0;b2=0;b3=0;
    c1=0;c2=0;c3=0;
    j=1;
}