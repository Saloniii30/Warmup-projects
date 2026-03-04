async function getjoke(){
    const jokeElement=document.getElementById("joke");
    try{
        const response= await fetch("https://official-joke-api.appspot.com/random_joke");
        const data= await response.json()
        jokeElement.innerHTML=`${data.setup} <br><br> ${data.punchline}`;
    }
    catch(error){
        jokeElement.innerHTML="Oops!! Failed to fetch joke";

    }
}