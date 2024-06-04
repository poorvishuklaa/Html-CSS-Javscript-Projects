let meme=document.getElementById("meme");
let title=document.getElementById("title");
let getMemeBtn=document.getElementById("GetMemeBtn");
//API URL
let url="https://meme-api.com/gimme";
//array of subreddits of your choice
let subreddits=["catmemes","wholesomemes","dogmemes","me_irl"];
//function to get random meme
let getMeme=()=>{
    let randomSubreddit=subreddits[Math.floor(Math.random()*subreddits.length)];
    fetch(url+randomSubreddit)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        let memeImg=new Image();
        memeImg.onload=()=>{
            meme.src=data.url;
        }
        memeImg.src=data.url;
        title.innerHTML=data.title;
    });

};
getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);