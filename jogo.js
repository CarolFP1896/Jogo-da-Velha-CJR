let j=1;
let mat=[];
mat[0]=[];
mat[1]=[];
mat[2]=[];
function mudaCor(){
        let c;
        let x = document.getElementsByClassName("center");
        let y = x[0].getElementsByTagName("div");
    
        if (a1==1){
            if (j%2==0) {
                y[0].style.backgroundImage="url('img/o.png')";
                mat[0][0]='o';
            }
            else{
                y[0].style.backgroundImage="url('img/x.png')";
                mat[0][0]='x';
            }
            a1=2;
            j++;
        }
        if (a2==1){
            if (j%2==0) {
                y[1].style.backgroundImage="url('img/o.png')";
                mat[0][1]='o';
            }
            else{
                y[1].style.backgroundImage="url('img/x.png')";
                mat[0][1]='x';
            }
            a2=2;
            j++;
        }
        if (a3==1){
            if (j%2==0) {
                y[2].style.backgroundImage="url('img/o.png')";
                mat[0][2]='o';
            }
            else{
                y[2].style.backgroundImage="url('img/x.png')";
                mat[0][2]='x';
            }
            a3=2;
            j++;
        }
        if (b1==1){
            if (j%2==0) {
                y[3].style.backgroundImage="url('img/o.png')";
                mat[1][0]='o';
            }
            else{
                y[3].style.backgroundImage="url('img/x.png')";
                mat[1][0]='x';
            }
            b1=2;
            j++;
        }
        if (b2==1){
            if (j%2==0) {
                y[4].style.backgroundImage="url('img/o.png')";
                mat[1][1]='o';
            }
            else{
                y[4].style.backgroundImage="url('img/x.png')";
                mat[1][1]='x';
            }
            b2=2;
            j++;
        }
        if (b3==1){
            if (j%2==0) {
                y[5].style.backgroundImage="url('img/o.png')";
                mat[1][2]='o';
            }
            else{
                y[5].style.backgroundImage="url('img/x.png')";
                mat[1][2]='x';
            }
            b3=2;
            j++;
        }
        if (c1==1){
            if (j%2==0) {
                y[6].style.backgroundImage="url('img/o.png')";
                mat[2][0]='o';
            }
            else{
                y[6].style.backgroundImage="url('img/x.png')";
                mat[2][0]='x';
            }
            c1=2;
            j++;
        }
        if (c2==1){
            if (j%2==0) {
                y[7].style.backgroundImage="url('img/o.png')";
                mat[2][1]='o';
            }
            else{
                y[7].style.backgroundImage="url('img/x.png')";
                mat[2][1]='x';
            }
            c2=2;
            j++;
        }
        if (c3==1){
            if (j%2==0) {
                y[8].style.backgroundImage="url('img/o.png')";
                mat[2][2]='o';
            }
            else{
                y[8].style.backgroundImage="url('img/x.png')";
                mat[2][2]='x';
            }
            c3=2;
            j++;
        }

        c=confere();
        if (c=='x'){
            alert("X venceu");
            reset();
        }
        else if (c=='o'){
            alert("O venceu");
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
}