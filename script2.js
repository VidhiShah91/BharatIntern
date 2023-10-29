document.getElementById("convertButton").addEventListener("click", function () {
    const celsiusValue = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheitValue = parseFloat(document.getElementById("fahrenheitInput").value);

    if (!isNaN(celsiusValue)) {
        const fahrenheitResult = (celsiusValue * 9/5) + 32;
        document.getElementById("fahrenheitInput").value = fahrenheitResult.toFixed(2);
    }

    if (!isNaN(fahrenheitValue)) {
        const celsiusResult = (fahrenheitValue - 32) * 5/9;
        document.getElementById("celsiusInput").value = celsiusResult.toFixed(2);
    }
});
