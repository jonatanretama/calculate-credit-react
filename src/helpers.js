export function calculateTotal(mount, timePay){
    // Cantidades
    // 0-1000 = 25%
    // 1001-5000 = 20%
    // 5001 - 10000 = 15%
    // + 10000 = 10%

    let totalMount;
    if (mount <= 1000) {
        totalMount = mount * .25;        
    } else if (mount > 1000 && mount <= 5000) {
        totalMount = mount * .20;
    } else if (mount > 5000 && mount <= 10000) {
        totalMount = mount * .15;
    } else {
        totalMount = mount * .10;
    }


    // Plazo meses
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%

    let totalTime = 0;

    switch (timePay) {
        case 3:
            totalTime = mount * 0.05;
            break;
        case 6:
            totalTime = mount * 0.10;
            break;
        case 12:
            totalTime = mount * 0.15;
            break;
        case 24:
            totalTime = mount * 0.20;
            break;
        default:
            break;
    }
    
    return totalTime + totalMount + mount
}