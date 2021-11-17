        /* The javascipt */

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

let display = document.querySelector('.textArea');
let textArea = [one,two,three,four,five,six,seven,eight,nine];

// amharic wordlist 
let wordList = [
    ['፡','።','፣','፤','፥','፦','፧','፨'],
    ['ሀ','ሁ','ሂ','ሃ','ሄ','ህ','ሆ'],
    ['ለ','ሉ','ሊ','ላ','ሌ','ል','ሎ','ሏ'],
    ['ሐ','ሑ','ሒ','ሓ','ሔ','ሕ','ሖ','ሗ'],
    ['መ','ሙ','ሚ','ማ','ሜ','ም','ሞ','ሟ'],
    ['ሠ','ሡ','ሢ','ሣ','ሤ','ሥ','ሦ','ሧ'],
    ['ረ','ሩ','ሪ','ራ','ሬ','ር','ሮ','ሯ'],
    ['ሰ','ሱ','ሲ','ሳ','ሴ','ስ','ሶ','ሷ'],
    ['ሸ','ሹ','ሺ','ሻ','ሼ','ሽ','ሾ','ሿ'],
    ['ቀ','ቁ','ቂ','ቃ','ቄ','ቅ','ቆ','ቐ'],
    ['በ','ቡ','ቢ','ባ','ቤ','ብ','ቦ','ቧ'],
    ['ተ','ቱ','ቲ','ታ','ቴ','ት','ቶ','ቷ'],
    ['ቸ','ቹ','ቺ','ቻ','ቼ','ች','ቾ','ቿ'],
    ['ኀ','ኁ','ኂ','ኃ','ኄ','ኅ','ኆ','ኇ'],
    ['ነ','ኑ','ኒ','ና','ኔ','ን','ኖ','ኗ'],
    ['ኘ','ኙ','ኚ','ኛ','ኜ','ኝ','ኞ','ኟ'],
    ['አ','ኡ','ኢ','ኣ','ኤ','እ','ኦ','ኧ'],
    ['ከ','ኩ','ኪ','ካ','ኬ','ክ','ኮ','ኯ'],
    ['ኸ','ኹ','ኺ','ኻ','ኼ','ኽ','ኾ'],
    ['ወ','ዉ','ዊ','ዋ','ዌ','ው','ዎ'],
    ['ዐ','ዑ','ዒ','ዓ','ዔ','ዕ','ዖ'],
    ['ዘ','ዙ','ዚ','ዛ','ዜ','ዝ','ዞ','ዟ'],
    ['ዠ','ዡ','ዢ','ዣ','ዤ','ዥ','ዦ','ዧ'],
    ['የ','ዩ','ዪ','ያ','ዬ','ይ','ዮ','ዯ'],
    ['ደ','ዱ','ዲ','ዳ','ዴ','ድ','ዶ','ዷ'],
    ['ጀ','ጁ','ጂ','ጃ','ጄ','ጅ','ጆ','ጇ'],
    ['ገ','ጉ','ጊ','ጋ','ጌ','ግ','ጎ','ጏ'],
    ['ጠ','ጡ','ጢ','ጣ','ጤ','ጥ','ጦ','ጧ'],
    ['ጨ','ጩ','ጪ','ጫ','ጬ','ጭ','ጮ','ጯ'],  
    ['ጰ','ጱ','ጲ','ጳ','ጴ','ጵ','ጶ','ጷ'],
    ['ጸ','ጹ','ጺ','ጻ','ጼ','ጽ','ጾ','ጿ'],
    ['ፀ','ፁ','ፂ','ፃ','ፄ','ፅ','ፆ','ፇ'],
    ['ፈ','ፉ','ፊ','ፋ','ፌ','ፍ','ፎ','ፏ'],
    ['ፐ','ፑ','ፒ','ፓ','ፔ','ፕ','ፖ','ፗ'],
    ['ቨ','ቩ','ቪ','ቫ','ቬ','ቭ','ቮ','ቯ'],
    //numbers
    ['፩','፪','፫','፬','፭','፮','፯','፰','፱'],
    ['፲','፳','፴','፵','፶','፷','፸','፹','፺'],
    ['፻','፼']
];

// expose the button clicked 
function expose(n){
    for(i=0; i<textArea.length; i++){
        if(i < wordList[n].length){
            textArea[i].innerHTML = wordList[n][i];
        }       
    }
}

// type the word on text area
function typeWord(n){
    display.focus()
    display.value += textArea[n-1].innerHTML;
}

// type space 
function space(){
    display.focus()
    display.value += " ";
}

// to clear text field
function clearInput(){
    display.focus()
    if(display.value != ''){
        display.value = '';
    }
}

// copy text from the field
function copyText(){
    navigator.clipboard.writeText(display.value);
}

// to delete charachter
function deleteChar(){
    display.focus()
    let lenOfStr = display.value.length;
    let last = display.value.indexOf(lenOfStr)
    let newStr = display.value.slice(0, last);
    display.value = newStr;
}
