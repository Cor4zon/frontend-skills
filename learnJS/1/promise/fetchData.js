const fetchData = async (code) => {
    try {
        const result = await fetch("https://restcountries.com/v3.1/alpha/" + code);
        console.log(result);

        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


const fetchCountryAndNeigbors = async () => {
    const country = await fetchData("col");

    const other = Promise.all(
        country[0].borders.map(border => {
            fetchData(border)
        })
    );
    console.log(country);
}

fetchCountryAndNeigbors();
