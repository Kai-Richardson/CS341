

handleOrdering = function() {
    const notes = $("#notes");
    if (notes.val().toLowerCase().includes("vegan")) {
        alert("Warning: Our Cheesecakes contain dairy!")
    } else {
        document.getElementById("order-zone").style.visibility = "hidden"
        document.getElementById("thanks").style.visibility = "visible"

        const cake_num = $("#quantity-cakes option:selected").text();
        const cake_type = $('input[name="topping"]:checked').val() ?? "None";
        const cake_notes = notes.val();

        $("#thanks-details").text(`Quantity: ${cake_num} | Topping: ${cake_type} | Notes: ${cake_notes}`)
    }
};

jQuery('#order').click(handleOrdering);




menuColor = function() {
    $("#select-menu ul li").css("color","inherit");
    $(this).css("color","rebeccapurple");
    const selected = $(this).text()
    $('#selected-month').text(`${selected}`)
}

jQuery("#select-menu ul li").click(menuColor);