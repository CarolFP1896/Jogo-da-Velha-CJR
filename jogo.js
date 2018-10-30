let j=1;
let mat=[];
var win_x = 0;
var win_o = 0;
mat[0]=[];
mat[1]=[];
mat[2]=[];
var jogadas = [];
function mudaCor(){
        let c;
        let x = document.getElementsByClassName("center");
        let y = x[0].getElementsByTagName("div");
        if (a1==1){
            if (j%2==0) {
                y[0].style.backgroundImage="url('img/o1.png')";
                mat[0][0]='o';
                jogadas.push(1);
            }
            else{
                y[0].style.backgroundImage="url('img/x1.png')";
                mat[0][0]='x';
                jogadas.push(1);
            }
            a1=2;
            j++;
        }
        if (a2==1){
            if (j%2==0) {
                y[1].style.backgroundImage="url('img/o1.png')";
                mat[0][1]='o';
                jogadas.push(1);
            }
            else{
                y[1].style.backgroundImage="url('img/x1.png')";
                mat[0][1]='x';
                jogadas.push(1);
            }
            a2=2;
            j++;
        }
        if (a3==1){
            if (j%2==0) {
                y[2].style.backgroundImage="url('img/o1.png')";
                mat[0][2]='o';
                jogadas.push(1);
            }
            else{
                y[2].style.backgroundImage="url('img/x1.png')";
                mat[0][2]='x';
                jogadas.push(1);
            }
            a3=2;
            j++;
        }
        if (b1==1){
            if (j%2==0) {
                y[3].style.backgroundImage="url('img/o1.png')";
                mat[1][0]='o';
                jogadas.push(1);
            }
            else{
                y[3].style.backgroundImage="url('img/x1.png')";
                mat[1][0]='x';
                jogadas.push(1);
            }
            b1=2;
            j++;
        }
        if (b2==1){
            if (j%2==0) {
                y[4].style.backgroundImage="url('img/o1.png')";
                mat[1][1]='o';
                jogadas.push(1);
            }
            else{
                y[4].style.backgroundImage="url('img/x1.png')";
                mat[1][1]='x';
                jogadas.push(1);
            }
            b2=2;
            j++;
        }
        if (b3==1){
            if (j%2==0) {
                y[5].style.backgroundImage="url('img/o1.png')";
                mat[1][2]='o';
                jogadas.push(1);
            }
            else{
                y[5].style.backgroundImage="url('img/x1.png')";
                mat[1][2]='x';
                jogadas.push(1);
            }
            b3=2;
            j++;
        }
        if (c1==1){
            if (j%2==0) {
                y[6].style.backgroundImage="url('img/o1.png')";
                mat[2][0]='o';
                jogadas.push(1);
            }
            else{
                y[6].style.backgroundImage="url('img/x1.png')";
                mat[2][0]='x';
                jogadas.push(1);
            }
            c1=2;
            j++;
        }
        if (c2==1){
            if (j%2==0) {
                y[7].style.backgroundImage="url('img/o1.png')";
                mat[2][1]='o';
                jogadas.push(1);
            }
            else{
                y[7].style.backgroundImage="url('img/x1.png')";
                mat[2][1]='x';
                jogadas.push(1);
            }
            c2=2;
            j++;
        }
        if (c3==1){
            if (j%2==0) {
                y[8].style.backgroundImage="url('img/o1.png')";
                mat[2][2]='o';
                jogadas.push(1);
            }
            else{
                y[8].style.backgroundImage="url('img/x1.png')";
                mat[2][2]='x';
                jogadas.push(1);
            }
            c3=2;
            j++;
        }
        c=confere();
        if (c=='x'){
            alert("X venceu");
            win_x++;
            document.getElementById("x").innerHTML = win_x;
            reset();
        }
        else if (c=='o'){
            alert("O venceu");
            win_o++;
            document.getElementById("o").innerHTML = win_o;
            reset();
        } else if (jogadas.length == 9) {
            alert("Deu velha!");
            reset();
        }
}

function confere(){
    let i;
    for (i=0;i<3;i++){
        if (mat[i][0]==mat[i][1] && mat[i][1]==mat[i][2]){
            if (mat[i][0]!='')
                return mat[i][0];
        }
        if (mat[0][i]==mat[1][i] && mat[1][i]==mat[2][i]){
            if (mat[0][i]!='')
                return mat[0][i];
        }
    }
    if (mat[1][0]==mat[1][1] && mat[1][1]==mat[1][2]){
        if (mat[1][0]!='')
            return mat[1][0];
    }
    if (mat[0][0]==mat[1][1] && mat[1][1]==mat[2][2]){
        if (mat[0][0]!='')
            return mat[0][0];
    }
    if (mat[0][2]==mat[1][1] && mat[1][1]==mat[2][0]){
        if (mat[0][2])
            return mat[0][2];
    }
    return '';
    // if (mat[0][0]==mat[0][1] && mat[0][1]==mat[0][2]){
    //     if (mat[0][0]=='x'){
    //         alert("Deu certo");
    //         reset();
    //     }
    // }
    // reset();
}

function reset(){
    let i, q;
    let x = document.getElementsByClassName("center");
    let y = x[0].getElementsByTagName("div");
    for (i=0;i<9;i++){
        y[i].removeAttribute("style");
    }
    a1=0;a2=0;a3=0;
    b1=0;b2=0;b3=0;
    c1=0;c2=0;c3=0;
    j=1;
    c='';
    for (i=0;i<3;i++){
        for (q=0;q<3;q++)
            mat[i][q]='';
    }
    jogadas = [];
}

function resetPlacar() {
    win_o = 0;
    win_x = 0;
    document.getElementById("o").innerHTML = 0;
    document.getElementById("x").innerHTML = 0;
}