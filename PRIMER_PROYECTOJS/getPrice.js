function getPrice(numInvitados) {
    let precio;

    if (numInvitados <= 50) {
        precio = 4000;
    } else if (numInvitados <= 100) {
        precio = 10000;
    } else if (numInvitados <= 200) {
        precio = 15000;
    } else {
        precio = 20000;
    }

    return precio;
}

let numInvitados = 90;
console.log("El precio para", numInvitados, "invitados es:", getPrice(numInvitados));
