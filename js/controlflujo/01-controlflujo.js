const edad = 70;
// if (edad >= 18) {
//     console.log('Entra');
// } else {console.log('No entra')};
switch (true) {
    case edad <= 18:
        console.log('Menor');
        break;
    case edad < 65:
        console.log('Viejo');
        break;
    case edad < 115:
        console.log('Cerca de la muerte');
        break;
    default:
        console.log('Demasiado viejo');
}
