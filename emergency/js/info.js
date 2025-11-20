const texts = {
  book: "At læse bøger for dit barn er en af de mest værdifulde gaver, du kan give. Det skaber et trygt øjeblik sammen, styrker jeres bånd og giver plads til nysgerrighed og fantasi. Når du læser højt, udvikler dit barn sprog, koncentration og evnen til at forstå verden omkring sig – alt sammen gennem hyggelige, stille stunder, hvor I er helt tæt på hinanden. Det er små øjeblikke, der bygger store mennesker.",
  tv: "At sætte sit barn foran fjernsynet virker nemt – men det giver dem næsten ingenting igen. Når et barn bare sidder og stirrer på en skærm, bliver hjernen passiv i stedet for aktiv. Det stimulerer ikke fantasi, sprog eller læring – barnet bliver bare underholdt uden selv at deltage. For meget skærmtid kan gøre det sværere at koncentrere sig, lege selv og bruge sin egen kreativitet. Fjernsynet passer barnet, men det udvikler det ikke.",
  guitar:
    "At spille guitar for dit barn er en lille handling med stor betydning. Musikken skaber ro, nærvær og tryghed, og barnet mærker både lyden og stemningen i rummet. Når du spiller, stimulerer du barnets sanser, rytmeforståelse og nysgerrighed – helt uden skærme eller forstyrrelser. Det bliver et øjeblik, hvor barnet oplever noget levende, noget der sker lige dér sammen med dig. Det bygger forbindelser, minder og en naturlig glæde ved musik.",
  ipad: "En iPad kan virke som den perfekte løsning, men den gør mindre for dit barn, end man ofte tror. Når et barn sidder med en iPad, bliver det hurtigt opslugt på en måde, hvor hjernen mest bare følger med uden selv at skabe noget. Det stimulerer ikke fantasi, nærvær eller selvstændig leg – det giver bare konstant underholdning. For meget iPad-tid kan gøre det sværere for barnet at koncentrere sig, finde ro og bruge sin egen kreativitet. iPad’en holder barnet beskæftiget, men den udvikler det ikke.",
  babyjug:
    "At give dit barn en sutteflaske eller mad handler om langt mere end bare at stille sulten. Det er et øjeblik af tryghed, hvor barnet mærker nærhed, rytme og omsorg. Når du sidder med barnet, taler blidt eller bare er til stede, skaber det ro og en følelse af sikkerhed. Barnet lærer at forbinde mad med varme, kontakt og balance — ikke stress eller skærme. Det er små, simple stunder, som bygger et stærkt fundament for trivsel og tillid.",
};

// Info-boksen
// Info-boksen
const output = document.getElementById("infoOutput");

// Alle dine SVG-ikoner
const icons = document.querySelectorAll(".icon");

// select your <p> placeholder
const placeholderP = document.querySelector(".placeholder");

// mapping of placeholder text per icon
const placeholderTexts = {
  book: "Læs en bog for barnet",
  ipad: "Giv barnet en ipad",
  tv: "Tænd for TV",
  guitar: "Spil guitar for barnet",
  babyjug: "Giv barnet noget at drikke/spise",
};

const smileBaby = document.getElementById("smileBaby");
const brainrot = document.getElementById("brainrot");
const cryBaby = document.getElementById("cryBaby");

// Hide all on start except cryBaby
smileBaby.style.display = "none";
brainrot.style.display = "none";
cryBaby.classList.remove("hidden"); // initially visible

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the document click handler

    const id = icon.id;
    const text = texts[id];
    output.textContent = text;
    output.classList.remove("hidden");
    if (placeholderTexts[id]) {
      placeholderP.textContent = placeholderTexts[id];
    }

    cryBaby.classList.add("hidden"); // hide cryBaby temporarily

    if (id === "tv" || id === "ipad") {
      brainrot.parentNode.appendChild(brainrot);
      brainrot.style.display = "block";
      smileBaby.style.display = "none";
    } else if (id === "guitar" || id === "book" || id === "babyjug") {
      smileBaby.parentNode.appendChild(smileBaby);
      smileBaby.style.display = "block";
      brainrot.style.display = "none";
    }
  });
});

document.addEventListener("click", () => {
  cryBaby.classList.remove("hidden");
  smileBaby.style.display = "none";
  brainrot.style.display = "none";
});
