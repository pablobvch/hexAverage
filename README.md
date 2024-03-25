# hexAverage

`hexAverage` is a JavaScript function designed to calculate the average value between two hexadecimal colors. This tool is useful for finding a middle color between two given colors, which can be handy in various web design and development applications.

## Features

- Calculates the average value between two hexadecimal colors.
- Input values must be valid 6-character hexadecimal strings without the `#` prefix.
- The resulting value is a 6-character hexadecimal color.
- Handles cases where the average component of a color is a single digit, ensuring the result always has at least two characters.

## Usage

To use `hexAverage`, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Navigate to the directory where the `colorHexAverage.js` file (or the name you've given to the file containing the `hexAverage` function) is located.
3. Run the following command in the terminal, replacing `hexadecimal1` and `hexadecimal2` with the hexadecimal values you wish to average:

`node colorHexAverage.js hexadecimal1 hexadecimal2`

## Examples

Suppose we want to find the middle color between `#FF0000` (red) and `#0000FF` (blue). We would run:

The result would be a hexadecimal color representing the average value between red and blue.

## Note on Input Format

- The input values must be 6-character hexadecimal strings without the `#` prefix.
- The function will handle cases where the average component of a color is a single digit, ensuring the result always has at least two characters.

## Contributions

If you find any bugs or have suggestions for improving `hexAverage`, please feel free to open an issue or submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.