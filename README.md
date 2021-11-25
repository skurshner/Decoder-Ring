# Decoder Ring

Viewable at https://skurshner.github.io/decoder-ring/

## Description

The Decoder Ring application allows users to encode and decode messages using 3 different encoding methods. The encoding process involved writing algorithms utilizing various array methods in Javascript.

This project allowed me to practice TDD, as I wrote all of the tests for the algorithms using Mocha and Chai.

## Encoding methods

1. **Casaer Shift:** The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

2. **Polybius Square:** The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the below table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as below and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

|     | 1   | 2   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- | --- |
| 1   | A   | B   | C   | D   | E   |
| 2   | F   | G   | H   | I/J | K   |
| 3   | L   | M   | N   | O   | P   |
| 4   | Q   | R   | S   | T   | U   |
| 5   | V   | W   | X   | Y   | Z   |

3. The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

<img src="https://i.ibb.co/g3FQWRK/19c12a6ee38ceddd82d75e12edf53189-image.png">

For example, in the table above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".

This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

## Additional Notes

The app utilizes Bootstrap with custom CSS and is fully responsive.

This project was created as part of Thinkful's Software Engineering Program.
