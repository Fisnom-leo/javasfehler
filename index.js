const Api_URL ="http://api.sparkasse.de/v3/accounts";
const Api_KEY ="lwqdjOI987HHUIaihjaskdh";
// ===> " <=== hat gefehlt
const TRANZFER_CUSTOMER_ID = "tranzfer-009";
const bankname = "Sparkasse";
console.log ("Initialisiere Verbindung..."); // hat gefehlt und die =>  ) 
console.log("Verbindung mit " + bankname + " hergestellt"); //punkt und plus

let kunde1 = "Jan Müller"; // 1muss am ende sein
let kunde2 = "Martina Stein";//1muss am ende sein
let iban1 = "1234 0000 9908 9999";
let iban2 = "1222 0000 9908 9999"; //iban2
let betrag = 23.3; //kein dopelpunkt und space between let und betrag
console.log("Starte Überweisung");
console.log(`Von "${kunde1}" IBAN: "${iban1}"`); // ` hat gefehlt
console.log(`Nach "${kunde2}" IBAN: "${iban2}"`);
console.log(`Sende Betrag ${betrag}€`);
console.log("Überweisung erfolgreich");


const bankname2 = "Sparkasse Berlin"; //darf nicht gleich name haben
const dauer = "transaktionsDauer";
const transaktionsDauer = 100;
console.log("Beende Verbindung...");
console.log('Verbindung mit ' + bankname + " beendet");
console.log("Dauer der Transaktion " + transaktionsDauer + "s");
// hallo fantasia du kannst mal bitte achten und ruhig schreiben nicht abgelenkt werden