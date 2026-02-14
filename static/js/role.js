document.addEventListener("DOMContentLoaded", function(){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function(){

            card.style.opacity = "0.7";
            card.style.pointerEvents = "none";

            setTimeout(() => {
                card.closest("form").submit();
            }, 300);

        });
    });

});
