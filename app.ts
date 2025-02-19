
let calculateAge = (birthDay: Date): string => {
    if (isNaN(birthDay.getTime())) {
        return 'Fecha Incorrecta, el formato debe ser YYYY-MM-DD';
    } else {
        let actualDate: Date = new Date();
        let age = actualDate.getFullYear() - birthDay.getFullYear(); // Obtener la diferencia de los años
        let month = actualDate.getMonth() - birthDay.getMonth(); // Obtener la diferencia en los meses

        if (month < 0 || (month === 0 && actualDate.getDate() < birthDay.getDate())) {
            age--;
        }

        if (age > 0) {
            return 'su edad es de: ' + age + ' años';//pongo este if porque puede ser que calculemos la edad de un bebé
        } else {
            // Calcular los meses y días cuando la edad es 0 ( o sea de un bebé)
            month = (12 + actualDate.getMonth() - birthDay.getMonth()) % 12;
            let days = actualDate.getDate() - birthDay.getDate();
            if (days < 0) {
                month--;
                let lastMonth = (actualDate.getMonth() - 1 + 12) % 12;
                let daysInLastMonth = new Date(actualDate.getFullYear(), lastMonth + 1, 0).getDate();
                days += daysInLastMonth;
            }
            return 'su edad es de: ' + month + ' meses y ' + days + ' días';
        }
    }
}

console.log(calculateAge(new Date('2024-08-28')));