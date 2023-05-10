const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);
    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit;
    }
    const fehToCel = (fehr) => {
        let Celsius = Math.round((fehr - 32) * 5 / 9);
        return Celsius;
    }
    let result;
    if (valueTemp == 'cel') {
        resultContainer = celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = resultContainer + "*Fahrenheit";
    } else {
        resultContainer = fehToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = resultContainer + "*Celsius";
    }

}