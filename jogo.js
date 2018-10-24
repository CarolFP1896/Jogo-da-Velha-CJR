let j=1;
let o=[];
let x=[];
let ganhar=[[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
function mudaCor(){
        let i = document.getElementsByClassName("center");
        let y = i[0].getElementsByTagName("div");
    
        if (a1==1){
            if (j%2==0) {
                y[0].style.backgroundImage="url('img/o.png')";
                o.push(1);
                checar(o);
            } else {
                y[0].style.backgroundImage="url('img/x.png')";
                x.push(1);
                checar(x);
            }
            a1=2;
            j++;
        }
        if (a2==1){
            if (j%2==0) {
                y[1].style.backgroundImage="url('img/o.png')";
                o.push(2);
                checar(o);
            } else {
                y[1].style.backgroundImage="url('img/x.png')";
                x.push(2);
                checar(x);
            }
            a2=2;
            j++;
        }
        if (a3==1){
            if (j%2==0) {
                y[2].style.backgroundImage="url('img/o.png')";
                o.push(3);
                checar(o);
            } else {
                y[2].style.backgroundImage="url('img/x.png')";
                x.push(3);
                checar(x);
            }
            a3=2;
            j++;
        }
        if (b1==1){
            if (j%2==0) {
                y[3].style.backgroundImage="url('img/o.png')";
                o.push(4);
                checar(o);
            } else {
                y[3].style.backgroundImage="url('img/x.png')";
                x.push(4);
                checar(x);
            }
            b1=2;
            j++;
        }
        if (b2==1){
            if (j%2==0) {
                y[4].style.backgroundImage="url('img/o.png')";
                o.push(5);
                checar(o);
            } else {
                y[4].style.backgroundImage="url('img/x.png')";
                x.push(5);
                checar(x);
            }
            b2=2;
            j++;
        }
        if (b3==1){
            if (j%2==0) {
                y[5].style.backgroundImage="url('img/o.png')";
                o.push(6);
                checar(o);
            } else {
                y[5].style.backgroundImage="url('img/x.png')";
                x.push(6);
                checar(x);
            }
            b3=2;
            j++;
        }
        if (c1==1){
            if (j%2==0) {
                y[6].style.backgroundImage="url('img/o.png')";
                o.push(7);
                checar(o);
            } else {
                y[6].style.backgroundImage="url('img/x.png')";
                x.push(7);
                checar(x);
            }
            c1=2;
            j++;
        }
        if (c2==1){
            if (j%2==0) {
                y[7].style.backgroundImage="url('img/o.png')";
                o.push(8);
                checar(o);
            } else {
                y[7].style.backgroundImage="url('img/x.png')";
                x.push(8);
                checar(x);
            }
            c2=2;
            j++;
        }
        if (c3==1){
            if (j%2==0) {
                y[8].style.backgroundImage="url('img/o.png')";
                o.push(9);
                checar(o);
            } else {
                y[8].style.backgroundImage="url('img/x.png')";
                x.push(9);
                checar(x);
            }
            c3=2;
            j++;
        }
        checarVelha();
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
    while (o.length > 0) {
        o.pop();
    }
    while (x.length > 0) {
        x.pop();
    }
    j=1;
}

function checar(vetor){
    var flag = 0;
    for(var i=0,l=0;l<ganhar.length;l++) {
        for(var c=0;c<ganhar[l].length;c++) {
            for(var r=0;r<vetor.length;r++) {
                if (ganhar[l][c] === vetor[r] && ++i===3 && (j%2)===0) {
                    flag=1;   
                } else if (ganhar[l][c] === vetor[r] && i===3){
                    flag=2;
                }
            }
        }
        i=0;
    }
    if(flag==1) {
        alert("O ganhou!!");
        reset();
    } else if(flag==2){
        alert("X ganhou!!");
        reset();
    }
}

function checarVelha(){
    if ((x.length + o.length)==9){
        alert("Deu velha");
        reset();
    }
}