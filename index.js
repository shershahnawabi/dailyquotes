const btnEl = document.getElementById ("btn");
const quoteEl=document.getElementById ("quote");

const apiKey= "OjcFIAMR5QbAakhZUJgY4A==LJETTDQtjwNLrlTP";

const options= {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getquote () {
    try {
    quoteEl.innerText = "Updating..."
    btnEl.disabled = true;
    btnEl.innerText = "loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Generate Quotes" 

    quoteEl.innerText = data [0].quote;
        
} catch (error) {
    quoteEl.innerText = "An error occured, try again later!";
    btnEl.disabled = false;
    btnEl.innerText = "Generate Quotes" 
    console.log(error);
    } 
}
btnEl.addEventListener("click", getquote);