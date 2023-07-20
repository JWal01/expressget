console.log('script sourced.');

function getQuotes(){
  axios.get('/quotes').then((response) => {
    console.log("success", response);
    let quotesFromServer = response.data
    renderToDom(quotesFromServer)
 // good indication of end of route is })
  }) .catch((error) => {
    console.log(error);
    alert("Something went Wrong")
  })
}

//getQuotes();

function renderToDom(quotes){
  let outputList = document.querySelector('#output')
  outputList.innerHTML = ''
  //clear out innerHTML.  so it does not stack up and repear

  for(let quote of quotes) {
    outputList.innerHTML += `
      <p> ${quote.text}  -  ${quote.author} </p>
    `
  }
}