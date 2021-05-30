/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

function zipIt(first, second) {
  if (typeof first == "number" && typeof second == "number"){
    let toArray = num => Number(num);
    const firstArr = Array.from(String(first), toArray);
    const secondArr = Array.from(String(second), toArray);
    const merge = (arr1, arr2) => ((arr1.length > arr2.length) ? arr1 : arr2).map((_,i)=>[arr1[i],    
    arr2[i]]).flat()
        /*
    - wziecie dluzej tablicy i przechodzenie po jej indeksach
    - funkcja map, zeby tworzyc przy kazdym indeksie porzadek elementow z dwoch tablic
    - funkcja flat, zeby pozbyc sie tablic w tablicy
    - konwersja tablicy numerow to liczby
    */
    return merge(firstArr,secondArr).join("")
  }

}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');