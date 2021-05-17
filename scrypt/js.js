{
    const welcome = () => {
        console.log("Witam wszystkich")
    };
    const convertPln = () => {
        const courseElement = document.querySelector(".js-coursePln");
        const amountElement = document.querySelector(".js-amountPln");
        const resultElement = document.querySelector(".js-resultPln");
        const course = +courseElement.value;
        const amount = +amountElement.value;
        const resultPln = (course * amount);
        resultElement.innerText = resultPln.toFixed(2);
    };

    const convertCurrency = () => {
        const courseElement = document.querySelector(".js-course");
        const amountElement = document.querySelector(".js-amount");
        const resultElementCurrency = document.querySelector(".js-resultCurrency");
        const course = +courseElement.value;
        const amount = +amountElement.value;
        const resultCurrency = (amount / course);
        resultElementCurrency.innerText = resultCurrency.toFixed(2);

    }

    const init = () => {
        welcome();

        const buttonPln = document.querySelector(".js-button");
        buttonPln.addEventListener("click", (e) => {
            e.preventDefault();

            convertPln();
        });

        const buttonCurrency = document.querySelector(".js-buttonCurrency");
        buttonCurrency.addEventListener("click", (ev) => {
            ev.preventDefault();

            convertCurrency();
        });

    };
    init();
}













