//1.1
window.onload = () => {
    fetchData()
    
}

const fetchData = async () => {
    const data = await fetch('https://api.agify.io?name=michael');
    const dataJson = await data.json();   
    console.log(dataJson)
}

