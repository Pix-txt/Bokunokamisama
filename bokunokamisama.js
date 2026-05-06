rock = document.getElementById('rock');
paper = document.getElementById('paper');
scissors = document.getElementById('scissors');
let currentmove= 0;
let roundwinner;
let roundwinner2;
score1 = 0;
score2 = 0

function playmove(moves){
    currentmove = moves;

    switch(currentmove){
            case 'rock':
                currentmove = 1;
                break;
            case 'scissors':
                currentmove = 2;
                break;
            case 'paper':
                currentmove = 3;
                break;          
        }
    document.getElementById('youhand').innerHTML = sethandimage(currentmove);
}

function roundstart(){
    oppmove = Math.floor((Math.random() * 3)+1);

    if(currentmove != 0){
        switch(oppmove){
            case 1:
                document.getElementById('opphand').innerHTML = 'rock';
                break;
            case 2:
                document.getElementById('opphand').innerHTML = 'scissors';
                break;
            case 3:
                document.getElementById('opphand').innerHTML = 'paper';
                break;
        }

        let match = oppmove + currentmove;
        roundresult(match)
        document.getElementById('opphand').innerHTML = sethandimage(oppmove);
        currentmove = 0;
        document.getElementById('yourscore').innerHTML = score1;
        document.getElementById('oppscore').innerHTML = score2;
    }
}

function roundresult(R){
    if(R % 2 == 0){
        roundwinner = biggernumber(oppmove, currentmove)
    }
    
    else{
        roundwinner = smallernumber(oppmove,currentmove)
    }

    document.getElementById('roundwins').innerHTML = roundwinner2;
}

function biggernumber(A,B){
    if(A>B){
        roundwinner2 = 'Player 2 won!!';
        score2 += 1
        return A;
    }
    else if(A == B){
        roundwinner2 = 'Draw...';
        return;
    }
    else{
        roundwinner2 = 'Player 1 won!!';
        score1 += 1
        return B;
    }
}

function smallernumber(A,B){
    if(A<B){
        roundwinner2 = 'Player 2 won!!';
        score2 += 1
        return A;
    }
    else if(A == B){
        roundwinner2 = 'draw';
        return;
    }
    else{
        roundwinner2 = 'Player 1 won!!';
        score1 += 1
        return B;
    }
}

function sethandimage(W){
    if(W == 1){
        let N = "<img src='images\\rockhands.png' alt='rock'>"
        return N
    }
    else if(W == 2){
        let N = "<img src='images\\scissorshands.png' alt='scissors'>"
        return N
    }
    else{
        let N = "<img src='images\\paperhands.png' alt='paper'>"
        return N
    }
}
