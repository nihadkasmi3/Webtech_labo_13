let startHour = parseInt(prompt(`Geef het startuur (0-23) in:`));
let startMinute = parseInt(prompt(`Geef de startminuten (0-59) in:`));

let hoursToAdd = 5;
let minutesToAdd = 135;

if(isNaN(startHour) || isNaN(startMinute)) {
    console.log(`Fout: geef twee geldige getallen in.`);
}
else {
    let totalMinutes = startHour * 60 + startMinute + hoursToAdd * 60 + minutesToAdd;

    let daysLater = Math.floor(totalMinutes / 1440);
    let newHour = Math.floor((totalMinutes % 1440) / 60);
    let newMinutes = totalMinutes % 60;

    let formattedHour = String(newHour).padStart(2, "0");
    let formattedMinutes = String(newMinutes).padStart(2, "0");

    console.log(`Nieuw tijdstip: ${formattedHour}:${formattedMinutes}`);

    if(daysLater === 0) {
        console.log(`Dit tijdstip valt nog op dezelfde dag.`);
    }
    else if(daysLater === 1) {
        console.log(`Dit is het tijdstip 1 dag later.`);
    }
    else {
        console.log(`Dit is het tijdstip ${daysLater} dagen later.`);
    }
}







