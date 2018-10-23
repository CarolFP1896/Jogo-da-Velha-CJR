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
            } else {
                y[0].style.backgroundImage="url('img/x.png')";
                x.push(1);
            }
            a1=2;
            j++;
        }
        if (a2==1){
            if (j%2==0) {
                y[1].style.backgroundImage="url('img/o.png')";
                o.push(2);
            } else {
                y[1].style.backgroundImage="url('img/x.png')";
                x.push(2);
            }
            a2=2;
            j++;
        }
        if (a3==1){
            if (j%2==0) {
                y[2].style.backgroundImage="url('img/o.png')";
                o.push(3);
            } else {
                y[2].style.backgroundImage="url('img/x.png')";
                x.push(3);
            }
            a3=2;
            j++;
        }
        if (b1==1){
            if (j%2==0) {
                y[3].style.backgroundImage="url('img/o.png')";
                o.push(4);
            } else {
                y[3].style.backgroundImage="url('img/x.png')";
                x.push(4);
            }
            b1=2;
            j++;
        }
        if (b2==1){
            if (j%2==0) {
                y[4].style.backgroundImage="url('img/o.png')";
                o.push(5);
            } else {
                y[4].style.backgroundImage="url('img/x.png')";
                x.push(5);
            }
            b2=2;
            j++;
        }
        if (b3==1){
            if (j%2==0) {
                y[5].style.backgroundImage="url('img/o.png')";
                o.push(6);
            } else {
                y[5].style.backgroundImage="url('img/x.png')";
                x.push(6);
            }
            b3=2;
            j++;
        }
        if (c1==1){
            if (j%2==0) {
                y[6].style.backgroundImage="url('img/o.png')";
                o.push(7);
            } else {
                y[6].style.backgroundImage="url('img/x.png')";
                x.push(7);
            }
            c1=2;
            j++;
        }
        if (c2==1){
            if (j%2==0) {
                y[7].style.backgroundImage="url('img/o.png')";
                o.push(8);
            } else {
                y[7].style.backgroundImage="url('img/x.png')";
                x.push(8);
            }
            c2=2;
            j++;
        }
        if (c3==1){
            if (j%2==0) {
                y[8].style.backgroundImage="url('img/o.png')";
                o.push(9);
            } else {
                y[8].style.backgroundImage="url('img/x.png')";
                x.push(9);
            }
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