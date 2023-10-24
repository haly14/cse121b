import { fetchData } from './api.js';

const apiUrl = "https://www.carboninterface.com/api/v1/estimates";
const apiKey = "h3JDvUjWW63J6UNG3vuyg";

const statesByRegion = {
    west: ["wa", "or", "ca", "nv", "ak", "hi", "az", "ut", "id"],
    midwest: ["il", "in", "ia", "ks", "mi", "mn", "mo", "ne", "nd", "oh", "sd", "wi"],
    south: ["al", "ar", "fl", "ga", "ky", "la", "ms", "nc", "sc", "tn", "tx", "ok"],
    eastCoast: ["ct", "de", "dc", "me", "md", "ma", "nh", "nj", "ny", "pa", "ri", "vt", "va", "wv"]
};

document.getElementById("fetchData").addEventListener("click", () => {
    const selectedRegion = document.getElementById("regionSelect").value;

    if (statesByRegion[selectedRegion]) {
        const selectedStates = statesByRegion[selectedRegion];

        // Fetch and display data for each state in the selected region
        Promise.all(selectedStates.map(state => {
            const requestData = {
                type: "electricity",
                electricity_unit: "mwh",
                electricity_value: 42,
                country: "us",
                state: state
            };

            // Fetch data for each state
            return fetchData(apiUrl, apiKey, requestData);
        }))
        .then(dataArray => {
            // Process the data for each state and display it
            const resultDiv = document.getElementById("result");
            let resultHTML = "<p>Carbon Emissions:</p><ul>";

            dataArray.forEach((data, index) => {
                if (data && data.data && data.data.attributes) {
                    const attributes = data.data.attributes;
                    const carbonGrams = attributes.carbon_g;
                    resultHTML += `<li>State: ${selectedStates[index]}</li>`;
                    resultHTML += `<li>Grams: ${carbonGrams} g</li>`;
                    resultHTML += "<hr>"; // Add a separator
                } else {
                    resultHTML += `<li>State: ${selectedStates[index]}</li>`;
                    resultHTML += "Error: Unable to fetch data.";
                    resultHTML += "<hr>"; // Add a separator
                }
            });

            resultHTML += "</ul>";
            resultDiv.innerHTML = resultHTML;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    } else {
        alert(`Invalid region: ${selectedRegion}. Please select a valid region from the list.`);
    }
});