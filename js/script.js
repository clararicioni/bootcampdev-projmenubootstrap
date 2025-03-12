$(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
});
function calcQuantidade() {
    var quantities = document.getElementsByName("quantity");
    var nome = document.getElementById("name").value;
    var modalBody = document.getElementById("modalBody");

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    var pedidoHTML = `<h2>Caro(a) ${nome}, </h2><p>Seguem os dados do seu pedido:</p>`;
    var finalPrice = 0;
    var itensSelecionados = 0;

    for (var input of quantities) {
        if (input.value > 0) {
            var price = document.getElementById(input.id).getAttribute("data-price");
            var total = price * input.value;
            pedidoHTML += `Prato: ${input.id} - Preço unitário: ${formatter.format(price)} - Quantidade: ${input.value} - Total: ${formatter.format(total)}</br>`;
            finalPrice += total;
            itensSelecionados++;
        }
    }

    if (itensSelecionados === 0) {
        pedidoHTML = `<h3 class="text-danger text-center">Escolha pelo menos um item!</h3>`;
    } else {
        pedidoHTML += `<h2 class="mt-3">Total: ${formatter.format(finalPrice)}</h2>`;
    }

    modalBody.innerHTML = pedidoHTML;
    var pedidoModal = new bootstrap.Modal(document.getElementById('pedidoModal'));
    pedidoModal.show();
}
