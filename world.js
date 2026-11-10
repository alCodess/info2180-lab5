window.addEventListener("DOMContentLoaded", function () {
    const lookupButton = document.getElementById("lookup");
    const lookupCitiesButton = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");
    
    function getData(extra) {
        const country = countryInput.value.trim();
        const url = "world.php?country=" + encodeURIComponent(country) + extra;

        fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Request failed: " + response.status);
            }
            return response.text();
        })
        .then(function (data) {
            resultDiv.innerHTML = data;
        })
        .catch(function (error) {
            resultDiv.innerHTML = "<p>Something went wrong: " + error.message + "</p>";
        });
    }

    lookupButton.addEventListener("click", function () {
        getData("");
    });

    lookupCitiesButton.addEventListener("click", function () {
        getData("&lookup=cities");
    });
});