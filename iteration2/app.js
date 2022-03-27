window.onload = () => {
    const button = document.querySelector('#button');
    button.addEventListener('click', () => fetchInput());
}

const fetchInput = async () => {
    const inputText = document.querySelector('#input-text')
    const fetchData = await fetch(`https://api.nationalize.io?name=${inputText.value}`);
    const dataJson = await fetchData.json();

    let {country} = dataJson;

    country.forEach(element => {
        console.log(element)
        const probability = document.createElement('p');
        const deleteButton = document.createElement('button');

        probability.textContent = `${inputText.value} tiene una probabilidad del ${element.probability} de ser de ${element.country_id}`;
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', () => deleteText(probability))
        document.body.appendChild(probability);
        probability.appendChild(deleteButton)
    });
}

const deleteText = (text) => {
    text.remove()
}