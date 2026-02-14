document.addEventListener("DOMContentLoaded", function () {

    const PRICE = 50;
    const DAYS = 30;

    // 🔹 Live total update when milk input changes
    const milkInputs = document.querySelectorAll("input[name='milk']");

    milkInputs.forEach(input => {

        input.addEventListener("input", function(){

            const row = input.closest("tr");
            const milk = parseFloat(input.value) || 0;

            const totalCell = row.querySelector(".total-cell");
            const pendingCell = row.querySelector(".pending-cell");

            const payments = parseFloat(
                row.children[4].innerText.replace("₹","")
            ) || 0;

            const newTotal = milk * PRICE * DAYS;
            const pending = newTotal - payments;

            totalCell.innerHTML = "₹ " + newTotal.toFixed(2);
            pendingCell.innerHTML = "₹ " + pending.toFixed(2);

        });

    });


    // 🔹 Smooth toast message
    function showToast(message){

        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(()=>{
            toast.classList.add("show");
        },100);

        setTimeout(()=>{
            toast.classList.remove("show");
            setTimeout(()=>toast.remove(),300);
        },2500);
    }


    // 🔹 Show success after form submit
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(){
            showToast("Updated successfully ✔");
        });
    });

});
