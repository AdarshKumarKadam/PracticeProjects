(function () {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll(".btn");
    const clear = document.querySelector(".btn-clear");
    const equal = document.querySelector(".btn-equal");


    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {  // Ensure a valid numeric value
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function (e) {
        e.preventDefault();

        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = String(answer);
            } catch (error) {
                console.error("Error:", error);
                screen.value = "Error";
            }
        }
    });


    clear.addEventListener('click', function(e) {
        screen.value = "";
    })


})();