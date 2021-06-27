/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/


function checkBrackets(stringWithBrackets) {
    let leftBraces = [];
    let RightBrace = c => {
        switch (c) {
            case ')': case '}': case ']':
                return true;
            case '(': case '{': case '[':
                leftBraces.push(c);
            default:
                return false; 
        }
    };

    for (let i = 0; i < stringWithBrackets.length; i++) {
        let e = stringWithBrackets[i];

        if (RightBrace(e) && !Match(leftBraces.pop() + e))
            return false;
    }

    return leftBraces.length === 0; 
}

function Match(t) {
    switch (t) {
        case '()': case '{}': case '[]':
            return true;
        default:
            return false;
    }
}



/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);