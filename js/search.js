const search = function(){
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    // input.addEventListener('input', (eve) => {
    //     console.log(eve.target.value);
    // })

    //logging search result to a console
    searchBtn.addEventListener('click', () => {
        console.log(input.value);
    })

}

search();