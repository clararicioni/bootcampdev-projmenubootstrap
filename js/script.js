$(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
});
function calcQuantidade() {
    var quantities = document.getElementsByName("quantity");
    var nome = document.getElementById("name").value;
    var output = document.getElementById("output");

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML = `
        <h2>Caro(a) ${nome},</h2>
        <p>Seguem os dados do seu pedido.</p>
        <p>O seu pedido é:</p>`;

    var finalPrice = 0;
    for (var input of quantities) {
        if (input.value > 0) {
            var price = document.getElementById(input.id).getAttribute("data-price");
            var total = price * input.value;
            output.innerHTML += `Prato: ${input.id} - Preço unitário: ${formatter.format(price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</br>`;
            finalPrice += price * input.value;
        }
    }
    output.innerHTML += `<h2>Preço final: ${formatter.format(finalPrice)}</h2>`;
}

