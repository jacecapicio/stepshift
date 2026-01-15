const STEP = 5;

function stepShift(text, encode) {
  let result = "";
  let step = encode ? STEP : -STEP;

  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + step + 26) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + step + 26) % 26) + 97);
    } else {
      result += text[i];
    }
  }
  return result;
}

function encodeText() {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = stepShift(input, true);
}

function decodeText() {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = stepShift(input, false);
}
