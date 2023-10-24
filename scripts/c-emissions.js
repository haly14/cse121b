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

        const requestData = {
            type: "electricity",
            electricity_unit: "mwh",
            electricity_value: 42,
            country: "us",
            state: selectedStates
        };

        // Use the fetchData function from the API module
        fetchData(apiUrl, apiKey, requestData)
          .then(data => {
              displayResult(data);
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
    } else {
        alert(`Invalid region: ${selectedRegion}. Please select a valid region from the list.`);
    }
});

function displayResult(data) {
    const resultDiv = document.getElementById("result");

    if (data && data.data && data.data.attributes) {
        const attributes = data.data.attributes;
        const carbonGrams = attributes.carbon_g;
        const carbonPounds = attributes.carbon_lb;
        const carbonKilograms = attributes.carbon_kg;
        const carbonMetricTons = attributes.carbon_mt;

        resultDiv.innerHTML = `
            <p>Carbon Emissions:</p>
            <ul>
                <li>Grams: ${carbonGrams} g</li>
                <li>Pounds: ${carbonPounds} lb</li>
                <li>Kilograms: ${carbonKilograms} kg</li>
                <li>Metric Tons: ${carbonMetricTons} metric tons</li>
            </ul>
        `;
    } else {
        resultDiv.innerHTML = "Error: Unable to fetch data.";
    }
}