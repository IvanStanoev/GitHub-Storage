function cinemaTickets(input) {

    let command = input[0];
    let index = 1;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;

    while (command !== "Finish") {
        let movieName = command;

        let totalFreePlaces = Number(input[index]);
        index++;

        let placesTaken = 0;

        let command2 = input[index];
        index++;

        while (command2 !== "End") {
            let ticketType = command2;
            placesTaken++;

            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else {
                kidsTickets++;
            }

            if (placesTaken === totalFreePlaces) {
                break;
            }
            command2 = input[index];
            index++;
        }

        let percentTaken = (placesTaken / totalFreePlaces) * 100;
        console.log(`${movieName} - ${percentTaken.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    let totalTickets = studentTickets + standardTickets + kidsTickets;
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    let kidsTicketsPercent = (kidsTickets / totalTickets) * 100;

    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);