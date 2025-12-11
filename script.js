let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const getcompchoice=()=>{
    const options =["rock","paper","scissor"];
    const  randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawgame=()=>{
    msg.innerText="Game was draw. Play again."
    msg.style.backgroundColor = "#22223b";
}
const playgame=(userchoice)=>{

    const compchoice=getcompchoice();
    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin= compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper")
        {
            userwin= compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    

};

const showwinner=(userwin, userchoice,compchoice)=>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win 😁! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "#8ac926";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lost 🥲! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "#d00000";
    }
}

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})

