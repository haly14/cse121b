const apiUrl = "https://www.carboninterface.com/api/v1/estimates";
const apiKey = "h3JDvUjWW63J6UNG3vuyg";

document.getElementById("fetchData").addEventListener("click", () => {
    const requestData = {
        type: "electricity",
        electricity_unit: "mwh",
        electricity_value: 42,
        country: "us",
        state: "fl"
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        displayResult(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
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
            <ul/>
        `;
    }
    else {
        resultDiv.innerHTML = "Error: Unable to fetch data.";
    }
}