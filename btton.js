let BgColorInput = document.getElementById("BgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let PaddingInput = document.getElementById("PaddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");

let customBtn = document.getElementById("customBtn");

function applybutton() 
{
    customBtn.style.borderWidth="0px";
    let BgColorInputUserInput = BgColorInput.value;
    let fontColorInputUserInput = fontColorInput.value;
    let fontSizeInputUserInput = fontSizeInput.value;
    let fontWeightInputUserInput = fontWeightInput.value;
    let PaddingInputUserInput = PaddingInput.value;
    let borderRadiusInputUserInput = borderRadiusInput.value;
    customBtn.style.backgroundColor = BgColorInputUserInput;
    customBtn.style.color = fontColorInputUserInput;
    customBtn.style.fontSize = fontSizeInputUserInput;
    customBtn.style.fontWeight = parseInt(fontWeightInputUserInput);
    customBtn.style.padding=PaddingInputUserInput;
    customBtn.style.borderRadius=borderRadiusInputUserInput;
}