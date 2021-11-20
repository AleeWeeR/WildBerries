const getGoods = () =>{
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
        .then((response)=> response.json())
        
        //setting db to data key in local storage
        .then((data)=> localStorage.setItem('data', JSON.stringify(data)))
        
    }


    links.forEach(function(link) {
        
        link.addEventListener('click', (event)=>{
            event.preventDefault()
            getData()
        })
    })

    // localStorage.setItem('goods', JSON.stringify())  
    // const data = JSON.parse(localStorage.getItem('goods'))  
    // console.log(data)

    // localStorage.removeItem('goods')
    console.log(localStorage)




}


getGoods()


