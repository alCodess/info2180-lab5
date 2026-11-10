window.addEventListener("DOMContentLoaded", function () {
    const lookupButton = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");
    
    lookupButton.addEventListener("click", function () {
        const country = countryInput.value.trim();

        fetch("world.php?country=" + encodeURIComponent(country))
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
    });
});