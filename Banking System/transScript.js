let current = 0;

document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("sbtn");

    submitBtn.addEventListener("click", function () {
        const nameInput = document.getElementById("receipient");
        const amtInput = document.getElementById("amount");
        const rad = document.getElementsByName("trans-type");

        let rad_value = null;
        for (let index = 0; index < rad.length; index++) {
            if (rad[index].checked) {
                rad_value = rad[index].value;
            }
        }

        if (nameInput.value.trim() !== "" && parseFloat(amtInput.value) > 0 && rad_value !== null) {
            let slno = current + 1;
            let table = document.getElementById("trans-table");
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = slno;
            cell2.innerHTML = nameInput.value.trim();
            cell3.innerHTML = amtInput.value.trim();
            cell4.innerHTML = rad_value;

            // Reset input values
            nameInput.value = "";
            amtInput.value = "";
            rad.forEach((radio) => (radio.checked = false));
        } else {
            alert("Enter all values to continue");
        }
    });
});
