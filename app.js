function game()
{
    var array=["rock","papper","scissor"];
    var player_choice,cpu_choice_index,cpu_choice;
    var player_score=0,cpu_score=0;

    //to start the game
    document.querySelector(".play_btn").addEventListener("click",start_game);

    //for player's choices
    document.querySelector(".rocks").addEventListener("click",function(){
        play_game(array[0]);
    });
    document.querySelector(".pappers").addEventListener("click",function(){
        play_game(array[1]);
    });
    document.querySelector(".scissor").addEventListener("click",function(){
        play_game(array[2]);
    });

    function start_game()
    {
        //here the main window appears
        var intro_var=document.querySelector(".intro");
        var main_var=document.querySelector(".main");

        intro_var.classList.add("fadeOut");
        main_var.classList.add("fadeIn");
    }

    function play_game(choice)
    {
        //here we determine player and cpu choices
        player_choice=choice;
        cpu_choice_index=cpu_ch_fun(0,2);
        cpu_choice=array[cpu_choice_index];
        console.log("Player choice="+player_choice);
        console.log("Cpu choice="+cpu_choice);

        var hnd_coll=document.querySelectorAll(".hands img");
        for(i=0;i<hnd_coll.length;i++)
        {
            hnd_coll[i].addEventListener('animationend',function(){
                this.style.animation='';
            });
        }

       
        var pl_hnd=document.querySelector(".playerHand");
        var cpu_hnd=document.querySelector(".compHand");

        cpu_hnd.src="rock.png";
        pl_hnd.src="rock.png";

        var win=document.getElementById("winner");
        win.innerHTML="Choose an Option";
        pl_hnd.style.animation= "shakePlayer 2s ease";
        cpu_hnd.style.animation= "shakeCpu 2s ease";


        setTimeout(function(){
            compareHands();

        //here we update the scores
        document.getElementById("p_s").innerHTML=player_score;
        document.getElementById("c_s").innerHTML=cpu_score;
        },2000);
        
    }

    function cpu_ch_fun(min,max)
    {
        //here we calculate choice for cpu
        var num=Math.floor(Math.random()*(max-min +1)+min);
        return num;
    }

    function compareHands()
    {
        //here we determine the winner and update the images and update the winner text

        var pl_hnd=document.querySelector(".playerHand");
        var cpu_hnd=document.querySelector(".compHand");
        var win=document.getElementById("winner");

        if(player_choice==array[0] && cpu_choice==array[0])
        {
            pl_hnd.src="rock.png";
            cpu_hnd.src="rock.png";

            win.innerHTML="Draw!"
            console.log("Draw");
        }
        else if(player_choice==array[0] && cpu_choice==array[1])
        {
            pl_hnd.src="rock.png";
            cpu_hnd.src="paper.png";

            win.innerHTML="CPU Wins!"
            console.log("CPU wins");
            cpu_score++;
        }
        else if(player_choice==array[0] && cpu_choice==array[2])
        {
            pl_hnd.src="rock.png";
            cpu_hnd.src="scissors.png";

            win.innerHTML="Player Wins!"
            console.log("Player Wins");
            player_score++;
        }
        else if(player_choice==array[1] && cpu_choice==array[0])
        {
            pl_hnd.src="paper.png";
            cpu_hnd.src="rock.png";

            win.innerHTML="Player Wins!";
            console.log("Player Wins");
            player_score++;
        }
        else if(player_choice==array[1] && cpu_choice==array[1])
        {
            pl_hnd.src="paper.png";
            cpu_hnd.src="paper.png";

            win.innerHTML="Draw!";
            console.log("Draw");
        }
        else if(player_choice==array[1] && cpu_choice==array[2])
        {
            pl_hnd.src="paper.png";
            cpu_hnd.src="scissors.png";

            win.innerHTML="CPU Wins!";
            console.log("CPU Wins");
            cpu_score++;
        }
        else if(player_choice==array[2] && cpu_choice==array[0])
        {
            pl_hnd.src="scissors.png";
            cpu_hnd.src="rock.png";

            win.innerHTML="CPU Wins!";
            console.log("CPU Wins");
            cpu_score++;
        }
        else if(player_choice==array[2] && cpu_choice==array[1])
        {
            pl_hnd.src="scissors.png";
            cpu_hnd.src="paper.png";

            win.innerHTML="Player Wins!";
            console.log("Player Wins");
            player_score++;
        }
        else if(player_choice==array[2] && cpu_choice==array[2])
        {
            pl_hnd.src="scissors.png";
            cpu_hnd.src="scissors.png";

            win.innerHTML="Draw!";
            console.log("Draw");
        }
        return;
    }
    

}
game();