document.addEventListener("DOMContentLoaded", function(){

    // Confirm logout
    const logoutLink = document.querySelector("a[href='/logout']");
    if(logoutLink){
        logoutLink.addEventListener("click", function(e){
            if(!confirm("Do you want to logout?")){
                e.preventDefault();
            }
        });
    }

});
