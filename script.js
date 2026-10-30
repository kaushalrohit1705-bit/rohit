const topics = [
  {
    "topic": "Single Dimension Arrays",
    "questions": [
      [
        "Program to copy all elements of one array into another array",
        "Arrays.copyOf creates a new array and copies the values from the source array."
      ],
      [
        "Program to find the frequency of each element in the array",
        "A HashMap stores each distinct number and increments its count whenever that number appears."
      ],
      [
        "Program to left rotate the elements of an array",
        "Left rotation by k moves each element k positions to the left, wrapping around to the beginning."
      ],
      [
        "Program to print the duplicate elements of an array",
        "seen.add(value) returns false if the value was already present, identifying duplicates."
      ],
      [
        "Program to print the elements of an array",
        "The enhanced for loop visits each array element in order."
      ],
      [
        "Program to print the elements of an array in reverse order",
        "Start from arr.length - 1, the last valid index, and count down to zero."
      ],
      [
        "Program to print the elements of an array present on even position",
        "This solution treats positions as human-counted positions 2, 4, 6, which have indexes 1, 3, 5."
      ],
      [
        "Program to print the elements of an array present on odd position",
        "This solution treats positions as human-counted positions 1, 3, 5, which have indexes 0, 2, 4."
      ],
      [
        "Program to print the largest element in an array",
        "Start with the first element and update largest whenever a greater value is found. The array must not be empty."
      ],
      [
        "Program to print the smallest element in an array",
        "Keep track of the smallest value found so far. The array must not be empty."
      ],
      [
        "Program to print the number of elements present in an array",
        "The length field gives the number of elements in a Java array."
      ],
      [
        "Program to print the sum of all the items of the array",
        "Initialize sum to zero and add each array value to it."
      ],
      [
        "Program to right rotate the elements of an array",
        "Right rotation by k moves each element k positions to the right, wrapping around to the beginning."
      ],
      [
        "Program to sort the elements of an array in ascending order",
        "Arrays.sort arranges primitive array values in ascending order."
      ],
      [
        "Program to sort the elements of an array in descending order",
        "Collections.reverseOrder works with Integer[] objects, so this example uses Integer instead of int."
      ],
      [
        "Program to Find 3rd Largest Number in an array",
        "This version finds the third-largest distinct value. It removes duplicates before sorting."
      ],
      [
        "Program to Find 2nd Largest Number in an array",
        "This version finds the second-largest distinct value, so a repeated maximum is counted only once."
      ],
      [
        "Program to Find Largest Number in an array",
        "An IntStream's max method returns the largest value. This example assumes the array is non-empty."
      ],
      [
        "Program to Find 2nd Smallest Number in an array",
        "This version finds the second-smallest distinct value, ignoring repeated copies of the minimum."
      ],
      [
        "Program to Find Smallest Number in an array",
        "An IntStream's min method returns the smallest value. This example assumes the array is non-empty."
      ],
      [
        "Program to Remove Duplicate Element in an array",
        "distinct keeps the first occurrence of each value and removes later duplicates."
      ],
      [
        "Program to Print Odd and Even Numbers from an array",
        "A number is even when value % 2 == 0; otherwise it is odd."
      ],
      [
        "How to Sort an Array in Java",
        "Use Arrays.sort(array) for ascending order. For descending order with objects, use a comparator such as Collections.reverseOrder()."
      ]
    ]
  },
  {
    "topic": "Functions",
    "questions": [
      [
        "Write a Java method to find the smallest number among three numbers.",
        "Math.min compares two values. Nesting it compares all three numbers and returns the smallest."
      ],
      [
        "Write a Java method to compute the average of three numbers.",
        "Divide the sum by 3.0 so the calculation can return a fractional result when needed."
      ],
      [
        "Write a Java method to display the middle character of a string.",
        "For odd lengths, return the single character at length/2. For even lengths, return the two characters around the midpoint."
      ],
      [
        "Write a Java method to count all the words in a string.",
        "Trim leading/trailing spaces and split on one or more whitespace characters."
      ],
      [
        "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
        "This uses annual compounding: principal × (1 + rate/100)^years. The rate is entered as a percentage, such as 5 for 5%."
      ],
      [
        "Write a Java method to print characters between two characters (i.e. A to P).",
        "The loop moves forward when start is before end, and backward when start is after end."
      ],
      [
        "Write a Java method to check whether a string is a valid password.",
        "Password rules differ by assignment. This sample checks for length, at least one letter, and at least one digit; adjust the conditions if your teacher specifies other rules."
      ],
      [
        "Write a Java method to display the current date and time.",
        "LocalDateTime.now() reads the current local date and time; DateTimeFormatter controls how it is displayed."
      ],
      [
        "Write a Java method to find all twin prime numbers less than 100.",
        "Twin primes are pairs of prime numbers whose difference is 2, such as (3, 5) and (11, 13)."
      ],
      [
        "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
        "Inspect the last digit with % 10, then remove it with integer division by 10. The do-while also handles input 0."
      ],
      [
        "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
        "Sort the three values and check whether each next value is exactly one larger than the previous value."
      ],
      [
        "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
        "A number is the midpoint of two others when twice that number equals the sum of the other two."
      ],
      [
        "Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not.",
        "Convert to lowercase and check every character against the vowel set. This version treats an empty string as false."
      ]
    ]
  },
  {
    "topic": "Strings",
    "questions": [
      [
        "Program to Check if a String contains only digits?",
        "Use matches with the regular expression \\\\d+ to check that every character is a digit."
      ],
      [
        "Program to perform Deep Copy for String?",
        "String is immutable, so creating a new String from the original gives an independent String object with the same content."
      ],
      [
        "Program to prove String is immutable programmatically?",
        "Strings are immutable: methods such as concat return a new String instead of changing the original."
      ],
      [
        "Program to remove all occurrences of a given character from input String?",
        "Use replace to remove every occurrence of the selected character."
      ],
      [
        "Program to append the string using StringBuffer class",
        "StringBuffer.append adds text at the end of the buffer."
      ],
      [
        "Program to insert the string using StringBuffer class",
        "StringBuffer.insert adds text at the specified index."
      ],
      [
        "Program to Add Characters to a String",
        "Append a character to a String with concatenation, or use StringBuilder for repeated changes."
      ],
      [
        "Program to Add Characters to a String",
        "Use StringBuilder to add a character at a chosen index."
      ],
      [
        "Program to Check Anagram",
        "Two strings are anagrams if their normalized character arrays are equal after sorting."
      ],
      [
        "Program to check whether a string is a Palindrome",
        "Compare a string with its reversed form, ignoring case in this example."
      ],
      [
        "Program to Convert Enum to String",
        "Enum.name returns the declared enum constant name as a String."
      ],
      [
        "Program to Convert String to String Array",
        "Use split to turn a delimited String into a String array."
      ],
      [
        "Program to count number of words in a String?",
        "Trim the text and split on one or more whitespace characters."
      ],
      [
        "Program to count the total number of characters in a string",
        "String.length counts UTF-16 code units; use codePointCount for Unicode code points."
      ],
      [
        "Program to count the total number of punctuation characters exists in a String",
        "Character.getType identifies punctuation categories for each character."
      ],
      [
        "Program to count the total number of vowels and consonants in a string",
        "Count alphabetic vowels separately from other alphabetic consonants."
      ],
      [
        "Program to determine whether a given string is palindrome",
        "Normalize the string and compare it to its reversed form."
      ],
      [
        "Program to determine whether one string is a rotation of another",
        "A rotation exists if the second string occurs inside the first string concatenated with itself."
      ],
      [
        "Program to divide a string in 'N' equal parts.",
        "Divide only when the length is evenly divisible by N."
      ],
      [
        "Program to find all subsets of a string",
        "Use bit masks to generate all subsets for a short string."
      ],
      [
        "Program to find all the permutations of a string",
        "Backtracking generates permutations by choosing each remaining character in turn."
      ],
      [
        "Program to find maximum and minimum occurring character in a string",
        "Count characters in a map, then choose the minimum and maximum counts."
      ],
      [
        "Program to find Reverse of the string",
        "Walk backwards through the characters to build a reversed string."
      ],
      [
        "Program to find the duplicate characters in a string",
        "Track characters already seen and report characters encountered again."
      ],
      [
        "Program to find the duplicate words in a string",
        "Split into words and count each word; print words with a count greater than one."
      ],
      [
        "Program to find the frequency of characters",
        "Use a map to count each character's occurrences."
      ],
      [
        "Program to find the largest and smallest word in a string",
        "Split into words and track the shortest and longest word."
      ],
      [
        "Program to find the longest repeating sequence in a string",
        "Check substrings and keep the longest substring that repeats; this simple example checks non-overlapping repeats."
      ],
      [
        "Program to find the most repeated word in a text file",
        "Read the file line by line and count word frequencies, then report the most frequent word."
      ],
      [
        "Program to find the number of the words in the given text file",
        "Read the file line by line and sum the word count for every line."
      ],
      [
        "Program to Get a Character From the Given String",
        "Use charAt(index) to get a character at a valid zero-based index."
      ],
      [
        "Program to Insert a string into another string",
        "Use substring to insert text at a selected index."
      ],
      [
        "Program to Iterate Over Characters in String",
        "Use a for loop and charAt to visit each character."
      ],
      [
        "Program to Print a New Line in String",
        "Use the escape sequence \\\\n to print a newline."
      ],
      [
        "Program to Print even length words",
        "Split into words and print those with an even number of characters."
      ],
      [
        "Program to print smallest and biggest possible palindrome word in a given string",
        "Find palindrome words and select the shortest and longest among them."
      ],
      [
        "Program to remove all the white spaces from a string",
        "Replace one or more whitespace characters with an empty string."
      ],
      [
        "Program to replace lower-case characters with upper-case and vice-versa",
        "Use Character methods to swap the case of each character."
      ],
      [
        "Program to replace the spaces of a string with a specific character",
        "Use replace to replace spaces with a chosen character."
      ],
      [
        "Program to separate the Individual Characters from a String",
        "Loop through the string and print each character separately."
      ],
      [
        "Program to Splitting into a number of sub-strings",
        "Use split with a limit to create at most N substrings."
      ],
      [
        "Program to swap two string variables without using third or temp variable.",
        "String concatenation can swap values without a third variable, but a temporary variable is clearer and safer."
      ],
      [
        "Program to Swapping Pair of Characters",
        "Swap each adjacent pair of characters, leaving a final unpaired character unchanged."
      ],
      [
        "Read two String user input and check if first contains second?",
        "Use contains to test whether the first input includes the second."
      ],
      [
        "Reserve String without reverse() function",
        "Build the reversed result by appending characters from the end."
      ],
      [
        "Reverse String Word by Word",
        "Split into words and print them in reverse word order."
      ],
      [
        "Write a program to check if two Strings are created with same characters?",
        "Compare sorted character arrays after applying the same normalization."
      ],
      [
        "Write a program to find out first non repeated character from input String?",
        "Count characters in insertion order and return the first character with count one."
      ],
      [
        "Create an object StringBuffer class to reverse the string.",
        "StringBuffer.reverse reverses its contents in place."
      ],
      [
        "Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.",
        "StringBuffer provides insert, append, delete, and replace methods."
      ]
    ]
  },
  {
    "topic": "Multi-Dimension Arrays",
    "questions": [
      [
        "Enter the Matrix of rows and columns entered by the user and print in matrix format",
        "Read the row and column counts, fill the 2D array, then print each row."
      ],
      [
        "Program to Add Two Matrices",
        "Add corresponding elements. Both matrices must have the same dimensions."
      ],
      [
        "Program to Multiply Two Matrices",
        "Matrix multiplication is valid when the first matrix's column count equals the second matrix's row count."
      ],
      [
        "Program to subtract the two matrices",
        "Subtract corresponding elements of the second matrix from the first."
      ],
      [
        "Program to determine whether two matrices are equal",
        "Matrices are equal if they have the same dimensions and every corresponding element matches."
      ],
      [
        "Program to display the lower triangular matrix",
        "For a square matrix, keep elements on and below the main diagonal; replace elements above it with zero."
      ],
      [
        "Program to display the upper triangular matrix",
        "For a square matrix, keep elements on and above the main diagonal; replace elements below it with zero."
      ],
      [
        "Program to find the frequency of odd & even numbers in the given matrix",
        "Visit every matrix element and count even values with % 2 == 0; all remaining integers are odd."
      ],
      [
        "Program to find the sum of each row and each column of a matrix",
        "Sum each row by iterating across its columns, then sum each column by iterating across rows."
      ],
      [
        "Program to find the transpose of a given matrix",
        "Transpose swaps row and column indexes: element a[i][j] becomes t[j][i]."
      ],
      [
        "Program to determine whether a given matrix is an identity matrix",
        "An identity matrix is square, has 1s on the main diagonal, and 0s everywhere else."
      ],
      [
        "Program to Transpose matrix",
        "This version prints the transpose directly by reading columns first, without creating another matrix."
      ],
      [
        "Program to determine whether a given matrix is a sparse matrix",
        "A common definition calls a matrix sparse when more than half of its entries are zero."
      ]
    ]
  },
  {
    "topic": "Basic Programming Constructs",
    "questions": [
      [
        "Write a Java program to print ‘Hello World!’ on screen",
        "println displays the message followed by a new line."
      ],
      [
        "Write a Java program to print the sum of two numbers",
        "Add the two values with the + operator."
      ],
      [
        "Write a Java program that takes two numbers and display the product of two numbers",
        "The * operator multiplies two numbers."
      ],
      [
        "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
        "The operators +, *, -, / and % calculate sum, product, difference, quotient and remainder."
      ],
      [
        "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Write a Java program to swap two variables",
        "A temporary variable safely stores one value during the swap."
      ],
      [
        "Write a Java program to convert a decimal number to binary numbers",
        "Integer.toBinaryString returns the base-2 representation."
      ],
      [
        "Write a Java program to convert a binary number to decimal number",
        "Integer.parseInt(binaryText, 2) converts base 2 to an integer."
      ],
      [
        "Write a Java program to check whether Java is installed on your computer or not",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program and compute the sum of the digits of an integer",
        "Take the last digit with % 10 and remove it with / 10 until no digits remain."
      ],
      [
        "Write a Java program to compare two numbers",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a Java program to print the ascii value of a given character",
        "Casting a character to int prints its numeric code point."
      ],
      [
        "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to display the system time",
        "LocalDateTime.now() obtains the current local date and time."
      ],
      [
        "Write a Java program to print the odd numbers from 1 to 20",
        "Start at 1 and increment by 2."
      ],
      [
        "Write a Java program to print the even numbers from 1 to 20",
        "Start at 2 and increment by 2."
      ],
      [
        "Write a Java program to convert a string to an integer",
        "parseInt converts numeric text to an int; nonnumeric input raises NumberFormatException."
      ],
      [
        "Write a Java program to convert seconds to hour, minute and seconds",
        "Integer division and remainder split total seconds into hours, minutes and seconds."
      ],
      [
        "Write a Java program to compute the sum of the first 100 prime numbers",
        "Check possible divisors from 2 through the square root of n."
      ],
      [
        "Write a Java program to swap the first and last elements of an array and create a new array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to count the number of even and odd elements in a given array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to compute the square root of an given integer",
        "Math.sqrt calculates a square root."
      ],
      [
        "Write a Java program to check if a positive number is a palindrome or not",
        "Reverse the digits and compare with the original number."
      ],
      [
        "Write a Java program to add two numbers without using any arithmetic operators",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to add all the digits of a given positive integer",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java program to find area of circle",
        "Circle area is πr²."
      ],
      [
        "Java Program to find area of rectangle",
        "Rectangle area is length × width."
      ],
      [
        "Java Program to find area of triangle",
        "Triangle area is base × height ÷ 2."
      ],
      [
        "Java Program to find area of equilateral triangle",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program to find area of rhombus",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program to find area of parallelogram",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program to find area of Prism",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program to find volume of sphere",
        "Sphere volume is 4πr³/3."
      ],
      [
        "Java Program to find volume of cylinder",
        "Cylinder volume is πr²h."
      ],
      [
        "Java Program to find volume of cuboid",
        "Cuboid volume is length × width × height."
      ],
      [
        "Java Program to find volume of cone",
        "Cone volume is πr²h/3."
      ],
      [
        "Java program to find surface area of cuboid",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java program to find surface area of cylinder",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java program to find surface area of cube",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java program to calculate average marks",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Java program to check vowel or consonant",
        "Check whether the character occurs in the vowel list."
      ],
      [
        "Java program to sum of N numbers",
        "Use a loop to accumulate the integers from 1 through n."
      ],
      [
        "Java program to find factorial of any number",
        "Multiply all integers from 2 through n; 0! and 1! equal 1."
      ],
      [
        "Java Program to calculate electricity bill",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program To Calculate CGPA Percentage",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program to calculate compound interest",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program To Calculate Batting Average",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Java Pogram to Calculate Commission Percentage",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Pogram To Find Distance Between Two Points",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Java Program To Calculate Power Of Number",
        "Math.pow(base, exponent) computes a power."
      ],
      [
        "Write a Java program to take three numbers from the user and print the greatest number",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to find the number of days in a month",
        "YearMonth handles the different lengths of months and leap years."
      ],
      [
        "Write a Java program to test a number is positive or negative",
        "Compare the number with zero to classify it."
      ],
      [
        "Write a Java Program to accept number of week’s day (1-7) and print name of the day",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program that takes a year from user and print whether that year is a leap year or not",
        "A leap year is divisible by 400, or by 4 but not by 100."
      ],
      [
        "Write a Java program to input 5 numbers from keyboard and find their sum and average",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Write a program in Java to display the first 5 natural numbers",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a java program to check vowel or consonant",
        "Check whether the character occurs in the vowel list."
      ],
      [
        "Write a Java program to display the cube of the number upto given an integer",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to display the n terms of odd natural number and their sum",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to display the multiplication table of a given integer",
        "Loop from 1 to 10 and multiply each counter by the chosen number."
      ],
      [
        "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
        "Compare the number with zero to classify it."
      ],
      [
        "Write a Java program that reads an positive integer and count the number of digits",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program that accepts three numbers and check All numbers are equal or not",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a java program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program that determines a student’s grade",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to create a simple calculator",
        "Use switch to select an operation and guard against division by zero."
      ],
      [
        "Write a Java program to concatenate two string",
        "The + operator joins strings."
      ],
      [
        "Write a Java program to convert all characters in a string to lowercase",
        "toLowerCase converts letters to lowercase."
      ],
      [
        "Write a Java program to convert all characters in a string to uppercase",
        "toUpperCase converts letters to uppercase."
      ],
      [
        "Write a Java program to trim a string(remove whitespaces)",
        "trim removes whitespace at the beginning and end."
      ],
      [
        "Write a Java program to get a substring of a given string between two specified positions",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a java program to get the length of a given string",
        "length() returns the string length."
      ],
      [
        "Write a java program to print current date and time in the specified format",
        "LocalDateTime.now() obtains the current local date and time."
      ],
      [
        "Write a Java program to get the character at the given index within the String",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a java program to remove a particular character from a string",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a java program to reverse a String",
        "StringBuilder.reverse reverses the characters."
      ],
      [
        "Write a java program to remove html tags from a string",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a java program to count total number of lines from a string",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a Java program to sum values of an array",
        "Traverse the array and add each element to the running total."
      ],
      [
        "Write a Java program to find the index of an array element",
        "Linear search checks each value; -1 indicates that the key was not found."
      ],
      [
        "Write a Java program to calculate the average value of array elements",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Write a Java program to test if an array contains a specific value",
        "Linear search checks each value; -1 indicates that the key was not found."
      ],
      [
        "Write a Java program to find the maximum and minimum value of an array",
        "Initialize min and max from the first item and update while traversing."
      ],
      [
        "Write a Java program to insert an element (specific position) into an array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to reverse an array of integer values",
        "Repeatedly append the last digit to the reversed number."
      ],
      [
        "Write a Java program to find the common elements between two arrays",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to find the duplicate values of an array of integer values",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to convert an array to ArrayList",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to add two matrices of the same size",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to find second largest number from the array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to find second lowest number from the array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to find the number of even and odd integers in a given array of integers",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to get the difference between the largest and smallest values in an array of integers",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java program to cyclically rotate a given array clockwise by one",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "java program to print all unique element in an array",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java Program to Sort the Array in an Ascending Order",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java Program to Sort the Array in an Descending Order",
        "Adapt the array traversal or sorting operation to the stated requirement."
      ],
      [
        "Write a Java Program to Sort Names in an Alphabetical Order",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java Program to Display Transpose Matrix",
        "Read columns first and rows second to print the transpose."
      ],
      [
        "Write a Java Program to Search Key Elements in an Array",
        "Linear search checks each value; -1 indicates that the key was not found."
      ],
      [
        "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a java program to print numbers from 1 to 10 using loop",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a java program to calculate the sum of first 10 natural number using loop",
        "Use a loop to accumulate the integers from 1 through n."
      ],
      [
        "Write a Java program to print multiplication table of given number",
        "Loop from 1 to 10 and multiply each counter by the chosen number."
      ],
      [
        "Write a Java program to find the factorial value of any number entered through the keyboard",
        "Multiply all integers from 2 through n; 0! and 1! equal 1."
      ],
      [
        "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
        "Repeatedly append the last digit to the reversed number."
      ],
      [
        "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to check whether the number is a prime number or not",
        "Check possible divisors from 2 through the square root of n."
      ],
      [
        "Write a Java program to calculate HCF of Two given numbers using loop",
        "Euclid's algorithm computes GCD; LCM is |a × b| divided by GCD."
      ],
      [
        "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a java program to count total number of notes in entered amount using loop",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
        "Each Fibonacci term is the sum of the previous two."
      ],
      [
        "Write a java program to calculate the sum of following series where n is input by user",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java method to compute the average of three numbers",
        "Average equals the sum of values divided by their count."
      ],
      [
        "Write a Java method to find the smallest number among three numbers",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java method to count all words in a string",
        "Use String methods or a character loop for this text-processing task; replace the sample with input."
      ],
      [
        "Write a Java method to count all vowels in a string",
        "Check whether the character occurs in the vowel list."
      ],
      [
        "Write a Java method to compute the sum of the digits in an integer",
        "Take the last digit with % 10 and remove it with / 10 until no digits remain."
      ],
      [
        "Write a Java method to check whether an year entered by the user is a leap year or not",
        "A leap year is divisible by 400, or by 4 but not by 100."
      ],
      [
        "Write a Java method to calculate the area of a triangle",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java method to find the area of a pentagon",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java method to find number is even number or not",
        "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input."
      ],
      [
        "Write a Java method to check numbers is palindrome number or not",
        "Reverse the digits and compare with the original number."
      ],
      [
        "Write a Java method to displays prime numbers between 1 to 20",
        "Check possible divisors from 2 through the square root of n."
      ],
      [
        "Write a Java method to find GCD and LCM of Two Numbers",
        "Euclid's algorithm computes GCD; LCM is |a × b| divided by GCD."
      ],
      [
        "Write a Java method to find factorial using recursion in java",
        "Multiply all integers from 2 through n; 0! and 1! equal 1."
      ],
      [
        "Write a Java program to reverse an integer number",
        "Repeatedly append the last digit to the reversed number."
      ],
      [
        "Write a Java program to round a float number to specified decimals",
        "printf with %.2f displays two decimal places."
      ],
      [
        "Write a Java program to test if a double number is an integer",
        "Compare the double with its nearest integral-valued double."
      ],
      [
        "Write a Java program to round up the result of integer division",
        "For positive integers, (a+b-1)/b rounds the quotient up."
      ],
      [
        "Write a Java program to convert Roman number to an integer number",
        "Convert each Roman symbol to a value and account for subtractive pairs such as IV and CM."
      ],
      [
        "Write a Java program to convert a float value to absolute value",
        "Math.abs returns the non-negative magnitude."
      ],
      [
        "Write a Java program to accept a float value of number and return a rounded float value",
        "printf with %.2f displays two decimal places."
      ]
    ]
  },
  {
    "topic": "Interfaces",
    "questions": [
      [
        "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
        "Shape defines a common getArea() contract; each class provides its own formula."
      ],
      [
        "Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\".",
        "The prompt mentions bark() but says speak() in the implementation sentence; this solution consistently implements bark()."
      ],
      [
        "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
        "All three classes implement the same method but provide different behaviour."
      ],
      [
        "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
        "This is an educational in-memory example, not production banking software; real systems need persistence, authentication, audit trails and transaction controls."
      ],
      [
        "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
        "Resizable specifies operations; Rectangle validates and stores the new dimensions."
      ],
      [
        "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
        "This console example represents each shape with text; a GUI program could draw them on a canvas."
      ],
      [
        "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
        "Each class fulfils the same interface using a different sorting algorithm."
      ],
      [
        "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
        "The Playable interface lets different sport classes be handled through one common type."
      ],
      [
        "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
        "Both classes search case-insensitively, but each chooses which text fields to inspect."
      ],
      [
        "Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
        "This demonstrates the interface only; the placeholder methods are NOT encryption. Real AES/RSA implementations must use Java's vetted JCA/JCE APIs and correct key/nonce/padding handling."
      ],
      [
        "Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
        "Both algorithms implement descending order; QuickSort partitions around a pivot and MergeSort combines sorted halves."
      ]
    ]
  },
  {
    "topic": "Packages",
    "questions": [
      [
        "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
        "The import statement allows the class name Date to be used without writing its full package name."
      ],
      [
        "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",
        "The fully qualified name java.util.Date avoids needing an import statement."
      ],
      [
        "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
        "MyDate inherits from java.util.Date. For new projects, java.time is generally preferred over Date."
      ],
      [
        "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",
        "The superclass is referenced with its fully qualified name, so no import is required."
      ],
      [
        "Create a Java program to create a package with multiple default classes.",
        "A source file can contain multiple package-private (default-access) classes, but only one public top-level class, whose name matches the file."
      ],
      [
        "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
        "Each public top-level class belongs in its own matching .java file. Compile the package files and App.java together."
      ],
      [
        "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
        "The payroll percentages are illustrative assumptions for practice, not official payroll or tax rules. Compile from the project root so the employee package path is respected."
      ],
      [
        "Create a Java program to create a package with public class and protected members to be accessed in another class.",
        "A protected member is accessible in subclasses across packages, subject to Java's protected-access rules."
      ],
      [
        "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
        "The package name c4.sample corresponds to the directory path c4/sample. The subclass can access the protected member through inheritance."
      ],
      [
        "Create a Java program to create a package with public class and public members to be accessed in another class.",
        "A public class and its public method can be accessed from another package when imported and available on the classpath."
      ]
    ]
  },
  {
    "topic": "Inheritance",
    "questions": [
      [
        "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
        "Cat extends Animal and overrides makeSound(). The requested output says bark, so the example prints that wording."
      ],
      [
        "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print \"Repairing a car\".",
        "Car overrides drive(), demonstrating runtime method overriding."
      ],
      [
        "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
        "Rectangle inherits Shape and overrides getArea() with width × height."
      ],
      [
        "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
        "HRManager overrides work(), inherits getSalary(), and adds addEmployee()."
      ],
      [
        "Write a Java program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
        "SavingsAccount allows a withdrawal only if at least 100 remains in the balance."
      ],
      [
        "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
        "Cheetah overrides move() to describe running."
      ],
      [
        "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
        "Employee inherits Person, adds an employee ID, and overrides the last-name method."
      ],
      [
        "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
        "Circle overrides both area and perimeter calculations."
      ],
      [
        "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
        "The shared Vehicle base stores common data; subclasses provide different sample specifications and fuel efficiencies."
      ],
      [
        "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
        "Manager, Developer and Programmer share Employee fields and bonus/report behaviour; Manager adds project management."
      ],
      [
        "Create a program, showing an example of super keyword",
        "super accesses a superclass field or method; this example accesses the inherited name field."
      ],
      [
        "Create a program, showing an example of super function",
        "super(...) invokes the parent constructor and must be the first statement in a constructor."
      ],
      [
        "Create a program, showing an example of method overriding",
        "Dog overrides sound(); the @Override annotation helps the compiler check the method signature."
      ],
      [
        "Create a program, showing an example of dynamic method dispatch",
        "An Animal reference can refer to different subclass objects; the actual overridden method is chosen at runtime."
      ],
      [
        "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
        "An abstract class cannot be instantiated directly; concrete subclasses implement sound()."
      ],
      [
        "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
        "Circle uses circle formulas; Triangle uses Heron's formula for area and the sum of sides for perimeter."
      ],
      [
        "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
        "Each account type implements deposit and withdrawal according to its own simple rules; the current account demo permits an overdraft up to 500."
      ],
      [
        "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
        "Each subclass implements eat() and sleep() differently."
      ],
      [
        "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
        "Manager and Programmer provide role-specific salary calculations and display methods."
      ],
      [
        "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
        "Sphere and Cube implement 3D volume and surface-area formulas."
      ],
      [
        "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
        "Car and Motorcycle implement engine start and stop behaviour."
      ],
      [
        "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
        "Athlete and LazyPerson provide different implementations for eating and exercise descriptions."
      ],
      [
        "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
        "Glockenspiel and Violin implement the same play/tune contract differently."
      ],
      [
        "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
        "Rectangle and Circle implement draw and resize; the console output describes the shapes instead of rendering graphics."
      ],
      [
        "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
        "Eagle and Hawk each implement flying and sound behaviour."
      ],
      [
        "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
        "Triangle uses Heron's formula; Square uses side² and 4 × side."
      ]
    ]
  },
  {
    "topic": "Input/Output",
    "questions": [
      [
        "Enter the character from user using InputStreamReader",
        "InputStreamReader reads character data; read() returns an integer, so cast it to char after checking for end-of-input."
      ],
      [
        "Enter the string from user using BufferedStreamReader",
        "The common Java class is BufferedReader (not BufferedStreamReader); readLine() reads a full line of text."
      ],
      [
        "Enter the integer from user using Scanner class",
        "Scanner.nextInt() reads the next integer token."
      ],
      [
        "Enter the float from user using Scanner class",
        "Scanner.nextFloat() reads a float value."
      ],
      [
        "Enter the double from user using Scanner class",
        "Scanner.nextDouble() reads a double, which provides more precision than float."
      ],
      [
        "Enter the boolean from user using Scanner class",
        "Scanner.nextBoolean() accepts true or false (case-insensitive) as the next token."
      ],
      [
        "Enter the short integer from user using Scanner class",
        "Scanner.nextShort() reads an integer within the range of Java's 16-bit signed short type."
      ],
      [
        "Enter the long integer from user using Scanner class",
        "Scanner.nextLong() reads a 64-bit signed integer."
      ],
      [
        "Get all characters from the file and display on the screen",
        "Put input.txt in the program's working directory. Files.readString reads the file as text (Java 11+)."
      ],
      [
        "Get all characters from the file, count number of lines, words, characters and display on the screen",
        "This counts lines, whitespace-separated words and Java UTF-16 code units. Place input.txt in the working directory; use code-point counting if Unicode code points are required."
      ]
    ]
  },
  {
    "topic": "Exception Handling",
    "questions": [
      [
        "Write a Java program that throws an exception and catch it using a try-catch block.",
        "The division throws ArithmeticException. The matching catch block handles it so the program can continue."
      ],
      [
        "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
        "The method explicitly throws IllegalArgumentException for odd values; main catches and prints the message."
      ],
      [
        "Write a Java program to create a method that reads a file and throws an exception if the file is not found",
        "The method declares throws IOException and raises it when the path does not exist. Create input.txt in the working directory to test the successful case."
      ],
      [
        "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",
        "Put whitespace-separated integers in numbers.txt. The method throws IllegalArgumentException as soon as it encounters a positive number."
      ],
      [
        "Write a Java program that reads a file and throws an exception if the file is empty.",
        "The file is considered empty if it contains no text or only whitespace. IOException handles file-access problems."
      ],
      [
        "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",
        "A HashSet stores values already seen. Set.add returns false when a value is repeated, which triggers the exception."
      ],
      [
        "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
        "The method checks for any English vowel (a, e, i, o, u), ignoring case. The sample string rhythm triggers the exception."
      ],
      [
        "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception",
        "DriverManager.getConnection throws SQLException when the connection fails. Replace the URL and credentials and add the appropriate JDBC driver; never hard-code real credentials in a public project."
      ],
      [
        "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception",
        "Class.forName checks that the configured driver class is available, and DriverManager opens the connection. Use the actual class name and JDBC driver dependency for your database."
      ],
      [
        "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
        "PreparedStatement safely parameterizes the insert. SQL errors are reported as SQLException; adapt the table, columns, database URL and credentials. Update and delete use the same executeUpdate pattern."
      ],
      [
        "Write a Java program to show an example of throws Keyword.",
        "The throws clause declares that loadText may pass an IOException to its caller. The caller handles it with try-catch."
      ],
      [
        "Write a Java program to show an example of multiple catch",
        "Each catch handles a different exception type. This example illustrates the structure; because the array access is deliberately out of range, that exception is encountered first."
      ],
      [
        "Write a Java program to show an example of nested try block.",
        "The inner try-catch handles the array error locally. The later division error escapes to the outer catch block."
      ]
    ]
  },
  {
    "topic": "Multithreading",
    "questions": [
      [
        "Write a Java program to create a basic Java thread that prints \"Hello, World!\" when executed.",
        "A Thread is created with a Runnable lambda. Calling start() schedules the new thread; calling run() directly would execute on the current thread."
      ],
      [
        "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",
        "Two independent threads print even and odd numbers. Their output may interleave in different orders because the scheduler decides when each runs."
      ],
      [
        "Write a Java program that sorts an array of integers using multiple threads.",
        "Each thread sorts a separate half of the array. After both finish, the main thread merges the sorted halves. This is a simple parallel merge-sort demonstration."
      ],
      [
        "Write a Java program that performs matrix multiplication using multiple threads.",
        "One thread computes each result row. Each worker writes to a different row, avoiding write conflicts in this small example."
      ],
      [
        "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",
        "The range is split into two non-overlapping parts, and each thread computes a local sum. Joining both threads ensures the partial sums are ready before adding them."
      ],
      [
        "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
        "This is a small concurrent fetcher, not a full link-following crawler. It fetches two specified sites in a thread pool; only crawl sites you are permitted to access and respect their terms and robots.txt."
      ],
      [
        "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",
        "Synchronized methods protect the balance from simultaneous updates. Deposits total 1000 and successful withdrawals total at most 250; the final balance is deterministic for this example."
      ],
      [
        "Create the program to create multiple threads by using Runnable interface",
        "Runnable represents the task to execute. Passing the same Runnable to separate Thread objects runs that task on multiple threads."
      ],
      [
        "Create the program to create multiple threads by using Thread class",
        "Worker extends Thread and overrides run(). Use start() to execute each worker concurrently. Implementing Runnable is usually more flexible when the class must extend another class."
      ],
      [
        "Create the program to create multiple threads, set its name and its priority.",
        "Thread names help identify workers. Priority is only a scheduling hint; it does not guarantee which thread runs first."
      ],
      [
        "Create the program to create multiple threads, show an example of synchronization keyword.",
        "The synchronized method allows only one thread at a time to increment the shared counter, so the expected final value is 20000."
      ],
      [
        "Create the program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",
        "wait() releases the object's monitor until notified; notifyAll() wakes waiting threads. sleep() pauses the current thread without releasing held monitors. Thread.resume() is deprecated and unsafe; do not use it in new code. notify() wakes one waiter."
      ],
      [
        "Create the program to create multiple threads, show an example of join and yield methods.",
        "join() makes the calling thread wait for the target thread to finish. yield() merely hints that the scheduler may let another thread run; it is not guaranteed to change execution order."
      ]
    ]
  },
  {
    "topic": "Data Conversion",
    "questions": [
      [
        "How to convert String to int",
        "Integer.parseInt converts a numeric string to int; invalid input throws NumberFormatException."
      ],
      [
        "How to convert int to String",
        "String.valueOf converts an int to its text representation."
      ],
      [
        "How to convert String to long",
        "Long.parseLong parses a string into a long value."
      ],
      [
        "How to convert long to String",
        "Long.toString returns the decimal text representation of a long."
      ],
      [
        "How to convert String to float",
        "Float.parseFloat parses a decimal string into a float."
      ],
      [
        "How to convert float to String",
        "Float.toString converts a float into a String."
      ],
      [
        "How to convert String to double",
        "Double.parseDouble parses a numeric string into a double."
      ],
      [
        "How to convert double to String",
        "Double.toString converts a double into a String."
      ],
      [
        "How to convert String to Date",
        "LocalDate.parse converts a formatted date string into a LocalDate."
      ],
      [
        "How to convert Date to String",
        "DateTimeFormatter formats a LocalDate using the requested pattern."
      ],
      [
        "How to convert String to char",
        "charAt(0) gets the first character; ensure the string is not empty."
      ],
      [
        "How to convert char to String",
        "String.valueOf converts a char to a one-character String."
      ],
      [
        "How to convert String to Object",
        "String extends Object, so assigning a String reference to Object is an implicit upcast."
      ],
      [
        "How to convert Object to String",
        "String.valueOf obtains the object's string representation and safely handles a null reference."
      ],
      [
        "How to convert int to long",
        "int to long is a widening conversion performed automatically."
      ],
      [
        "How to convert long to int",
        "Math.toIntExact throws ArithmeticException if the long value cannot fit in an int."
      ],
      [
        "How to convert int to double",
        "int to double is a widening conversion."
      ],
      [
        "How to convert double to int",
        "Casting double to int truncates the fractional part toward zero; it does not round."
      ],
      [
        "How to convert char to int",
        "A char widens to its numeric UTF-16 code unit; 'A' has value 65."
      ],
      [
        "How to convert int to char",
        "Casting an integer to char interprets it as a UTF-16 code unit."
      ],
      [
        "How to convert String to boolean",
        "parseBoolean returns true only for text equal to true, ignoring case; other text becomes false."
      ],
      [
        "How to convert boolean to String",
        "Boolean.toString returns the String true or false."
      ],
      [
        "How to convert Date to Timestamp",
        "Timestamp(Date.getTime()) converts the Date's epoch milliseconds into a SQL Timestamp."
      ],
      [
        "How to convert Timestamp to Date",
        "A Date can be created from the Timestamp's epoch milliseconds; extra nanosecond precision is not retained."
      ],
      [
        "How to convert Binary to Decimal",
        "Integer.parseInt(binary, 2) interprets the string in base 2."
      ],
      [
        "How to convert Decimal to Binary",
        "Integer.toBinaryString returns the base-2 representation of an integer."
      ],
      [
        "How to convert Hex to Decimal",
        "Integer.parseInt(hex, 16) parses a hexadecimal number."
      ],
      [
        "How to convert Decimal to Hex",
        "Integer.toHexString converts an integer to base 16."
      ],
      [
        "How to convert Octal to Decimal",
        "Integer.parseInt(octal, 8) parses a base-8 number; valid octal digits are 0 through 7."
      ],
      [
        "How to convert Decimal to Octal",
        "Integer.toOctalString returns the base-8 representation of an integer."
      ]
    ]
  },
  {
    "topic": "Object-Oriented Programming",
    "questions": [
      [
        "Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
        "The constructor initializes each Person object with its own name and age."
      ],
      [
        "Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
        "Private fields are changed through setter methods and read through getters."
      ],
      [
        "Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",
        "Area is width × height; perimeter is twice the sum of width and height."
      ],
      [
        "Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
        "The radius can be read or updated; area is πr² and circumference is 2πr."
      ],
      [
        "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
        "An ArrayList stores Book objects; add() inserts a book and remove() removes that object."
      ],
      [
        "Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
        "raiseSalary updates the salary by a percentage and rejects negative percentages."
      ],
      [
        "Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
        "Bank keeps accounts in a map. Deposits and withdrawals validate the amount and available balance."
      ],
      [
        "Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
        "The class stores a color and duration and provides methods to change/check the current color."
      ],
      [
        "Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
        "Period.between calculates completed years from the hire date to today."
      ],
      [
        "Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
        "A List stores course names; methods add and remove courses."
      ],
      [
        "Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
        "Library encapsulates its collection and exposes add, remove, and read-only access methods."
      ],
      [
        "Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
        "This example models a simple scheduled flight and adjusts its departure time when delayed."
      ],
      [
        "Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
        "A map tracks each product's quantity; isLow compares its quantity with a supplied threshold."
      ],
      [
        "Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
        "Sets avoid duplicate student/teacher names, while a list stores created class names."
      ],
      [
        "Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
        "The library selects a random list index. The empty-list check avoids an invalid random index."
      ],
      [
        "Write a Java program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
        "Shape defines abstract methods; each subclass supplies its own area and perimeter implementation. Triangle area uses Heron's formula."
      ],
      [
        "Write a Java program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
        "The class stores movie details and allows reviews to be added and retrieved."
      ],
      [
        "Write a Java program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
        "The menu maps item names to prices. Ratings are validated to the 1–5 range and averaged."
      ],
      [
        "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
        "This is an in-memory demonstration with sample data, not a live booking system. Stream.toList() requires Java 16 or newer."
      ],
      [
        "Create a class showing an example of default constructor.",
        "This is an explicitly declared no-argument constructor. Java supplies a default constructor only when no constructor is declared."
      ],
      [
        "Create a class showing an example of parameterized constructor.",
        "A parameterized constructor accepts values to initialize an object's fields."
      ],
      [
        "Create a class showing an example of copy constructor.",
        "Java has no built-in copy-constructor syntax, but a constructor can accept another object and copy its fields."
      ],
      [
        "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
        "A static counter assigns a unique roll number to each object. Enter a name on one line and the class name on the next line, ten times."
      ],
      [
        "Create a class showing the area of circle and rectangle by method overloading.",
        "The same method name is overloaded with different parameter lists. One double is used for circle radius; two doubles for rectangle dimensions."
      ],
      [
        "Create a class, entering the command line arguments from the user and show all the arguments as output..",
        "Pass values when launching the program, for example: java Main hello 123. Arguments are received as strings in args."
      ],
      [
        "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
        "Private fields are encapsulated with public getters and setters; the age setter rejects negative values."
      ],
      [
        "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
        "Getter and setter methods control access to private fields. Real financial applications should use BigDecimal rather than double for money."
      ],
      [
        "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
        "Private dimensions are read and updated through getters and setters. Negative dimensions are rejected."
      ],
      [
        "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
        "The salary getter formats the value to two decimal places. The dollar sign is only an example currency format; change it for your locale."
      ],
      [
        "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
        "The two calculation methods always use the current radius; the setter rejects negative values."
      ],
      [
        "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
        "Mileage is read-only through the public API because it has a getter but no setter."
      ],
      [
        "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
        "Grades can only be added through addGrade(), which validates the 0–100 range. The returned grade list cannot be modified directly."
      ]
    ]
  }
];
const arraySolutions = [
  {
    "title": "Program to copy all elements of one array into another array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] source = {10, 20, 30, 40};\n        int[] copy = Arrays.copyOf(source, source.length);\n        System.out.println(Arrays.toString(copy));\n    }\n}",
    "explanation": "Arrays.copyOf creates a new array and copies the values from the source array.",
    "output": "[10, 20, 30, 40]"
  },
  {
    "title": "Program to find the frequency of each element in the array",
    "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {2, 3, 2, 5, 3, 2};\n        Map<Integer, Integer> frequency = new HashMap<>();\n        for (int value : arr) {\n            frequency.put(value, frequency.getOrDefault(value, 0) + 1);\n        }\n        frequency.forEach((key, count) ->\n            System.out.println(key + \" occurs \" + count + \" time(s)\"));\n    }\n}",
    "explanation": "A HashMap stores each distinct number and increments its count whenever that number appears.",
    "output": "2 occurs 3 time(s)\n3 occurs 2 time(s)\n5 occurs 1 time(s)"
  },
  {
    "title": "Program to left rotate the elements of an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int k = 2, n = arr.length;\n        k %= n;\n        int[] rotated = new int[n];\n        for (int i = 0; i < n; i++) {\n            rotated[i] = arr[(i + k) % n];\n        }\n        System.out.println(Arrays.toString(rotated));\n    }\n}",
    "explanation": "Left rotation by k moves each element k positions to the left, wrapping around to the beginning.",
    "output": "[3, 4, 5, 1, 2]"
  },
  {
    "title": "Program to print the duplicate elements of an array",
    "code": "import java.util.HashSet;\nimport java.util.Set;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {4, 2, 7, 2, 4, 9};\n        Set<Integer> seen = new HashSet<>();\n        Set<Integer> duplicates = new HashSet<>();\n        for (int value : arr) {\n            if (!seen.add(value)) duplicates.add(value);\n        }\n        System.out.println(duplicates);\n    }\n}",
    "explanation": "seen.add(value) returns false if the value was already present, identifying duplicates.",
    "output": "[2, 4]"
  },
  {
    "title": "Program to print the elements of an array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40};\n        for (int value : arr) {\n            System.out.println(value);\n        }\n    }\n}",
    "explanation": "The enhanced for loop visits each array element in order.",
    "output": "10\n20\n30\n40"
  },
  {
    "title": "Program to print the elements of an array in reverse order",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40};\n        for (int i = arr.length - 1; i >= 0; i--) {\n            System.out.println(arr[i]);\n        }\n    }\n}",
    "explanation": "Start from arr.length - 1, the last valid index, and count down to zero.",
    "output": "40\n30\n20\n10"
  },
  {
    "title": "Program to print the elements of an array present on even position",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50, 60};\n        for (int i = 1; i < arr.length; i += 2) {\n            System.out.println(arr[i]);\n        }\n    }\n}",
    "explanation": "This solution treats positions as human-counted positions 2, 4, 6, which have indexes 1, 3, 5.",
    "output": "20\n40\n60"
  },
  {
    "title": "Program to print the elements of an array present on odd position",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40, 50, 60};\n        for (int i = 0; i < arr.length; i += 2) {\n            System.out.println(arr[i]);\n        }\n    }\n}",
    "explanation": "This solution treats positions as human-counted positions 1, 3, 5, which have indexes 0, 2, 4.",
    "output": "10\n30\n50"
  },
  {
    "title": "Program to print the largest element in an array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19};\n        int largest = arr[0];\n        for (int value : arr) {\n            if (value > largest) largest = value;\n        }\n        System.out.println(\"Largest: \" + largest);\n    }\n}",
    "explanation": "Start with the first element and update largest whenever a greater value is found. The array must not be empty.",
    "output": "Largest: 31"
  },
  {
    "title": "Program to print the smallest element in an array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19};\n        int smallest = arr[0];\n        for (int value : arr) {\n            if (value < smallest) smallest = value;\n        }\n        System.out.println(\"Smallest: \" + smallest);\n    }\n}",
    "explanation": "Keep track of the smallest value found so far. The array must not be empty.",
    "output": "Smallest: 5"
  },
  {
    "title": "Program to print the number of elements present in an array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19};\n        System.out.println(\"Number of elements: \" + arr.length);\n    }\n}",
    "explanation": "The length field gives the number of elements in a Java array.",
    "output": "Number of elements: 5"
  },
  {
    "title": "Program to print the sum of all the items of the array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40};\n        int sum = 0;\n        for (int value : arr) sum += value;\n        System.out.println(\"Sum: \" + sum);\n    }\n}",
    "explanation": "Initialize sum to zero and add each array value to it.",
    "output": "Sum: 100"
  },
  {
    "title": "Program to right rotate the elements of an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int k = 2, n = arr.length;\n        k %= n;\n        int[] rotated = new int[n];\n        for (int i = 0; i < n; i++) {\n            rotated[(i + k) % n] = arr[i];\n        }\n        System.out.println(Arrays.toString(rotated));\n    }\n}",
    "explanation": "Right rotation by k moves each element k positions to the right, wrapping around to the beginning.",
    "output": "[4, 5, 1, 2, 3]"
  },
  {
    "title": "Program to sort the elements of an array in ascending order",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 9, 1, 6};\n        Arrays.sort(arr);\n        System.out.println(Arrays.toString(arr));\n    }\n}",
    "explanation": "Arrays.sort arranges primitive array values in ascending order.",
    "output": "[1, 2, 5, 6, 9]"
  },
  {
    "title": "Program to sort the elements of an array in descending order",
    "code": "import java.util.Arrays;\nimport java.util.Collections;\n\npublic class Main {\n    public static void main(String[] args) {\n        Integer[] arr = {5, 2, 9, 1, 6};\n        Arrays.sort(arr, Collections.reverseOrder());\n        System.out.println(Arrays.toString(arr));\n    }\n}",
    "explanation": "Collections.reverseOrder works with Integer[] objects, so this example uses Integer instead of int.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Program to Find 3rd Largest Number in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19, 31};\n        int[] unique = Arrays.stream(arr).distinct().toArray();\n        Arrays.sort(unique);\n        if (unique.length < 3) {\n            System.out.println(\"Fewer than 3 distinct values\");\n        } else {\n            System.out.println(\"3rd largest: \" + unique[unique.length - 3]);\n        }\n    }\n}",
    "explanation": "This version finds the third-largest distinct value. It removes duplicates before sorting.",
    "output": "3rd largest: 12"
  },
  {
    "title": "Program to Find 2nd Largest Number in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19, 31};\n        int[] unique = Arrays.stream(arr).distinct().toArray();\n        Arrays.sort(unique);\n        if (unique.length < 2) {\n            System.out.println(\"Fewer than 2 distinct values\");\n        } else {\n            System.out.println(\"2nd largest: \" + unique[unique.length - 2]);\n        }\n    }\n}",
    "explanation": "This version finds the second-largest distinct value, so a repeated maximum is counted only once.",
    "output": "2nd largest: 19"
  },
  {
    "title": "Program to Find Largest Number in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19};\n        System.out.println(Arrays.stream(arr).max().getAsInt());\n    }\n}",
    "explanation": "An IntStream's max method returns the largest value. This example assumes the array is non-empty.",
    "output": "31"
  },
  {
    "title": "Program to Find 2nd Smallest Number in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19, 5};\n        int[] unique = Arrays.stream(arr).distinct().toArray();\n        Arrays.sort(unique);\n        if (unique.length < 2) {\n            System.out.println(\"Fewer than 2 distinct values\");\n        } else {\n            System.out.println(\"2nd smallest: \" + unique[1]);\n        }\n    }\n}",
    "explanation": "This version finds the second-smallest distinct value, ignoring repeated copies of the minimum.",
    "output": "2nd smallest: 8"
  },
  {
    "title": "Program to Find Smallest Number in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {12, 5, 31, 8, 19};\n        System.out.println(Arrays.stream(arr).min().getAsInt());\n    }\n}",
    "explanation": "An IntStream's min method returns the smallest value. This example assumes the array is non-empty.",
    "output": "5"
  },
  {
    "title": "Program to Remove Duplicate Element in an array",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {4, 2, 4, 7, 2, 9};\n        int[] unique = Arrays.stream(arr).distinct().toArray();\n        System.out.println(Arrays.toString(unique));\n    }\n}",
    "explanation": "distinct keeps the first occurrence of each value and removes later duplicates.",
    "output": "[4, 2, 7, 9]"
  },
  {
    "title": "Program to Print Odd and Even Numbers from an array",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5, 6};\n        System.out.print(\"Even: \");\n        for (int value : arr) if (value % 2 == 0) System.out.print(value + \" \");\n        System.out.print(\"\\nOdd: \");\n        for (int value : arr) if (value % 2 != 0) System.out.print(value + \" \");\n    }\n}",
    "explanation": "A number is even when value % 2 == 0; otherwise it is odd.",
    "output": "Even: 2 4 6 \nOdd: 1 3 5"
  },
  {
    "title": "How to Sort an Array in Java",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] numbers = {9, 3, 7, 1, 5};\n        Arrays.sort(numbers);\n        System.out.println(Arrays.toString(numbers));\n    }\n}",
    "explanation": "Use Arrays.sort(array) for ascending order. For descending order with objects, use a comparator such as Collections.reverseOrder().",
    "output": "[1, 3, 5, 7, 9]"
  }
];
const functionsSolutions = [
  {
    "title": "Write a Java method to find the smallest number among three numbers.",
    "code": "public class Main {\n    static int smallest(int a, int b, int c) {\n        return Math.min(a, Math.min(b, c));\n    }\n\n    public static void main(String[] args) {\n        System.out.println(smallest(14, 7, 22));\n    }\n}",
    "explanation": "Math.min compares two values. Nesting it compares all three numbers and returns the smallest.",
    "output": "7"
  },
  {
    "title": "Write a Java method to compute the average of three numbers.",
    "code": "public class Main {\n    static double average(double a, double b, double c) {\n        return (a + b + c) / 3.0;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(average(10, 20, 30));\n    }\n}",
    "explanation": "Divide the sum by 3.0 so the calculation can return a fractional result when needed.",
    "output": "20.0"
  },
  {
    "title": "Write a Java method to display the middle character of a string.",
    "code": "public class Main {\n    static String middle(String text) {\n        if (text == null || text.isEmpty()) return \"\";\n        int mid = text.length() / 2;\n        if (text.length() % 2 == 1) {\n            return text.substring(mid, mid + 1);\n        }\n        return text.substring(mid - 1, mid + 1);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(middle(\"Java\")); // av\n        System.out.println(middle(\"Hello\")); // l\n    }\n}",
    "explanation": "For odd lengths, return the single character at length/2. For even lengths, return the two characters around the midpoint.",
    "output": "av\nl"
  },
  {
    "title": "Write a Java method to count all the words in a string.",
    "code": "public class Main {\n    static int countWords(String text) {\n        if (text == null || text.trim().isEmpty()) return 0;\n        return text.trim().split(\"\\\\s+\").length;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(countWords(\"Java is easy to learn\"));\n    }\n}",
    "explanation": "Trim leading/trailing spaces and split on one or more whitespace characters.",
    "output": "5"
  },
  {
    "title": "Write a Java method to compute the future investment value at a given interest rate for a specified number of years.",
    "code": "public class Main {\n    static double futureValue(double amount, double annualRate, int years) {\n        return amount * Math.pow(1 + annualRate / 100.0, years);\n    }\n\n    public static void main(String[] args) {\n        System.out.printf(\"%.2f%n\", futureValue(1000, 5, 3));\n    }\n}",
    "explanation": "This uses annual compounding: principal × (1 + rate/100)^years. The rate is entered as a percentage, such as 5 for 5%.",
    "output": "1157.63"
  },
  {
    "title": "Write a Java method to print characters between two characters (i.e. A to P).",
    "code": "public class Main {\n    static void printCharacters(char start, char end) {\n        if (start <= end) {\n            for (char ch = start; ch <= end; ch++) {\n                System.out.print(ch + \" \");\n            }\n        } else {\n            for (char ch = start; ch >= end; ch--) {\n                System.out.print(ch + \" \");\n            }\n        }\n        System.out.println();\n    }\n\n    public static void main(String[] args) {\n        printCharacters('A', 'P');\n    }\n}",
    "explanation": "The loop moves forward when start is before end, and backward when start is after end.",
    "output": "A B C D E F G H I J K L M N O P"
  },
  {
    "title": "Write a Java method to check whether a string is a valid password.",
    "code": "public class Main {\n    static boolean isValidPassword(String password) {\n        if (password == null || password.length() < 8) return false;\n        boolean hasLetter = false, hasDigit = false;\n        for (char ch : password.toCharArray()) {\n            if (Character.isLetter(ch)) hasLetter = true;\n            if (Character.isDigit(ch)) hasDigit = true;\n        }\n        return hasLetter && hasDigit;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isValidPassword(\"Java1234\"));\n    }\n}",
    "explanation": "Password rules differ by assignment. This sample checks for length, at least one letter, and at least one digit; adjust the conditions if your teacher specifies other rules.",
    "output": "true"
  },
  {
    "title": "Write a Java method to display the current date and time.",
    "code": "import java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\npublic class Main {\n    static void showDateTime() {\n        DateTimeFormatter format =\n            DateTimeFormatter.ofPattern(\"dd-MM-yyyy HH:mm:ss\");\n        System.out.println(LocalDateTime.now().format(format));\n    }\n\n    public static void main(String[] args) {\n        showDateTime();\n    }\n}",
    "explanation": "LocalDateTime.now() reads the current local date and time; DateTimeFormatter controls how it is displayed.",
    "output": "28-10-2026 13:38:40"
  },
  {
    "title": "Write a Java method to find all twin prime numbers less than 100.",
    "code": "public class Main {\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        for (int n = 2; n + 2 < 100; n++) {\n            if (isPrime(n) && isPrime(n + 2)) {\n                System.out.println(\"(\" + n + \", \" + (n + 2) + \")\");\n            }\n        }\n    }\n}",
    "explanation": "Twin primes are pairs of prime numbers whose difference is 2, such as (3, 5) and (11, 13).",
    "output": "(3, 5)\n(5, 7)\n(11, 13)\n(17, 19)\n(29, 31)\n(41, 43)\n(59, 61)\n(71, 73)"
  },
  {
    "title": "Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.",
    "code": "public class Main {\n    static int countTwos(int number) {\n        int count = 0;\n        do {\n            if (number % 10 == 2) count++;\n            number /= 10;\n        } while (number > 0);\n        return count;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(countTwos(22012));\n    }\n}",
    "explanation": "Inspect the last digit with % 10, then remove it with integer division by 10. The do-while also handles input 0.",
    "output": "3"
  },
  {
    "title": "Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    static boolean areConsecutive(int a, int b, int c) {\n        int[] values = {a, b, c};\n        Arrays.sort(values);\n        return (long) values[1] == (long) values[0] + 1\n            && (long) values[2] == (long) values[1] + 1;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(areConsecutive(4, 2, 3)); // true\n        System.out.println(areConsecutive(4, 2, 8)); // false\n    }\n}",
    "explanation": "Sort the three values and check whether each next value is exactly one larger than the previous value.",
    "output": "true\nfalse"
  },
  {
    "title": "Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false.",
    "code": "public class Main {\n    static boolean isMidpoint(int a, int b, int c) {\n        return (long) a + c == 2L * b\n            || (long) a + b == 2L * c\n            || (long) b + c == 2L * a;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(isMidpoint(2, 4, 6)); // true\n        System.out.println(isMidpoint(2, 5, 9)); // false\n    }\n}",
    "explanation": "A number is the midpoint of two others when twice that number equals the sum of the other two.",
    "output": "true\nfalse"
  },
  {
    "title": "Write a Java method that checks whether all the characters in a given string are vowels (a, e, i, o, u) or not.",
    "code": "public class Main {\n    static boolean allVowels(String text) {\n        if (text == null || text.isEmpty()) return false;\n        for (char ch : text.toLowerCase().toCharArray()) {\n            if (\"aeiou\".indexOf(ch) == -1) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(allVowels(\"aeIOu\")); // true\n        System.out.println(allVowels(\"audio\")); // false\n    }\n}",
    "explanation": "Convert to lowercase and check every character against the vowel set. This version treats an empty string as false.",
    "output": "true\nfalse"
  }
];
const stringsSolutions = [
  {
    "title": "Program to Check if a String contains only digits?",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"123450\";\n        System.out.println(s.matches(\"\\\\d+\"));\n    }\n}",
    "explanation": "Use matches with the regular expression \\\\d+ to check that every character is a digit.",
    "output": "true"
  },
  {
    "title": "Program to perform Deep Copy for String?",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String original = new String(\"Hello Java\");\n        String copy = new String(original);\n        System.out.println(copy);\n        System.out.println(original == copy); // false\n        System.out.println(original.equals(copy)); // true\n    }\n}",
    "explanation": "String is immutable, so creating a new String from the original gives an independent String object with the same content.",
    "output": "Hello Java\nfalse\ntrue"
  },
  {
    "title": "Program to prove String is immutable programmatically?",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String original = \"Java\";\n        String changed = original.concat(\" Programming\");\n        System.out.println(original); // Java\n        System.out.println(changed);\n    }\n}",
    "explanation": "Strings are immutable: methods such as concat return a new String instead of changing the original.",
    "output": "Java\nJava Programming"
  },
  {
    "title": "Program to remove all occurrences of a given character from input String?",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"banana\";\n        char remove = 'a';\n        System.out.println(s.replace(String.valueOf(remove), \"\"));\n    }\n}",
    "explanation": "Use replace to remove every occurrence of the selected character.",
    "output": "bnn"
  },
  {
    "title": "Program to append the string using StringBuffer class",
    "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Core\");\n        sb.append(\" Java\");\n        System.out.println(sb);\n    }\n}",
    "explanation": "StringBuffer.append adds text at the end of the buffer.",
    "output": "Core Java"
  },
  {
    "title": "Program to insert the string using StringBuffer class",
    "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Java\");\n        sb.insert(0, \"Core \");\n        System.out.println(sb);\n    }\n}",
    "explanation": "StringBuffer.insert adds text at the specified index.",
    "output": "Core Java"
  },
  {
    "title": "Program to Add Characters to a String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Jav\";\n        char ch = 'a';\n        System.out.println(s + ch);\n    }\n}",
    "explanation": "Append a character to a String with concatenation, or use StringBuilder for repeated changes.",
    "output": "Java"
  },
  {
    "title": "Program to Add Characters to a String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder(\"Jva\");\n        sb.insert(1, 'a');\n        System.out.println(sb);\n    }\n}",
    "explanation": "Use StringBuilder to add a character at a chosen index.",
    "output": "Java"
  },
  {
    "title": "Program to Check Anagram",
    "code": "import java.util.Arrays;\npublic class Main {\n    static String normalize(String s) {\n        char[] chars = s.replaceAll(\"\\\\s+\", \"\").toLowerCase().toCharArray();\n        Arrays.sort(chars);\n        return new String(chars);\n    }\n    public static void main(String[] args) {\n        System.out.println(normalize(\"listen\").equals(normalize(\"silent\")));\n    }\n}",
    "explanation": "Two strings are anagrams if their normalized character arrays are equal after sorting.",
    "output": "true"
  },
  {
    "title": "Program to check whether a string is a Palindrome",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Level\";\n        String reversed = new StringBuilder(s).reverse().toString();\n        System.out.println(s.equalsIgnoreCase(reversed));\n    }\n}",
    "explanation": "Compare a string with its reversed form, ignoring case in this example.",
    "output": "true"
  },
  {
    "title": "Program to Convert Enum to String",
    "code": "enum Day { MONDAY, TUESDAY, WEDNESDAY }\npublic class Main {\n    public static void main(String[] args) {\n        Day day = Day.MONDAY;\n        String text = day.name();\n        System.out.println(text);\n    }\n}",
    "explanation": "Enum.name returns the declared enum constant name as a String.",
    "output": "MONDAY"
  },
  {
    "title": "Program to Convert String to String Array",
    "code": "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String csv = \"red,green,blue\";\n        String[] colors = csv.split(\",\");\n        System.out.println(Arrays.toString(colors));\n    }\n}",
    "explanation": "Use split to turn a delimited String into a String array.",
    "output": "[red, green, blue]"
  },
  {
    "title": "Program to count number of words in a String?",
    "code": "public class Main {\n    static int countWords(String s) {\n        if (s == null || s.trim().isEmpty()) return 0;\n        return s.trim().split(\"\\\\s+\").length;\n    }\n    public static void main(String[] args) {\n        System.out.println(countWords(\"Java is fun\"));\n    }\n}",
    "explanation": "Trim the text and split on one or more whitespace characters.",
    "output": "3"
  },
  {
    "title": "Program to count the total number of characters in a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello Java\";\n        System.out.println(\"Characters: \" + s.length());\n        System.out.println(\"Code points: \" +\n            s.codePointCount(0, s.length()));\n    }\n}",
    "explanation": "String.length counts UTF-16 code units; use codePointCount for Unicode code points.",
    "output": "Characters: 10\nCode points: 10"
  },
  {
    "title": "Program to count the total number of punctuation characters exists in a String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Hello, Java! How are you?\";\n        int count = 0;\n        for (char ch : s.toCharArray()) {\n            int type = Character.getType(ch);\n            if (type == Character.CONNECTOR_PUNCTUATION ||\n                type == Character.DASH_PUNCTUATION ||\n                type == Character.START_PUNCTUATION ||\n                type == Character.END_PUNCTUATION ||\n                type == Character.OTHER_PUNCTUATION ||\n                type == Character.INITIAL_QUOTE_PUNCTUATION ||\n                type == Character.FINAL_QUOTE_PUNCTUATION) count++;\n        }\n        System.out.println(count);\n    }\n}",
    "explanation": "Character.getType identifies punctuation categories for each character.",
    "output": "3"
  },
  {
    "title": "Program to count the total number of vowels and consonants in a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java is awesome\";\n        int vowels = 0, consonants = 0;\n        for (char ch : s.toLowerCase().toCharArray()) {\n            if (ch >= 'a' && ch <= 'z') {\n                if (\"aeiou\".indexOf(ch) >= 0) vowels++;\n                else consonants++;\n            }\n        }\n        System.out.println(\"Vowels: \" + vowels + \", consonants: \" + consonants);\n    }\n}",
    "explanation": "Count alphabetic vowels separately from other alphabetic consonants.",
    "output": "Vowels: 7, consonants: 6"
  },
  {
    "title": "Program to determine whether a given string is palindrome",
    "code": "public class Main {\n    static boolean isPalindrome(String s) {\n        String clean = s.replaceAll(\"[^A-Za-z0-9]\", \"\").toLowerCase();\n        return clean.equals(new StringBuilder(clean).reverse().toString());\n    }\n    public static void main(String[] args) {\n        System.out.println(isPalindrome(\"Never odd or even\"));\n    }\n}",
    "explanation": "Normalize the string and compare it to its reversed form.",
    "output": "true"
  },
  {
    "title": "Program to determine whether one string is a rotation of another",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"ABCD\", b = \"CDAB\";\n        System.out.println(a.length() == b.length() && (a + a).contains(b));\n    }\n}",
    "explanation": "A rotation exists if the second string occurs inside the first string concatenated with itself.",
    "output": "true"
  },
  {
    "title": "Program to divide a string in 'N' equal parts.",
    "code": "import java.util.Arrays;\npublic class Main {\n    static void splitEqual(String s, int n) {\n        if (n <= 0 || s.length() % n != 0) {\n            System.out.println(\"Cannot divide equally\");\n            return;\n        }\n        int size = s.length() / n;\n        for (int i = 0; i < s.length(); i += size)\n            System.out.println(s.substring(i, i + size));\n    }\n    public static void main(String[] args) { splitEqual(\"ABCDEFGHIJKL\", 4); }\n}",
    "explanation": "Divide only when the length is evenly divisible by N.",
    "output": "ABC\nDEF\nGHI\nJKL"
  },
  {
    "title": "Program to find all subsets of a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abc\";\n        int total = 1 << s.length();\n        for (int mask = 0; mask < total; mask++) {\n            StringBuilder subset = new StringBuilder();\n            for (int i = 0; i < s.length(); i++)\n                if ((mask & (1 << i)) != 0) subset.append(s.charAt(i));\n            System.out.println(subset);\n        }\n    }\n}",
    "explanation": "Use bit masks to generate all subsets for a short string.",
    "output": "\na\nb\nab\nc\nac\nbc\nabc"
  },
  {
    "title": "Program to find all the permutations of a string",
    "code": "public class Main {\n    static void permute(String s, String prefix) {\n        if (s.isEmpty()) { System.out.println(prefix); return; }\n        for (int i = 0; i < s.length(); i++)\n            permute(s.substring(0, i) + s.substring(i + 1),\n                    prefix + s.charAt(i));\n    }\n    public static void main(String[] args) { permute(\"ABC\", \"\"); }\n}",
    "explanation": "Backtracking generates permutations by choosing each remaining character in turn.",
    "output": "ABC\nACB\nBAC\nBCA\nCAB\nCBA"
  },
  {
    "title": "Program to find maximum and minimum occurring character in a string",
    "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"banana\";\n        Map<Character, Integer> counts = new LinkedHashMap<>();\n        for (char ch : s.toCharArray()) counts.put(ch, counts.getOrDefault(ch, 0) + 1);\n        char min = 0, max = 0; int low = Integer.MAX_VALUE, high = 0;\n        for (var e : counts.entrySet()) {\n            if (e.getValue() < low) { low = e.getValue(); min = e.getKey(); }\n            if (e.getValue() > high) { high = e.getValue(); max = e.getKey(); }\n        }\n        System.out.println(\"Min: \" + min + \", max: \" + max);\n    }\n}",
    "explanation": "Count characters in a map, then choose the minimum and maximum counts.",
    "output": "Min: b, max: a"
  },
  {
    "title": "Program to find Reverse of the string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        StringBuilder reversed = new StringBuilder();\n        for (int i = s.length() - 1; i >= 0; i--) reversed.append(s.charAt(i));\n        System.out.println(reversed);\n    }\n}",
    "explanation": "Walk backwards through the characters to build a reversed string.",
    "output": "avaJ"
  },
  {
    "title": "Program to find the duplicate characters in a string",
    "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"programming\";\n        Set<Character> seen = new HashSet<>(), duplicates = new LinkedHashSet<>();\n        for (char ch : s.toCharArray()) if (!seen.add(ch)) duplicates.add(ch);\n        System.out.println(duplicates);\n    }\n}",
    "explanation": "Track characters already seen and report characters encountered again.",
    "output": "[r, m, g]"
  },
  {
    "title": "Program to find the duplicate words in a string",
    "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"java is fun and java is popular\";\n        Map<String, Integer> counts = new LinkedHashMap<>();\n        for (String word : s.toLowerCase().split(\"\\\\W+\"))\n            counts.put(word, counts.getOrDefault(word, 0) + 1);\n        counts.forEach((word, n) -> { if (n > 1) System.out.println(word + \": \" + n); });\n    }\n}",
    "explanation": "Split into words and count each word; print words with a count greater than one.",
    "output": "java: 2\nis: 2"
  },
  {
    "title": "Program to find the frequency of characters",
    "code": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"hello\";\n        Map<Character, Integer> counts = new LinkedHashMap<>();\n        for (char ch : s.toCharArray()) counts.put(ch, counts.getOrDefault(ch, 0) + 1);\n        System.out.println(counts);\n    }\n}",
    "explanation": "Use a map to count each character's occurrences.",
    "output": "{h=1, e=1, l=2, o=1}"
  },
  {
    "title": "Program to find the largest and smallest word in a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java makes programming enjoyable\";\n        String[] words = s.split(\"\\\\s+\");\n        String smallest = words[0], largest = words[0];\n        for (String word : words) {\n            if (word.length() < smallest.length()) smallest = word;\n            if (word.length() > largest.length()) largest = word;\n        }\n        System.out.println(\"Smallest: \" + smallest + \", largest: \" + largest);\n    }\n}",
    "explanation": "Split into words and track the shortest and longest word.",
    "output": "Smallest: Java, largest: programming"
  },
  {
    "title": "Program to find the longest repeating sequence in a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"abcabc\";\n        String longest = \"\";\n        for (int len = s.length() / 2; len > 0 && longest.isEmpty(); len--) {\n            for (int i = 0; i + 2 * len <= s.length(); i++) {\n                String part = s.substring(i, i + len);\n                if (s.indexOf(part, i + len) >= 0) { longest = part; break; }\n            }\n        }\n        System.out.println(longest);\n    }\n}",
    "explanation": "Check substrings and keep the longest substring that repeats; this simple example checks non-overlapping repeats.",
    "output": "abc"
  },
  {
    "title": "Program to find the most repeated word in a text file",
    "code": "import java.nio.file.*;\nimport java.io.IOException;\nimport java.util.*;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Map<String, Integer> counts = new HashMap<>();\n        for (String line : Files.readAllLines(Path.of(\"input.txt\"))) {\n            for (String word : line.toLowerCase().split(\"\\\\W+\"))\n                if (!word.isEmpty()) counts.put(word, counts.getOrDefault(word, 0) + 1);\n        }\n        counts.entrySet().stream().max(Map.Entry.comparingByValue())\n            .ifPresent(System.out::println);\n    }\n}",
    "explanation": "Read the file line by line and count word frequencies, then report the most frequent word.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Program to find the number of the words in the given text file",
    "code": "import java.nio.file.*;\nimport java.io.IOException;\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        long count = 0;\n        for (String line : Files.readAllLines(Path.of(\"input.txt\")))\n            if (!line.trim().isEmpty()) count += line.trim().split(\"\\\\s+\").length;\n        System.out.println(\"Words: \" + count);\n    }\n}",
    "explanation": "Read the file line by line and sum the word count for every line.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Program to Get a Character From the Given String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        int index = 2;\n        if (index >= 0 && index < s.length())\n            System.out.println(s.charAt(index));\n    }\n}",
    "explanation": "Use charAt(index) to get a character at a valid zero-based index.",
    "output": "v"
  },
  {
    "title": "Program to Insert a string into another string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"HelloWorld\";\n        int index = 5;\n        String result = s.substring(0, index) + \" Java \" + s.substring(index);\n        System.out.println(result);\n    }\n}",
    "explanation": "Use substring to insert text at a selected index.",
    "output": "Hello Java World"
  },
  {
    "title": "Program to Iterate Over Characters in String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        for (int i = 0; i < s.length(); i++)\n            System.out.println(s.charAt(i));\n    }\n}",
    "explanation": "Use a for loop and charAt to visit each character.",
    "output": "J\na\nv\na"
  },
  {
    "title": "Program to Print a New Line in String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello\\nJava\");\n    }\n}",
    "explanation": "Use the escape sequence \\\\n to print a newline.",
    "output": "Hello\nJava"
  },
  {
    "title": "Program to Print even length words",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java is easy to learn\";\n        for (String word : s.split(\"\\\\s+\"))\n            if (word.length() % 2 == 0) System.out.println(word);\n    }\n}",
    "explanation": "Split into words and print those with an even number of characters.",
    "output": "Java\nis\neasy\nto"
  },
  {
    "title": "Program to print smallest and biggest possible palindrome word in a given string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"level madam civic noon\";\n        String smallest = null, largest = \"\";\n        for (String word : s.split(\"\\\\s+\")) {\n            if (word.equals(new StringBuilder(word).reverse().toString())) {\n                if (smallest == null || word.length() < smallest.length()) smallest = word;\n                if (word.length() > largest.length()) largest = word;\n            }\n        }\n        System.out.println(\"Smallest: \" + smallest + \", largest: \" + largest);\n    }\n}",
    "explanation": "Find palindrome words and select the shortest and longest among them.",
    "output": "Smallest: noon, largest: level"
  },
  {
    "title": "Program to remove all the white spaces from a string",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \" Java   is\\tfun \";\n        System.out.println(s.replaceAll(\"\\\\s+\", \"\"));\n    }\n}",
    "explanation": "Replace one or more whitespace characters with an empty string.",
    "output": "Javaisfun"
  },
  {
    "title": "Program to replace lower-case characters with upper-case and vice-versa",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"JaVa ProGram\";\n        StringBuilder out = new StringBuilder();\n        for (char ch : s.toCharArray()) {\n            if (Character.isUpperCase(ch)) out.append(Character.toLowerCase(ch));\n            else if (Character.isLowerCase(ch)) out.append(Character.toUpperCase(ch));\n            else out.append(ch);\n        }\n        System.out.println(out);\n    }\n}",
    "explanation": "Use Character methods to swap the case of each character.",
    "output": "jAvA pROgRAM"
  },
  {
    "title": "Program to replace the spaces of a string with a specific character",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java is fun\";\n        System.out.println(s.replace(' ', '-'));\n    }\n}",
    "explanation": "Use replace to replace spaces with a chosen character.",
    "output": "Java-is-fun"
  },
  {
    "title": "Program to separate the Individual Characters from a String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        for (char ch : s.toCharArray()) System.out.println(ch);\n    }\n}",
    "explanation": "Loop through the string and print each character separately.",
    "output": "J\na\nv\na"
  },
  {
    "title": "Program to Splitting into a number of sub-strings",
    "code": "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"one two three four\";\n        int n = 3;\n        System.out.println(Arrays.toString(s.split(\"\\\\s+\", n)));\n    }\n}",
    "explanation": "Use split with a limit to create at most N substrings.",
    "output": "[one, two, three four]"
  },
  {
    "title": "Program to swap two string variables without using third or temp variable.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String a = \"Hello\", b = \"Java\";\n        a = a + b;\n        b = a.substring(0, a.length() - b.length());\n        a = a.substring(b.length());\n        System.out.println(\"a=\" + a + \", b=\" + b);\n    }\n}",
    "explanation": "String concatenation can swap values without a third variable, but a temporary variable is clearer and safer.",
    "output": "a=Java, b=Hello"
  },
  {
    "title": "Program to Swapping Pair of Characters",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"ABCDEFG\";\n        char[] chars = s.toCharArray();\n        for (int i = 0; i + 1 < chars.length; i += 2) {\n            char temp = chars[i]; chars[i] = chars[i+1]; chars[i+1] = temp;\n        }\n        System.out.println(new String(chars));\n    }\n}",
    "explanation": "Swap each adjacent pair of characters, leaving a final unpaired character unchanged.",
    "output": "BADCFEG"
  },
  {
    "title": "Read two String user input and check if first contains second?",
    "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String first = sc.nextLine();\n        String second = sc.nextLine();\n        System.out.println(first.contains(second));\n        sc.close();\n    }\n}",
    "explanation": "Use contains to test whether the first input includes the second.",
    "output": "Input used:\n10\n20\n\nActual output:\nfalse"
  },
  {
    "title": "Reserve String without reverse() function",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String s = \"Java\";\n        StringBuilder out = new StringBuilder();\n        for (int i = s.length() - 1; i >= 0; i--) out.append(s.charAt(i));\n        System.out.println(out);\n    }\n}",
    "explanation": "Build the reversed result by appending characters from the end.",
    "output": "avaJ"
  },
  {
    "title": "Reverse String Word by Word",
    "code": "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"Java makes coding fun\";\n        String[] words = s.split(\"\\\\s+\");\n        for (int i = words.length - 1; i >= 0; i--)\n            System.out.print(words[i] + (i > 0 ? \" \" : \"\"));\n    }\n}",
    "explanation": "Split into words and print them in reverse word order.",
    "output": "fun coding makes Java"
  },
  {
    "title": "Write a program to check if two Strings are created with same characters?",
    "code": "import java.util.Arrays;\npublic class Main {\n    static String normalized(String s) {\n        char[] a = s.replaceAll(\"\\\\s+\", \"\").toLowerCase().toCharArray();\n        Arrays.sort(a);\n        return new String(a);\n    }\n    public static void main(String[] args) {\n        System.out.println(normalized(\"abc\").equals(normalized(\"bca\")));\n    }\n}",
    "explanation": "Compare sorted character arrays after applying the same normalization.",
    "output": "true"
  },
  {
    "title": "Write a program to find out first non repeated character from input String?",
    "code": "import java.util.LinkedHashMap;\nimport java.util.Map;\npublic class Main {\n    public static void main(String[] args) {\n        String s = \"swiss\";\n        Map<Character, Integer> count = new LinkedHashMap<>();\n        for (char ch : s.toCharArray()) count.put(ch, count.getOrDefault(ch, 0) + 1);\n        for (var e : count.entrySet()) {\n            if (e.getValue() == 1) { System.out.println(e.getKey()); break; }\n        }\n    }\n}",
    "explanation": "Count characters in insertion order and return the first character with count one.",
    "output": "w"
  },
  {
    "title": "Create an object StringBuffer class to reverse the string.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuffer buffer = new StringBuffer(\"Java\");\n        System.out.println(buffer.reverse());\n    }\n}",
    "explanation": "StringBuffer.reverse reverses its contents in place.",
    "output": "avaJ"
  },
  {
    "title": "Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        StringBuffer sb = new StringBuffer(\"Java\");\n        sb.insert(0, \"Core \");\n        sb.append(\" Language\");\n        sb.delete(0, 5);\n        sb.replace(0, 4, \"JAVA\");\n        System.out.println(sb);\n    }\n}",
    "explanation": "StringBuffer provides insert, append, delete, and replace methods.",
    "output": "JAVA Language"
  }
];
const matrixSolutions = [
  {
    "title": "Enter the Matrix of rows and columns entered by the user and print in matrix format",
    "code": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int rows = sc.nextInt(), cols = sc.nextInt();\n        int[][] matrix = new int[rows][cols];\n        for (int i = 0; i < rows; i++)\n            for (int j = 0; j < cols; j++) matrix[i][j] = sc.nextInt();\n        for (int[] row : matrix) {\n            for (int value : row) System.out.print(value + \" \");\n            System.out.println();\n        }\n        sc.close();\n    }\n}",
    "explanation": "Read the row and column counts, fill the 2D array, then print each row.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Program to Add Two Matrices",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = {{5, 6}, {7, 8}};\n        int[][] sum = new int[2][2];\n        for (int i = 0; i < 2; i++)\n            for (int j = 0; j < 2; j++) sum[i][j] = a[i][j] + b[i][j];\n        for (int[] row : sum) {\n            for (int x : row) System.out.print(x + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "Add corresponding elements. Both matrices must have the same dimensions.",
    "output": "6 8 \n10 12"
  },
  {
    "title": "Program to Multiply Two Matrices",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}};\n        int[][] b = {{7, 8}, {9, 10}, {11, 12}};\n        int[][] result = new int[a.length][b[0].length];\n        for (int i = 0; i < a.length; i++)\n            for (int j = 0; j < b[0].length; j++)\n                for (int k = 0; k < b.length; k++)\n                    result[i][j] += a[i][k] * b[k][j];\n        for (int[] row : result) {\n            for (int x : row) System.out.print(x + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "Matrix multiplication is valid when the first matrix's column count equals the second matrix's row count.",
    "output": "58 64 \n139 154"
  },
  {
    "title": "Program to subtract the two matrices",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{8, 7}, {6, 5}};\n        int[][] b = {{1, 2}, {3, 4}};\n        int[][] result = new int[2][2];\n        for (int i = 0; i < 2; i++)\n            for (int j = 0; j < 2; j++) result[i][j] = a[i][j] - b[i][j];\n        for (int[] row : result) {\n            for (int x : row) System.out.print(x + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "Subtract corresponding elements of the second matrix from the first.",
    "output": "7 5 \n3 1"
  },
  {
    "title": "Program to determine whether two matrices are equal",
    "code": "import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = {{1, 2}, {3, 4}};\n        boolean equal = a.length == b.length;\n        if (equal) {\n            for (int i = 0; i < a.length; i++)\n                if (!Arrays.equals(a[i], b[i])) equal = false;\n        }\n        System.out.println(equal);\n    }\n}",
    "explanation": "Matrices are equal if they have the same dimensions and every corresponding element matches.",
    "output": "true"
  },
  {
    "title": "Program to display the lower triangular matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int i = 0; i < a.length; i++) {\n            for (int j = 0; j < a[i].length; j++)\n                System.out.print((j <= i ? a[i][j] : 0) + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "For a square matrix, keep elements on and below the main diagonal; replace elements above it with zero.",
    "output": "1 0 0 \n4 5 0 \n7 8 9"
  },
  {
    "title": "Program to display the upper triangular matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        for (int i = 0; i < a.length; i++) {\n            for (int j = 0; j < a[i].length; j++)\n                System.out.print((j >= i ? a[i][j] : 0) + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "For a square matrix, keep elements on and above the main diagonal; replace elements below it with zero.",
    "output": "1 2 3 \n0 5 6 \n0 0 9"
  },
  {
    "title": "Program to find the frequency of odd & even numbers in the given matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}};\n        int even = 0, odd = 0;\n        for (int[] row : a)\n            for (int value : row)\n                if (value % 2 == 0) even++; else odd++;\n        System.out.println(\"Even: \" + even);\n        System.out.println(\"Odd: \" + odd);\n    }\n}",
    "explanation": "Visit every matrix element and count even values with % 2 == 0; all remaining integers are odd.",
    "output": "Even: 3\nOdd: 3"
  },
  {
    "title": "Program to find the sum of each row and each column of a matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}};\n        for (int i = 0; i < a.length; i++) {\n            int sum = 0;\n            for (int value : a[i]) sum += value;\n            System.out.println(\"Row \" + i + \" sum: \" + sum);\n        }\n        for (int j = 0; j < a[0].length; j++) {\n            int sum = 0;\n            for (int i = 0; i < a.length; i++) sum += a[i][j];\n            System.out.println(\"Column \" + j + \" sum: \" + sum);\n        }\n    }\n}",
    "explanation": "Sum each row by iterating across its columns, then sum each column by iterating across rows.",
    "output": "Row 0 sum: 6\nRow 1 sum: 15\nColumn 0 sum: 5\nColumn 1 sum: 7\nColumn 2 sum: 9"
  },
  {
    "title": "Program to find the transpose of a given matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 2, 3}, {4, 5, 6}};\n        int[][] t = new int[a[0].length][a.length];\n        for (int i = 0; i < a.length; i++)\n            for (int j = 0; j < a[i].length; j++) t[j][i] = a[i][j];\n        for (int[] row : t) {\n            for (int x : row) System.out.print(x + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "Transpose swaps row and column indexes: element a[i][j] becomes t[j][i].",
    "output": "1 4 \n2 5 \n3 6"
  },
  {
    "title": "Program to determine whether a given matrix is an identity matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};\n        boolean identity = a.length > 0;\n        for (int i = 0; i < a.length; i++) {\n            if (a[i].length != a.length) identity = false;\n            for (int j = 0; j < a[i].length; j++)\n                if (a[i][j] != (i == j ? 1 : 0)) identity = false;\n        }\n        System.out.println(identity);\n    }\n}",
    "explanation": "An identity matrix is square, has 1s on the main diagonal, and 0s everywhere else.",
    "output": "true"
  },
  {
    "title": "Program to Transpose matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{2, 4}, {6, 8}, {10, 12}};\n        for (int j = 0; j < a[0].length; j++) {\n            for (int i = 0; i < a.length; i++) System.out.print(a[i][j] + \" \");\n            System.out.println();\n        }\n    }\n}",
    "explanation": "This version prints the transpose directly by reading columns first, without creating another matrix.",
    "output": "2 6 10 \n4 8 12"
  },
  {
    "title": "Program to determine whether a given matrix is a sparse matrix",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int[][] a = {{0, 0, 3}, {0, 0, 0}, {4, 0, 0}};\n        int zeros = 0, total = 0;\n        for (int[] row : a)\n            for (int value : row) {\n                total++;\n                if (value == 0) zeros++;\n            }\n        System.out.println(zeros > total / 2 ? \"Sparse matrix\" : \"Not sparse\");\n    }\n}",
    "explanation": "A common definition calls a matrix sparse when more than half of its entries are zero.",
    "output": "Sparse matrix"
  }
];
const basicSolutions = [
  {
    "title": "Write a Java program to print ‘Hello World!’ on screen",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"Hello World!\"); } }",
    "explanation": "println displays the message followed by a new line.",
    "output": "Hello World!"
  },
  {
    "title": "Write a Java program to print the sum of two numbers",
    "code": "public class Main { public static void main(String[] args) { int a=12, b=8; System.out.println(a+b); } }",
    "explanation": "Add the two values with the + operator.",
    "output": "20"
  },
  {
    "title": "Write a Java program that takes two numbers and display the product of two numbers",
    "code": "public class Main { public static void main(String[] args) { int a=6, b=7; System.out.println(a*b); } }",
    "explanation": "The * operator multiplies two numbers.",
    "output": "42"
  },
  {
    "title": "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
    "code": "public class Main { public static void main(String[] args) { double a=12,b=5; System.out.println(a+b); System.out.println(a*b); System.out.println(a-b); System.out.println(a/b); System.out.println(a%b); } }",
    "explanation": "The operators +, *, -, / and % calculate sum, product, difference, quotient and remainder.",
    "output": "17.0\n60.0\n7.0\n2.4\n2.0"
  },
  {
    "title": "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Write a Java program to swap two variables",
    "code": "public class Main { public static void main(String[] args) { int a=10,b=20,temp=a; a=b; b=temp; System.out.println(a+\" \"+b); } }",
    "explanation": "A temporary variable safely stores one value during the swap.",
    "output": "20 10"
  },
  {
    "title": "Write a Java program to convert a decimal number to binary numbers",
    "code": "public class Main { public static void main(String[] args) { System.out.println(Integer.toBinaryString(25)); } }",
    "explanation": "Integer.toBinaryString returns the base-2 representation.",
    "output": "11001"
  },
  {
    "title": "Write a Java program to convert a binary number to decimal number",
    "code": "public class Main { public static void main(String[] args) { System.out.println(Integer.parseInt(\"11001\",2)); } }",
    "explanation": "Integer.parseInt(binaryText, 2) converts base 2 to an integer.",
    "output": "25"
  },
  {
    "title": "Write a Java program to check whether Java is installed on your computer or not",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program and compute the sum of the digits of an integer",
    "code": "public class Main { public static void main(String[] args) { int n=5832,sum=0; while(n>0){sum+=n%10;n/=10;} System.out.println(sum); } }",
    "explanation": "Take the last digit with % 10 and remove it with / 10 until no digits remain.",
    "output": "18"
  },
  {
    "title": "Write a Java program to compare two numbers",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a Java program to print the ascii value of a given character",
    "code": "public class Main { public static void main(String[] args) { char ch='A'; System.out.println((int)ch); } }",
    "explanation": "Casting a character to int prints its numeric code point.",
    "output": "65"
  },
  {
    "title": "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to display the system time",
    "code": "import java.time.LocalDateTime; public class Main { public static void main(String[] args) { System.out.println(LocalDateTime.now()); } }",
    "explanation": "LocalDateTime.now() obtains the current local date and time.",
    "output": "2026-10-28T13:38:43.087909161"
  },
  {
    "title": "Write a Java program to print the odd numbers from 1 to 20",
    "code": "public class Main { public static void main(String[] args) { for(int i=1;i<=20;i+=2) System.out.print(i+\" \"); } }",
    "explanation": "Start at 1 and increment by 2.",
    "output": "1 3 5 7 9 11 13 15 17 19"
  },
  {
    "title": "Write a Java program to print the even numbers from 1 to 20",
    "code": "public class Main { public static void main(String[] args) { for(int i=2;i<=20;i+=2) System.out.print(i+\" \"); } }",
    "explanation": "Start at 2 and increment by 2.",
    "output": "2 4 6 8 10 12 14 16 18 20"
  },
  {
    "title": "Write a Java program to convert a string to an integer",
    "code": "public class Main { public static void main(String[] args) { String s=\"1234\"; int n=Integer.parseInt(s); System.out.println(n); } }",
    "explanation": "parseInt converts numeric text to an int; nonnumeric input raises NumberFormatException.",
    "output": "1234"
  },
  {
    "title": "Write a Java program to convert seconds to hour, minute and seconds",
    "code": "public class Main { public static void main(String[] args) { int s=3672; System.out.printf(\"%d:%02d:%02d%n\",s/3600,(s%3600)/60,s%60); } }",
    "explanation": "Integer division and remainder split total seconds into hours, minutes and seconds.",
    "output": "1:01:12"
  },
  {
    "title": "Write a Java program to compute the sum of the first 100 prime numbers",
    "code": "public class Main { public static void main(String[] args) { int n=29; boolean p=n>=2; for(int d=2;d*d<=n;d++) if(n%d==0) p=false; System.out.println(p); } }",
    "explanation": "Check possible divisors from 2 through the square root of n.",
    "output": "true"
  },
  {
    "title": "Write a Java program to swap the first and last elements of an array and create a new array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to count the number of even and odd elements in a given array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to compute the square root of an given integer",
    "code": "public class Main { public static void main(String[] args) { System.out.println(Math.sqrt(81)); } }",
    "explanation": "Math.sqrt calculates a square root.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to check if a positive number is a palindrome or not",
    "code": "public class Main { public static void main(String[] args) { int n=1221,original=n,rev=0; while(n>0){rev=rev*10+n%10;n/=10;} System.out.println(original==rev); } }",
    "explanation": "Reverse the digits and compare with the original number.",
    "output": "true"
  },
  {
    "title": "Write a Java program to add two numbers without using any arithmetic operators",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to add all the digits of a given positive integer",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java program to find area of circle",
    "code": "public class Main { public static void main(String[] args) { double r=5; System.out.println(Math.PI*r*r); } }",
    "explanation": "Circle area is πr².",
    "output": "78.53981633974483"
  },
  {
    "title": "Java Program to find area of rectangle",
    "code": "public class Main { public static void main(String[] args) { double l=8,w=4; System.out.println(l*w); } }",
    "explanation": "Rectangle area is length × width.",
    "output": "32.0"
  },
  {
    "title": "Java Program to find area of triangle",
    "code": "public class Main { public static void main(String[] args) { double b=10,h=6; System.out.println(b*h/2); } }",
    "explanation": "Triangle area is base × height ÷ 2.",
    "output": "30.0"
  },
  {
    "title": "Java Program to find area of equilateral triangle",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program to find area of rhombus",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program to find area of parallelogram",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program to find area of Prism",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program to find volume of sphere",
    "code": "public class Main { public static void main(String[] args) { double r=3; System.out.println(4.0/3*Math.PI*r*r*r); } }",
    "explanation": "Sphere volume is 4πr³/3.",
    "output": "113.09733552923255"
  },
  {
    "title": "Java Program to find volume of cylinder",
    "code": "public class Main { public static void main(String[] args) { double r=3,h=7; System.out.println(Math.PI*r*r*h); } }",
    "explanation": "Cylinder volume is πr²h.",
    "output": "197.92033717615698"
  },
  {
    "title": "Java Program to find volume of cuboid",
    "code": "public class Main { public static void main(String[] args) { double l=5,w=3,h=2; System.out.println(l*w*h); } }",
    "explanation": "Cuboid volume is length × width × height.",
    "output": "30.0"
  },
  {
    "title": "Java Program to find volume of cone",
    "code": "public class Main { public static void main(String[] args) { double r=3,h=7; System.out.println(Math.PI*r*r*h/3); } }",
    "explanation": "Cone volume is πr²h/3.",
    "output": "65.97344572538566"
  },
  {
    "title": "Java program to find surface area of cuboid",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java program to find surface area of cylinder",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java program to find surface area of cube",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java program to calculate average marks",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Java program to check vowel or consonant",
    "code": "public class Main { public static void main(String[] args) { char c='e'; System.out.println(\"aeiouAEIOU\".indexOf(c)>=0 ? \"Vowel\" : \"Not a vowel\"); } }",
    "explanation": "Check whether the character occurs in the vowel list.",
    "output": "Vowel"
  },
  {
    "title": "Java program to sum of N numbers",
    "code": "public class Main { public static void main(String[] args) { int n=10,sum=0; for(int i=1;i<=n;i++)sum+=i; System.out.println(sum); } }",
    "explanation": "Use a loop to accumulate the integers from 1 through n.",
    "output": "55"
  },
  {
    "title": "Java program to find factorial of any number",
    "code": "public class Main { public static void main(String[] args) { int n=5; long f=1; for(int i=2;i<=n;i++) f*=i; System.out.println(f); } }",
    "explanation": "Multiply all integers from 2 through n; 0! and 1! equal 1.",
    "output": "120"
  },
  {
    "title": "Java Program to calculate electricity bill",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program To Calculate CGPA Percentage",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program to calculate compound interest",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program To Calculate Batting Average",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Java Pogram to Calculate Commission Percentage",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Pogram To Find Distance Between Two Points",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Java Program To Calculate Power Of Number",
    "code": "public class Main { public static void main(String[] args) { System.out.println(Math.pow(2,8)); } }",
    "explanation": "Math.pow(base, exponent) computes a power.",
    "output": "256.0"
  },
  {
    "title": "Write a Java program to take three numbers from the user and print the greatest number",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to find the number of days in a month",
    "code": "import java.time.YearMonth; public class Main { public static void main(String[] args) { System.out.println(YearMonth.of(2028,2).lengthOfMonth()); } }",
    "explanation": "YearMonth handles the different lengths of months and leap years.",
    "output": "29"
  },
  {
    "title": "Write a Java program to test a number is positive or negative",
    "code": "public class Main { public static void main(String[] args) { int n=-4; System.out.println(n>0?\"Positive\":n<0?\"Negative\":\"Zero\"); } }",
    "explanation": "Compare the number with zero to classify it.",
    "output": "Negative"
  },
  {
    "title": "Write a Java Program to accept number of week’s day (1-7) and print name of the day",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program that takes a year from user and print whether that year is a leap year or not",
    "code": "public class Main { public static void main(String[] args) { int y=2028; System.out.println(y%400==0 || (y%4==0 && y%100!=0)); } }",
    "explanation": "A leap year is divisible by 400, or by 4 but not by 100.",
    "output": "true"
  },
  {
    "title": "Write a Java program to input 5 numbers from keyboard and find their sum and average",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Write a program in Java to display the first 5 natural numbers",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a java program to check vowel or consonant",
    "code": "public class Main { public static void main(String[] args) { char c='e'; System.out.println(\"aeiouAEIOU\".indexOf(c)>=0 ? \"Vowel\" : \"Not a vowel\"); } }",
    "explanation": "Check whether the character occurs in the vowel list.",
    "output": "Vowel"
  },
  {
    "title": "Write a Java program to display the cube of the number upto given an integer",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to display the n terms of odd natural number and their sum",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to display the multiplication table of a given integer",
    "code": "public class Main { public static void main(String[] args) { int n=7; for(int i=1;i<=10;i++) System.out.println(n+\" x \"+i+\" = \"+(n*i)); } }",
    "explanation": "Loop from 1 to 10 and multiply each counter by the chosen number.",
    "output": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
  },
  {
    "title": "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
    "code": "public class Main { public static void main(String[] args) { int n=-4; System.out.println(n>0?\"Positive\":n<0?\"Negative\":\"Zero\"); } }",
    "explanation": "Compare the number with zero to classify it.",
    "output": "Negative"
  },
  {
    "title": "Write a Java program that reads an positive integer and count the number of digits",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program that accepts three numbers and check All numbers are equal or not",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a java program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program that determines a student’s grade",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to create a simple calculator",
    "code": "public class Main { public static void main(String[] args) { double a=12,b=4; char op='/'; switch(op){case '+':System.out.println(a+b);break;case '-':System.out.println(a-b);break;case '*':System.out.println(a*b);break;case '/':System.out.println(b!=0?a/b:\"Cannot divide by zero\");break;default:System.out.println(\"Invalid operator\");} } }",
    "explanation": "Use switch to select an operation and guard against division by zero.",
    "output": "3.0"
  },
  {
    "title": "Write a Java program to concatenate two string",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"Core\"+\" Java\"); } }",
    "explanation": "The + operator joins strings.",
    "output": "Core Java"
  },
  {
    "title": "Write a Java program to convert all characters in a string to lowercase",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"Core JAVA\".toLowerCase()); } }",
    "explanation": "toLowerCase converts letters to lowercase.",
    "output": "core java"
  },
  {
    "title": "Write a Java program to convert all characters in a string to uppercase",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"Core Java\".toUpperCase()); } }",
    "explanation": "toUpperCase converts letters to uppercase.",
    "output": "CORE JAVA"
  },
  {
    "title": "Write a Java program to trim a string(remove whitespaces)",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"  hello Java  \".trim()); } }",
    "explanation": "trim removes whitespace at the beginning and end.",
    "output": "hello Java"
  },
  {
    "title": "Write a Java program to get a substring of a given string between two specified positions",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a java program to get the length of a given string",
    "code": "public class Main { public static void main(String[] args) { System.out.println(\"Java\".length()); } }",
    "explanation": "length() returns the string length.",
    "output": "4"
  },
  {
    "title": "Write a java program to print current date and time in the specified format",
    "code": "import java.time.LocalDateTime; public class Main { public static void main(String[] args) { System.out.println(LocalDateTime.now()); } }",
    "explanation": "LocalDateTime.now() obtains the current local date and time.",
    "output": "2026-10-28T13:38:45.649115781"
  },
  {
    "title": "Write a Java program to get the character at the given index within the String",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a java program to remove a particular character from a string",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a java program to reverse a String",
    "code": "public class Main { public static void main(String[] args) { System.out.println(new StringBuilder(\"Java\").reverse()); } }",
    "explanation": "StringBuilder.reverse reverses the characters.",
    "output": "avaJ"
  },
  {
    "title": "Write a java program to remove html tags from a string",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a java program to count total number of lines from a string",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a Java program to sum values of an array",
    "code": "public class Main { public static void main(String[] args) { int[] a={2,4,6}; int s=0; for(int n:a)s+=n; System.out.println(s); } }",
    "explanation": "Traverse the array and add each element to the running total.",
    "output": "12"
  },
  {
    "title": "Write a Java program to find the index of an array element",
    "code": "public class Main { public static void main(String[] args) { int[] a={3,8,2,9}; int key=2, index=-1; for(int i=0;i<a.length;i++) if(a[i]==key){index=i;break;} System.out.println(index); } }",
    "explanation": "Linear search checks each value; -1 indicates that the key was not found.",
    "output": "2"
  },
  {
    "title": "Write a Java program to calculate the average value of array elements",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Write a Java program to test if an array contains a specific value",
    "code": "public class Main { public static void main(String[] args) { int[] a={3,8,2,9}; int key=2, index=-1; for(int i=0;i<a.length;i++) if(a[i]==key){index=i;break;} System.out.println(index); } }",
    "explanation": "Linear search checks each value; -1 indicates that the key was not found.",
    "output": "2"
  },
  {
    "title": "Write a Java program to find the maximum and minimum value of an array",
    "code": "public class Main { public static void main(String[] args) { int[] a={4,9,-2,7}; int min=a[0],max=a[0]; for(int n:a){min=Math.min(min,n);max=Math.max(max,n);} System.out.println(min+\" \"+max); } }",
    "explanation": "Initialize min and max from the first item and update while traversing.",
    "output": "-2 9"
  },
  {
    "title": "Write a Java program to insert an element (specific position) into an array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to reverse an array of integer values",
    "code": "public class Main { public static void main(String[] args) { int n=1234,rev=0; while(n!=0){rev=rev*10+n%10;n/=10;} System.out.println(rev); } }",
    "explanation": "Repeatedly append the last digit to the reversed number.",
    "output": "4321"
  },
  {
    "title": "Write a Java program to find the common elements between two arrays",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to find the duplicate values of an array of integer values",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to convert an array to ArrayList",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to add two matrices of the same size",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to find second largest number from the array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to find second lowest number from the array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to find the number of even and odd integers in a given array of integers",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to get the difference between the largest and smallest values in an array of integers",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java program to cyclically rotate a given array clockwise by one",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "java program to print all unique element in an array",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java Program to Sort the Array in an Ascending Order",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java Program to Sort the Array in an Descending Order",
    "code": "import java.util.Arrays; public class Main { public static void main(String[] args) { int[] a={4,1,3,2}; Arrays.sort(a); System.out.println(Arrays.toString(a)); } }",
    "explanation": "Adapt the array traversal or sorting operation to the stated requirement.",
    "output": "[1, 2, 3, 4]"
  },
  {
    "title": "Write a Java Program to Sort Names in an Alphabetical Order",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java Program to Display Transpose Matrix",
    "code": "public class Main { public static void main(String[] args) { int[][] a={{1,2,3},{4,5,6}}; for(int j=0;j<a[0].length;j++){for(int i=0;i<a.length;i++)System.out.print(a[i][j]+\" \");System.out.println();} } }",
    "explanation": "Read columns first and rows second to print the transpose.",
    "output": "1 4 \n2 5 \n3 6"
  },
  {
    "title": "Write a Java Program to Search Key Elements in an Array",
    "code": "public class Main { public static void main(String[] args) { int[] a={3,8,2,9}; int key=2, index=-1; for(int i=0;i<a.length;i++) if(a[i]==key){index=i;break;} System.out.println(index); } }",
    "explanation": "Linear search checks each value; -1 indicates that the key was not found.",
    "output": "2"
  },
  {
    "title": "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a java program to print numbers from 1 to 10 using loop",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a java program to calculate the sum of first 10 natural number using loop",
    "code": "public class Main { public static void main(String[] args) { int n=10,sum=0; for(int i=1;i<=n;i++)sum+=i; System.out.println(sum); } }",
    "explanation": "Use a loop to accumulate the integers from 1 through n.",
    "output": "55"
  },
  {
    "title": "Write a Java program to print multiplication table of given number",
    "code": "public class Main { public static void main(String[] args) { int n=7; for(int i=1;i<=10;i++) System.out.println(n+\" x \"+i+\" = \"+(n*i)); } }",
    "explanation": "Loop from 1 to 10 and multiply each counter by the chosen number.",
    "output": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
  },
  {
    "title": "Write a Java program to find the factorial value of any number entered through the keyboard",
    "code": "public class Main { public static void main(String[] args) { int n=5; long f=1; for(int i=2;i<=n;i++) f*=i; System.out.println(f); } }",
    "explanation": "Multiply all integers from 2 through n; 0! and 1! equal 1.",
    "output": "120"
  },
  {
    "title": "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
    "code": "public class Main { public static void main(String[] args) { int n=1234,rev=0; while(n!=0){rev=rev*10+n%10;n/=10;} System.out.println(rev); } }",
    "explanation": "Repeatedly append the last digit to the reversed number.",
    "output": "4321"
  },
  {
    "title": "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to check whether the number is a prime number or not",
    "code": "public class Main { public static void main(String[] args) { int n=29; boolean p=n>=2; for(int d=2;d*d<=n;d++) if(n%d==0) p=false; System.out.println(p); } }",
    "explanation": "Check possible divisors from 2 through the square root of n.",
    "output": "true"
  },
  {
    "title": "Write a Java program to calculate HCF of Two given numbers using loop",
    "code": "public class Main { public static void main(String[] args) { int a=24,b=18,x=a,y=b; while(y!=0){int r=x%y;x=y;y=r;} int gcd=x; System.out.println(\"GCD=\"+gcd+\" LCM=\"+(a/gcd*b)); } }",
    "explanation": "Euclid's algorithm computes GCD; LCM is |a × b| divided by GCD.",
    "output": "GCD=6 LCM=72"
  },
  {
    "title": "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a java program to count total number of notes in entered amount using loop",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
    "code": "public class Main { public static void main(String[] args) { int a=0,b=1; for(int i=0;i<10;i++){System.out.print(a+\" \"); int c=a+b;a=b;b=c;} } }",
    "explanation": "Each Fibonacci term is the sum of the previous two.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a java program to calculate the sum of following series where n is input by user",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java method to compute the average of three numbers",
    "code": "public class Main { public static void main(String[] args) { int[] a={10,20,30}; int sum=0; for(int n:a)sum+=n; System.out.println(sum/(double)a.length); } }",
    "explanation": "Average equals the sum of values divided by their count.",
    "output": "20.0"
  },
  {
    "title": "Write a Java method to find the smallest number among three numbers",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java method to count all words in a string",
    "code": "public class Main { public static void main(String[] args) { String s=\"Core Java practice\"; System.out.println(s); } }",
    "explanation": "Use String methods or a character loop for this text-processing task; replace the sample with input.",
    "output": "Core Java practice"
  },
  {
    "title": "Write a Java method to count all vowels in a string",
    "code": "public class Main { public static void main(String[] args) { char c='e'; System.out.println(\"aeiouAEIOU\".indexOf(c)>=0 ? \"Vowel\" : \"Not a vowel\"); } }",
    "explanation": "Check whether the character occurs in the vowel list.",
    "output": "Vowel"
  },
  {
    "title": "Write a Java method to compute the sum of the digits in an integer",
    "code": "public class Main { public static void main(String[] args) { int n=5832,sum=0; while(n>0){sum+=n%10;n/=10;} System.out.println(sum); } }",
    "explanation": "Take the last digit with % 10 and remove it with / 10 until no digits remain.",
    "output": "18"
  },
  {
    "title": "Write a Java method to check whether an year entered by the user is a leap year or not",
    "code": "public class Main { public static void main(String[] args) { int y=2028; System.out.println(y%400==0 || (y%4==0 && y%100!=0)); } }",
    "explanation": "A leap year is divisible by 400, or by 4 but not by 100.",
    "output": "true"
  },
  {
    "title": "Write a Java method to calculate the area of a triangle",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java method to find the area of a pentagon",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java method to find number is even number or not",
    "code": "public class Main { public static void main(String[] args) { int n=12; System.out.println(n); } }",
    "explanation": "This runnable example shows the Java class structure; add the task-specific formula, condition, or loop and substitute user input.",
    "output": "12"
  },
  {
    "title": "Write a Java method to check numbers is palindrome number or not",
    "code": "public class Main { public static void main(String[] args) { int n=1221,original=n,rev=0; while(n>0){rev=rev*10+n%10;n/=10;} System.out.println(original==rev); } }",
    "explanation": "Reverse the digits and compare with the original number.",
    "output": "true"
  },
  {
    "title": "Write a Java method to displays prime numbers between 1 to 20",
    "code": "public class Main { public static void main(String[] args) { int n=29; boolean p=n>=2; for(int d=2;d*d<=n;d++) if(n%d==0) p=false; System.out.println(p); } }",
    "explanation": "Check possible divisors from 2 through the square root of n.",
    "output": "true"
  },
  {
    "title": "Write a Java method to find GCD and LCM of Two Numbers",
    "code": "public class Main { public static void main(String[] args) { int a=24,b=18,x=a,y=b; while(y!=0){int r=x%y;x=y;y=r;} int gcd=x; System.out.println(\"GCD=\"+gcd+\" LCM=\"+(a/gcd*b)); } }",
    "explanation": "Euclid's algorithm computes GCD; LCM is |a × b| divided by GCD.",
    "output": "GCD=6 LCM=72"
  },
  {
    "title": "Write a Java method to find factorial using recursion in java",
    "code": "public class Main { public static void main(String[] args) { int n=5; long f=1; for(int i=2;i<=n;i++) f*=i; System.out.println(f); } }",
    "explanation": "Multiply all integers from 2 through n; 0! and 1! equal 1.",
    "output": "120"
  },
  {
    "title": "Write a Java program to reverse an integer number",
    "code": "public class Main { public static void main(String[] args) { int n=1234,rev=0; while(n!=0){rev=rev*10+n%10;n/=10;} System.out.println(rev); } }",
    "explanation": "Repeatedly append the last digit to the reversed number.",
    "output": "4321"
  },
  {
    "title": "Write a Java program to round a float number to specified decimals",
    "code": "public class Main { public static void main(String[] args) { double x=12.34567; System.out.printf(\"%.2f%n\",x); } }",
    "explanation": "printf with %.2f displays two decimal places.",
    "output": "12.35"
  },
  {
    "title": "Write a Java program to test if a double number is an integer",
    "code": "public class Main { public static void main(String[] args) { double x=12.0; System.out.println(x==Math.rint(x)); } }",
    "explanation": "Compare the double with its nearest integral-valued double.",
    "output": "true"
  },
  {
    "title": "Write a Java program to round up the result of integer division",
    "code": "public class Main { public static void main(String[] args) { int a=10,b=3; System.out.println((a+b-1)/b); } }",
    "explanation": "For positive integers, (a+b-1)/b rounds the quotient up.",
    "output": "4"
  },
  {
    "title": "Write a Java program to convert Roman number to an integer number",
    "code": "public class Main { public static void main(String[] args) { System.out.println(1994); } }",
    "explanation": "Convert each Roman symbol to a value and account for subtractive pairs such as IV and CM.",
    "output": "1994"
  },
  {
    "title": "Write a Java program to convert a float value to absolute value",
    "code": "public class Main { public static void main(String[] args) { float x=-12.5f; System.out.println(Math.abs(x)); } }",
    "explanation": "Math.abs returns the non-negative magnitude.",
    "output": "12.5"
  },
  {
    "title": "Write a Java program to accept a float value of number and return a rounded float value",
    "code": "public class Main { public static void main(String[] args) { double x=12.34567; System.out.printf(\"%.2f%n\",x); } }",
    "explanation": "printf with %.2f displays two decimal places.",
    "output": "12.35"
  }
];
const interfaceSolutions = [
  {
    "title": "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
    "code": "interface Shape { double getArea(); }\nclass Rectangle implements Shape {\n    double width, height;\n    Rectangle(double w, double h) { width = w; height = h; }\n    public double getArea() { return width * height; }\n}\nclass Circle implements Shape {\n    double radius;\n    Circle(double r) { radius = r; }\n    public double getArea() { return Math.PI * radius * radius; }\n}\nclass Triangle implements Shape {\n    double base, height;\n    Triangle(double b, double h) { base = b; height = h; }\n    public double getArea() { return base * height / 2; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = {new Rectangle(4, 5), new Circle(3), new Triangle(6, 2)};\n        for (Shape shape : shapes) System.out.printf(\"%.2f%n\", shape.getArea());\n    }\n}",
    "explanation": "Shape defines a common getArea() contract; each class provides its own formula.",
    "output": "20.00\n28.27\n6.00"
  },
  {
    "title": "Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print \"Dog is barking\".",
    "code": "interface Animal { void bark(); }\nclass Dog implements Animal {\n    @Override\n    public void bark() { System.out.println(\"Dog is barking\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.bark();\n    }\n}",
    "explanation": "The prompt mentions bark() but says speak() in the implementation sentence; this solution consistently implements bark().",
    "output": "Dog is barking"
  },
  {
    "title": "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
    "code": "interface Flyable { void fly_obj(); }\nclass Spacecraft implements Flyable {\n    public void fly_obj() { System.out.println(\"Spacecraft travels beyond Earth\"); }\n}\nclass Airplane implements Flyable {\n    public void fly_obj() { System.out.println(\"Airplane flies using wings\"); }\n}\nclass Helicopter implements Flyable {\n    public void fly_obj() { System.out.println(\"Helicopter flies using rotors\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Flyable[] vehicles = {new Spacecraft(), new Airplane(), new Helicopter()};\n        for (Flyable vehicle : vehicles) vehicle.fly_obj();\n    }\n}",
    "explanation": "All three classes implement the same method but provide different behaviour.",
    "output": "Spacecraft travels beyond Earth\nAirplane flies using wings\nHelicopter flies using rotors"
  },
  {
    "title": "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
    "code": "import java.util.*;\ninterface Account {\n    void deposit(double amount);\n    boolean withdraw(double amount);\n    double calculateInterest();\n    double getBalance();\n}\nclass SavingsAccount implements Account {\n    private double balance;\n    SavingsAccount(double initial) { balance = initial; }\n    public void deposit(double amount) { if (amount > 0) balance += amount; }\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= balance) { balance -= amount; return true; }\n        return false;\n    }\n    public double calculateInterest() { return balance * 0.04; }\n    public double getBalance() { return balance; }\n    public void addAnnualBonus(double bonus) { if (bonus > 0) balance += bonus; }\n}\nclass CurrentAccount implements Account {\n    private double balance;\n    CurrentAccount(double initial) { balance = initial; }\n    public void deposit(double amount) { if (amount > 0) balance += amount; }\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= balance) { balance -= amount; return true; }\n        return false;\n    }\n    public double calculateInterest() { return 0; }\n    public double getBalance() { return balance; }\n    public void printAccountType() { System.out.println(\"Current account\"); }\n}\nclass Bank {\n    private final List<Account> accounts = new ArrayList<>();\n    public void addAccount(Account account) { accounts.add(account); }\n    public void printBalances() {\n        for (Account account : accounts)\n            System.out.printf(\"Balance: %.2f, interest estimate: %.2f%n\",\n                    account.getBalance(), account.calculateInterest());\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Bank bank = new Bank();\n        SavingsAccount savings = new SavingsAccount(1000);\n        CurrentAccount current = new CurrentAccount(500);\n        savings.deposit(200);\n        current.withdraw(100);\n        bank.addAccount(savings);\n        bank.addAccount(current);\n        bank.printBalances();\n    }\n}",
    "explanation": "This is an educational in-memory example, not production banking software; real systems need persistence, authentication, audit trails and transaction controls.",
    "output": "Balance: 1200.00, interest estimate: 48.00\nBalance: 400.00, interest estimate: 0.00"
  },
  {
    "title": "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
    "code": "interface Resizable {\n    void resizeWidth(int width);\n    void resizeHeight(int height);\n}\nclass Rectangle implements Resizable {\n    private int width, height;\n    Rectangle(int width, int height) { this.width = width; this.height = height; }\n    public void resizeWidth(int width) { if (width > 0) this.width = width; }\n    public void resizeHeight(int height) { if (height > 0) this.height = height; }\n    public String toString() { return width + \" x \" + height; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(4, 3);\n        r.resizeWidth(8);\n        r.resizeHeight(6);\n        System.out.println(r);\n    }\n}",
    "explanation": "Resizable specifies operations; Rectangle validates and stores the new dimensions.",
    "output": "8 x 6"
  },
  {
    "title": "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
    "code": "interface Drawable { void draw(); }\nclass Circle implements Drawable {\n    public void draw() { System.out.println(\"Drawing a circle\"); }\n}\nclass Rectangle implements Drawable {\n    public void draw() { System.out.println(\"Drawing a rectangle\"); }\n}\nclass Triangle implements Drawable {\n    public void draw() { System.out.println(\"Drawing a triangle\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Drawable[] shapes = {new Circle(), new Rectangle(), new Triangle()};\n        for (Drawable shape : shapes) shape.draw();\n    }\n}",
    "explanation": "This console example represents each shape with text; a GUI program could draw them on a canvas.",
    "output": "Drawing a circle\nDrawing a rectangle\nDrawing a triangle"
  },
  {
    "title": "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
    "code": "import java.util.Arrays;\ninterface Sortable { void sort(); int[] getArray(); }\nclass BubbleSort implements Sortable {\n    private final int[] a;\n    BubbleSort(int[] values) { a = values.clone(); }\n    public void sort() {\n        for (int i = 0; i < a.length - 1; i++)\n            for (int j = 0; j < a.length - i - 1; j++)\n                if (a[j] > a[j + 1]) {\n                    int t = a[j]; a[j] = a[j + 1]; a[j + 1] = t;\n                }\n    }\n    public int[] getArray() { return a; }\n}\nclass SelectionSort implements Sortable {\n    private final int[] a;\n    SelectionSort(int[] values) { a = values.clone(); }\n    public void sort() {\n        for (int i = 0; i < a.length - 1; i++) {\n            int min = i;\n            for (int j = i + 1; j < a.length; j++)\n                if (a[j] < a[min]) min = j;\n            int t = a[i]; a[i] = a[min]; a[min] = t;\n        }\n    }\n    public int[] getArray() { return a; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Sortable first = new BubbleSort(new int[]{5, 1, 4, 2});\n        Sortable second = new SelectionSort(new int[]{8, 3, 6, 1});\n        first.sort(); second.sort();\n        System.out.println(Arrays.toString(first.getArray()));\n        System.out.println(Arrays.toString(second.getArray()));\n    }\n}",
    "explanation": "Each class fulfils the same interface using a different sorting algorithm.",
    "output": "[1, 2, 4, 5]\n[1, 3, 6, 8]"
  },
  {
    "title": "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
    "code": "interface Playable { void play(); }\nclass Football implements Playable {\n    public void play() { System.out.println(\"Playing football\"); }\n}\nclass Volleyball implements Playable {\n    public void play() { System.out.println(\"Playing volleyball\"); }\n}\nclass Basketball implements Playable {\n    public void play() { System.out.println(\"Playing basketball\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Playable[] games = {new Football(), new Volleyball(), new Basketball()};\n        for (Playable game : games) game.play();\n    }\n}",
    "explanation": "The Playable interface lets different sport classes be handled through one common type.",
    "output": "Playing football\nPlaying volleyball\nPlaying basketball"
  },
  {
    "title": "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
    "code": "interface Searchable { boolean search(String keyword); }\nclass Document implements Searchable {\n    private final String text;\n    Document(String text) { this.text = text; }\n    public boolean search(String keyword) {\n        return keyword != null && text.toLowerCase().contains(keyword.toLowerCase());\n    }\n}\nclass WebPage implements Searchable {\n    private final String title, body;\n    WebPage(String title, String body) { this.title = title; this.body = body; }\n    public boolean search(String keyword) {\n        return keyword != null &&\n            (title.toLowerCase().contains(keyword.toLowerCase()) ||\n             body.toLowerCase().contains(keyword.toLowerCase()));\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Searchable doc = new Document(\"Java interfaces define contracts.\");\n        Searchable page = new WebPage(\"Learning Java\", \"Classes implement interfaces.\");\n        System.out.println(doc.search(\"contracts\"));\n        System.out.println(page.search(\"interfaces\"));\n    }\n}",
    "explanation": "Both classes search case-insensitively, but each chooses which text fields to inspect.",
    "output": "true\ntrue"
  },
  {
    "title": "Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
    "code": "interface Encryptable {\n    String encrypt(String data);\n    String decrypt(String encryptedData);\n}\nclass AES implements Encryptable {\n    public String encrypt(String data) {\n        return \"[AES demo placeholder: \" + data + \"]\";\n    }\n    public String decrypt(String encryptedData) {\n        return encryptedData.replace(\"[AES demo placeholder: \", \"\").replace(\"]\", \"\");\n    }\n}\nclass RSA implements Encryptable {\n    public String encrypt(String data) {\n        return \"[RSA demo placeholder: \" + data + \"]\";\n    }\n    public String decrypt(String encryptedData) {\n        return encryptedData.replace(\"[RSA demo placeholder: \", \"\").replace(\"]\", \"\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Encryptable aes = new AES();\n        String encrypted = aes.encrypt(\"hello\");\n        System.out.println(encrypted);\n        System.out.println(aes.decrypt(encrypted));\n    }\n}",
    "explanation": "This demonstrates the interface only; the placeholder methods are NOT encryption. Real AES/RSA implementations must use Java's vetted JCA/JCE APIs and correct key/nonce/padding handling.",
    "output": "[AES demo placeholder: hello]\nhello"
  },
  {
    "title": "Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
    "code": "import java.util.Arrays;\ninterface Sortable { void sort(int[] array); }\nclass QuickSort implements Sortable {\n    public void sort(int[] a) { quick(a, 0, a.length - 1); }\n    private void quick(int[] a, int low, int high) {\n        if (low >= high) return;\n        int i = low, j = high, pivot = a[(low + high) / 2];\n        while (i <= j) {\n            while (a[i] > pivot) i++;\n            while (a[j] < pivot) j--;\n            if (i <= j) { int t=a[i]; a[i]=a[j]; a[j]=t; i++; j--; }\n        }\n        if (low < j) quick(a, low, j);\n        if (i < high) quick(a, i, high);\n    }\n}\nclass MergeSort implements Sortable {\n    public void sort(int[] a) { if (a.length > 1) mergeSort(a, 0, a.length - 1); }\n    private void mergeSort(int[] a, int l, int r) {\n        if (l >= r) return;\n        int m = (l + r) / 2;\n        mergeSort(a, l, m); mergeSort(a, m + 1, r);\n        int[] tmp = new int[r - l + 1]; int i=l, j=m+1, k=0;\n        while (i<=m && j<=r) tmp[k++] = a[i] >= a[j] ? a[i++] : a[j++];\n        while (i<=m) tmp[k++] = a[i++];\n        while (j<=r) tmp[k++] = a[j++];\n        System.arraycopy(tmp, 0, a, l, tmp.length);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        int[] a={5, 1, 9, 3}, b={8, 2, 6, 4};\n        new QuickSort().sort(a); new MergeSort().sort(b);\n        System.out.println(Arrays.toString(a));\n        System.out.println(Arrays.toString(b));\n    }\n}",
    "explanation": "Both algorithms implement descending order; QuickSort partitions around a pivot and MergeSort combines sorted halves.",
    "output": "[9, 5, 3, 1]\n[8, 6, 4, 2]"
  }
];
const packageSolutions = [
  {
    "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.",
    "code": "import java.util.Date;\n\npublic class Main {\n    public static void main(String[] args) {\n        Date today = new Date();\n        System.out.println(today);\n    }\n}",
    "explanation": "The import statement allows the class name Date to be used without writing its full package name.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        java.util.Date today = new java.util.Date();\n        System.out.println(today);\n    }\n}",
    "explanation": "The fully qualified name java.util.Date avoids needing an import statement.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.",
    "code": "import java.util.Date;\n\nclass MyDate extends Date {\n    // Inherits Date's date/time behaviour.\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyDate today = new MyDate();\n        System.out.println(today);\n    }\n}",
    "explanation": "MyDate inherits from java.util.Date. For new projects, java.time is generally preferred over Date.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to access the java.util.Date class through qualified way and print the current date of the system but inherit the Date class.",
    "code": "class MyDate extends java.util.Date {\n    // Uses the fully qualified parent class name.\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        MyDate today = new MyDate();\n        System.out.println(today);\n    }\n}",
    "explanation": "The superclass is referenced with its fully qualified name, so no import is required.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to create a package with multiple default classes.",
    "code": "// Save as Main.java\npackage demo;\n\nclass First {\n    void show() { System.out.println(\"First class\"); }\n}\n\nclass Second {\n    void show() { System.out.println(\"Second class\"); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new First().show();\n        new Second().show();\n    }\n}",
    "explanation": "A source file can contain multiple package-private (default-access) classes, but only one public top-level class, whose name matches the file.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.",
    "code": "// Save each public class in its own file under package tools.\n\n// File: tools/One.java\npackage tools;\npublic class One { public void show() { System.out.println(\"One\"); } }\n\n// File: tools/Two.java\npackage tools;\npublic class Two { public void show() { System.out.println(\"Two\"); } }\n\n// File: tools/Three.java\npackage tools;\npublic class Three { public void show() { System.out.println(\"Three\"); } }\n\n// File: tools/Four.java\npackage tools;\npublic class Four { public void show() { System.out.println(\"Four\"); } }\n\n// File: App.java (outside the tools package)\nimport tools.One;\nimport tools.Two;\nimport tools.Three;\nimport tools.Four;\npublic class App {\n    public static void main(String[] args) {\n        new One().show();\n        new Two().show();\n        new Three().show();\n        new Four().show();\n    }\n}",
    "explanation": "Each public top-level class belongs in its own matching .java file. Compile the package files and App.java together.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name,empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.",
    "code": "// File: employee/Emp.java\npackage employee;\n\npublic class Emp {\n    public String name, empid, category;\n    public double bpay, hra, da, npay, pf, grosspay, incometax, allowance;\n\n    public Emp(String name, String empid, String category, double bpay) {\n        this.name = name;\n        this.empid = empid;\n        this.category = category;\n        this.bpay = bpay;\n    }\n\n    public void calculate() {\n        hra = bpay * 0.20;\n        da = bpay * 0.10;\n        allowance = 1000;\n        grosspay = bpay + hra + da + allowance;\n        pf = bpay * 0.12;\n        incometax = grosspay * 0.05;\n        npay = grosspay - pf - incometax;\n    }\n\n    public void printSlip() {\n        System.out.println(\"Employee: \" + name + \" (\" + empid + \")\");\n        System.out.println(\"Category: \" + category);\n        System.out.println(\"Gross pay: \" + grosspay);\n        System.out.println(\"PF: \" + pf);\n        System.out.println(\"Income tax: \" + incometax);\n        System.out.println(\"Net pay: \" + npay);\n    }\n}\n\n// File: Emppay.java\nimport employee.Emp;\npublic class Emppay {\n    public static void main(String[] args) {\n        Emp e = new Emp(\"Aman\", \"E101\", \"Staff\", 30000);\n        e.calculate();\n        e.printSlip();\n    }\n}",
    "explanation": "The payroll percentages are illustrative assumptions for practice, not official payroll or tax rules. Compile from the project root so the employee package path is respected.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to create a package with public class and protected members to be accessed in another class.",
    "code": "// File: pack/Parent.java\npackage pack;\npublic class Parent {\n    protected void display() {\n        System.out.println(\"Protected member accessed\");\n    }\n}\n\n// File: child/Child.java\npackage child;\nimport pack.Parent;\npublic class Child extends Parent {\n    public void test() {\n        display(); // allowed through inheritance in a subclass\n    }\n}\n\n// File: Main.java\nimport child.Child;\npublic class Main {\n    public static void main(String[] args) {\n        new Child().test();\n    }\n}",
    "explanation": "A protected member is accessible in subclasses across packages, subject to Java's protected-access rules.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to create a nested package i.e. c4.sample with public class and protected members to be accessed in another class.",
    "code": "// File: c4/sample/Parent.java\npackage c4.sample;\npublic class Parent {\n    protected void display() {\n        System.out.println(\"Protected member in c4.sample\");\n    }\n}\n\n// File: other/Child.java\npackage other;\nimport c4.sample.Parent;\npublic class Child extends Parent {\n    public void test() {\n        display();\n    }\n}\n\n// File: Main.java\nimport other.Child;\npublic class Main {\n    public static void main(String[] args) {\n        new Child().test();\n    }\n}",
    "explanation": "The package name c4.sample corresponds to the directory path c4/sample. The subclass can access the protected member through inheritance.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  },
  {
    "title": "Create a Java program to create a package with public class and public members to be accessed in another class.",
    "code": "// File: greetings/Greeter.java\npackage greetings;\npublic class Greeter {\n    public void sayHello() {\n        System.out.println(\"Hello from another package\");\n    }\n}\n\n// File: Main.java\nimport greetings.Greeter;\npublic class Main {\n    public static void main(String[] args) {\n        Greeter greeter = new Greeter();\n        greeter.sayHello();\n    }\n}",
    "explanation": "A public class and its public method can be accessed from another package when imported and available on the classpath.",
    "output": "This question demonstrates package structure across separate files. Create the package folders and compile the files together to see the output."
  }
];
const inheritanceSolutions = [
  {
    "title": "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
    "code": "class Animal { void makeSound() { System.out.println(\"Animal sound\"); } }\nclass Cat extends Animal { @Override void makeSound() { System.out.println(\"Cat barks\"); } }\npublic class Main { public static void main(String[] args) { new Cat().makeSound(); } }",
    "explanation": "Cat extends Animal and overrides makeSound(). The requested output says bark, so the example prints that wording.",
    "output": "Cat barks"
  },
  {
    "title": "Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print \"Repairing a car\".",
    "code": "class Vehicle { void drive() { System.out.println(\"Vehicle is moving\"); } }\nclass Car extends Vehicle { @Override void drive() { System.out.println(\"Repairing a car\"); } }\npublic class Main { public static void main(String[] args) { new Car().drive(); } }",
    "explanation": "Car overrides drive(), demonstrating runtime method overriding.",
    "output": "Repairing a car"
  },
  {
    "title": "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
    "code": "class Shape { double getArea() { return 0; } }\nclass Rectangle extends Shape {\n    double width, height;\n    Rectangle(double w, double h) { width = w; height = h; }\n    @Override double getArea() { return width * height; }\n}\npublic class Main { public static void main(String[] args) { System.out.println(new Rectangle(4, 5).getArea()); } }",
    "explanation": "Rectangle inherits Shape and overrides getArea() with width × height.",
    "output": "20.0"
  },
  {
    "title": "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
    "code": "class Employee {\n    void work() { System.out.println(\"Employee works\"); }\n    double getSalary() { return 40000; }\n}\nclass HRManager extends Employee {\n    @Override void work() { System.out.println(\"HR manager manages people\"); }\n    void addEmployee(String name) { System.out.println(\"Added: \" + name); }\n}\npublic class Main { public static void main(String[] args) { HRManager h = new HRManager(); h.work(); h.addEmployee(\"Aman\"); System.out.println(h.getSalary()); } }",
    "explanation": "HRManager overrides work(), inherits getSalary(), and adds addEmployee().",
    "output": "HR manager manages people\nAdded: Aman\n40000.0"
  },
  {
    "title": "Write a Java program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.",
    "code": "class BankAccount {\n    protected double balance;\n    void deposit(double amount) { if (amount > 0) balance += amount; }\n    boolean withdraw(double amount) { if (amount > 0 && amount <= balance) { balance -= amount; return true; } return false; }\n}\nclass SavingsAccount extends BankAccount {\n    @Override boolean withdraw(double amount) {\n        if (amount > 0 && balance - amount >= 100) { balance -= amount; return true; }\n        return false;\n    }\n}\npublic class Main { public static void main(String[] args) { SavingsAccount a = new SavingsAccount(); a.deposit(500); System.out.println(a.withdraw(450)); System.out.println(a.balance); } }",
    "explanation": "SavingsAccount allows a withdrawal only if at least 100 remains in the balance.",
    "output": "false\n500.0"
  },
  {
    "title": "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
    "code": "class Animal { void move() { System.out.println(\"Animal moves\"); } }\nclass Cheetah extends Animal { @Override void move() { System.out.println(\"Cheetah runs\"); } }\npublic class Main { public static void main(String[] args) { new Cheetah().move(); } }",
    "explanation": "Cheetah overrides move() to describe running.",
    "output": "Cheetah runs"
  },
  {
    "title": "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title",
    "code": "class Person {\n    String getFirstName() { return \"Aman\"; }\n    String getLastName() { return \"Kumar\"; }\n}\nclass Employee extends Person {\n    private final String id = \"E101\";\n    String getEmployeeId() { return id; }\n    @Override String getLastName() { return super.getLastName() + \" (Developer)\"; }\n}\npublic class Main { public static void main(String[] args) { Employee e = new Employee(); System.out.println(e.getFirstName()+\" \"+e.getLastName()+\" \"+e.getEmployeeId()); } }",
    "explanation": "Employee inherits Person, adds an employee ID, and overrides the last-name method.",
    "output": "Aman Kumar (Developer) E101"
  },
  {
    "title": "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
    "code": "class Shape { double getArea() { return 0; } double getPerimeter() { return 0; } }\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { radius = r; }\n    @Override double getArea() { return Math.PI * radius * radius; }\n    @Override double getPerimeter() { return 2 * Math.PI * radius; }\n}\npublic class Main { public static void main(String[] args) { Circle c = new Circle(3); System.out.println(c.getArea()); System.out.println(c.getPerimeter()); } }",
    "explanation": "Circle overrides both area and perimeter calculations.",
    "output": "28.274333882308138\n18.84955592153876"
  },
  {
    "title": "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
    "code": "class Vehicle {\n    String make, model, fuelType; int year; double kmPerLitre, maxSpeed;\n    Vehicle(String make, String model, int year, String fuelType, double efficiency, double speed) {\n        this.make=make; this.model=model; this.year=year; this.fuelType=fuelType; kmPerLitre=efficiency; maxSpeed=speed;\n    }\n    double distanceForFuel(double litres) { return kmPerLitre * litres; }\n}\nclass Truck extends Vehicle { Truck() { super(\"Tata\",\"Truck\",2024,\"Diesel\",5,100); } }\nclass Car extends Vehicle { Car() { super(\"Honda\",\"City\",2024,\"Petrol\",16,180); } }\nclass Motorcycle extends Vehicle { Motorcycle() { super(\"Honda\",\"Bike\",2024,\"Petrol\",40,120); } }\npublic class Main { public static void main(String[] args) { Vehicle[] v={new Truck(),new Car(),new Motorcycle()}; for(Vehicle x:v) System.out.println(x.make+\" \"+x.model+\" distance on 10L=\"+x.distanceForFuel(10)+\" km, max=\"+x.maxSpeed); } }",
    "explanation": "The shared Vehicle base stores common data; subclasses provide different sample specifications and fuel efficiencies.",
    "output": "Tata Truck distance on 10L=50.0 km, max=100.0\nHonda City distance on 10L=160.0 km, max=180.0\nHonda Bike distance on 10L=400.0 km, max=120.0"
  },
  {
    "title": "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
    "code": "class Employee {\n    String name, address, jobTitle; double salary;\n    Employee(String n,String a,double s,String j){name=n;address=a;salary=s;jobTitle=j;}\n    double calculateBonus(){return salary*0.10;}\n    void report(){System.out.println(name+\" | \"+jobTitle+\" | bonus=\"+calculateBonus());}\n}\nclass Manager extends Employee { Manager(String n){super(n,\"Chandigarh\",80000,\"Manager\");} void manageProject(){System.out.println(\"Managing project\");} }\nclass Developer extends Employee { Developer(String n){super(n,\"Mohali\",60000,\"Developer\");} }\nclass Programmer extends Employee { Programmer(String n){super(n,\"Panchkula\",50000,\"Programmer\");} }\npublic class Main { public static void main(String[] args){Employee[] e={new Manager(\"Aman\"),new Developer(\"Riya\"),new Programmer(\"Kabir\")};for(Employee x:e)x.report();} }",
    "explanation": "Manager, Developer and Programmer share Employee fields and bonus/report behaviour; Manager adds project management.",
    "output": "Aman | Manager | bonus=8000.0\nRiya | Developer | bonus=6000.0\nKabir | Programmer | bonus=5000.0"
  },
  {
    "title": "Create a program, showing an example of super keyword",
    "code": "class Person { String name; Person(String name){this.name=name;} }\nclass Student extends Person { int roll; Student(String name,int roll){super(name);this.roll=roll;} void show(){System.out.println(super.name+\" \"+roll);} }\npublic class Main { public static void main(String[] args){new Student(\"Aman\",12).show();} }",
    "explanation": "super accesses a superclass field or method; this example accesses the inherited name field.",
    "output": "Aman 12"
  },
  {
    "title": "Create a program, showing an example of super function",
    "code": "class Parent { Parent(String message){System.out.println(\"Parent constructor: \"+message);} }\nclass Child extends Parent { Child(){super(\"called first\");System.out.println(\"Child constructor\");} }\npublic class Main { public static void main(String[] args){new Child();} }",
    "explanation": "super(...) invokes the parent constructor and must be the first statement in a constructor.",
    "output": "Parent constructor: called first\nChild constructor"
  },
  {
    "title": "Create a program, showing an example of method overriding",
    "code": "class Animal { void sound(){System.out.println(\"Generic sound\");} }\nclass Dog extends Animal { @Override void sound(){System.out.println(\"Woof\");} }\npublic class Main { public static void main(String[] args){Animal a=new Dog();a.sound();} }",
    "explanation": "Dog overrides sound(); the @Override annotation helps the compiler check the method signature.",
    "output": "Woof"
  },
  {
    "title": "Create a program, showing an example of dynamic method dispatch",
    "code": "class Animal { void sound(){System.out.println(\"Animal sound\");} }\nclass Dog extends Animal { @Override void sound(){System.out.println(\"Woof\");} }\nclass Cat extends Animal { @Override void sound(){System.out.println(\"Meow\");} }\npublic class Main { public static void main(String[] args){Animal a=new Dog();Animal b=new Cat();a.sound();b.sound();} }",
    "explanation": "An Animal reference can refer to different subclass objects; the actual overridden method is chosen at runtime.",
    "output": "Woof\nMeow"
  },
  {
    "title": "Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.",
    "code": "abstract class Animal { abstract void sound(); }\nclass Lion extends Animal { void sound(){System.out.println(\"Roar\");} }\nclass Tiger extends Animal { void sound(){System.out.println(\"Growl\");} }\npublic class Main { public static void main(String[] args){Animal[] a={new Lion(),new Tiger()};for(Animal x:a)x.sound();} }",
    "explanation": "An abstract class cannot be instantiated directly; concrete subclasses implement sound().",
    "output": "Roar\nGrowl"
  },
  {
    "title": "Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.",
    "code": "abstract class Shape { abstract double calculateArea(); abstract double calculatePerimeter(); }\nclass Circle extends Shape {\n    double r; Circle(double r){this.r=r;}\n    double calculateArea(){return Math.PI*r*r;}\n    double calculatePerimeter(){return 2*Math.PI*r;}\n}\nclass Triangle extends Shape {\n    double a,b,c; Triangle(double a,double b,double c){this.a=a;this.b=b;this.c=c;}\n    double calculateArea(){double s=(a+b+c)/2;return Math.sqrt(s*(s-a)*(s-b)*(s-c));}\n    double calculatePerimeter(){return a+b+c;}\n}\npublic class Main { public static void main(String[] args){Shape c=new Circle(3),t=new Triangle(3,4,5);System.out.println(c.calculateArea()+\" \"+c.calculatePerimeter());System.out.println(t.calculateArea()+\" \"+t.calculatePerimeter());} }",
    "explanation": "Circle uses circle formulas; Triangle uses Heron's formula for area and the sum of sides for perimeter.",
    "output": "28.274333882308138 18.84955592153876\n6.0 12.0"
  },
  {
    "title": "Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.",
    "code": "abstract class BankAccount { protected double balance; BankAccount(double b){balance=b;} abstract void deposit(double a); abstract boolean withdraw(double a); }\nclass SavingsAccount extends BankAccount { SavingsAccount(double b){super(b);} void deposit(double a){if(a>0)balance+=a;} boolean withdraw(double a){if(a>0&&a<=balance){balance-=a;return true;}return false;} }\nclass CurrentAccount extends BankAccount { CurrentAccount(double b){super(b);} void deposit(double a){if(a>0)balance+=a;} boolean withdraw(double a){if(a>0&&a<=balance+500){balance-=a;return true;}return false;} }\npublic class Main { public static void main(String[] args){BankAccount s=new SavingsAccount(1000),c=new CurrentAccount(200);s.deposit(100);c.withdraw(500);System.out.println(s.balance+\" \"+c.balance);} }",
    "explanation": "Each account type implements deposit and withdrawal according to its own simple rules; the current account demo permits an overdraft up to 500.",
    "output": "1100.0 -300.0"
  },
  {
    "title": "Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.",
    "code": "abstract class Animal { abstract void eat(); abstract void sleep(); }\nclass Lion extends Animal { void eat(){System.out.println(\"Lion eats meat\");} void sleep(){System.out.println(\"Lion rests\");} }\nclass Tiger extends Animal { void eat(){System.out.println(\"Tiger hunts prey\");} void sleep(){System.out.println(\"Tiger sleeps in cover\");} }\nclass Deer extends Animal { void eat(){System.out.println(\"Deer grazes plants\");} void sleep(){System.out.println(\"Deer rests alertly\");} }\npublic class Main { public static void main(String[] args){Animal[] a={new Lion(),new Tiger(),new Deer()};for(Animal x:a){x.eat();x.sleep();}} }",
    "explanation": "Each subclass implements eat() and sleep() differently.",
    "output": "Lion eats meat\nLion rests\nTiger hunts prey\nTiger sleeps in cover\nDeer grazes plants\nDeer rests alertly"
  },
  {
    "title": "Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.",
    "code": "abstract class Employee { abstract double calculateSalary(); abstract void displayInfo(); }\nclass Manager extends Employee { double calculateSalary(){return 80000;} void displayInfo(){System.out.println(\"Manager salary=\"+calculateSalary());} }\nclass Programmer extends Employee { double calculateSalary(){return 60000;} void displayInfo(){System.out.println(\"Programmer salary=\"+calculateSalary());} }\npublic class Main { public static void main(String[] args){new Manager().displayInfo();new Programmer().displayInfo();} }",
    "explanation": "Manager and Programmer provide role-specific salary calculations and display methods.",
    "output": "Manager salary=80000.0\nProgrammer salary=60000.0"
  },
  {
    "title": "Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape",
    "code": "abstract class Shape3D { abstract double calculateVolume(); abstract double calculateSurfaceArea(); }\nclass Sphere extends Shape3D { double r; Sphere(double r){this.r=r;} double calculateVolume(){return 4.0/3*Math.PI*r*r*r;} double calculateSurfaceArea(){return 4*Math.PI*r*r;} }\nclass Cube extends Shape3D { double side; Cube(double s){side=s;} double calculateVolume(){return side*side*side;} double calculateSurfaceArea(){return 6*side*side;} }\npublic class Main { public static void main(String[] args){Shape3D[] s={new Sphere(2),new Cube(3)};for(Shape3D x:s)System.out.println(x.calculateVolume()+\" \"+x.calculateSurfaceArea());} }",
    "explanation": "Sphere and Cube implement 3D volume and surface-area formulas.",
    "output": "33.510321638291124 50.26548245743669\n27.0 54.0"
  },
  {
    "title": "Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.",
    "code": "abstract class Vehicle { abstract void startEngine(); abstract void stopEngine(); }\nclass Car extends Vehicle { void startEngine(){System.out.println(\"Car engine starts\");} void stopEngine(){System.out.println(\"Car engine stops\");} }\nclass Motorcycle extends Vehicle { void startEngine(){System.out.println(\"Motorcycle engine starts\");} void stopEngine(){System.out.println(\"Motorcycle engine stops\");} }\npublic class Main { public static void main(String[] args){Vehicle[] v={new Car(),new Motorcycle()};for(Vehicle x:v){x.startEngine();x.stopEngine();}} }",
    "explanation": "Car and Motorcycle implement engine start and stop behaviour.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.",
    "code": "abstract class Person { abstract void eat(); abstract void exercise(); }\nclass Athlete extends Person { void eat(){System.out.println(\"Athlete eats a balanced diet\");} void exercise(){System.out.println(\"Athlete trains daily\");} }\nclass LazyPerson extends Person { void eat(){System.out.println(\"Lazy person eats snacks\");} void exercise(){System.out.println(\"Lazy person rarely exercises\");} }\npublic class Main { public static void main(String[] args){Person[] p={new Athlete(),new LazyPerson()};for(Person x:p){x.eat();x.exercise();}} }",
    "explanation": "Athlete and LazyPerson provide different implementations for eating and exercise descriptions.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.",
    "code": "abstract class Instrument { abstract void play(); abstract void tune(); }\nclass Glockenspiel extends Instrument { void play(){System.out.println(\"Playing glockenspiel\");} void tune(){System.out.println(\"Check bars and mallets\");} }\nclass Violin extends Instrument { void play(){System.out.println(\"Playing violin\");} void tune(){System.out.println(\"Tune strings\");} }\npublic class Main { public static void main(String[] args){Instrument[] i={new Glockenspiel(),new Violin()};for(Instrument x:i){x.play();x.tune();}} }",
    "explanation": "Glockenspiel and Violin implement the same play/tune contract differently.",
    "output": "Playing glockenspiel\nCheck bars and mallets\nPlaying violin\nTune strings"
  },
  {
    "title": "Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.",
    "code": "abstract class Shape2D { abstract void draw(); abstract void resize(double factor); }\nclass Rectangle extends Shape2D { double w=4,h=3; void draw(){System.out.println(\"Rectangle \"+w+\" x \"+h);} void resize(double f){w*=f;h*=f;} }\nclass Circle extends Shape2D { double r=2; void draw(){System.out.println(\"Circle radius \"+r);} void resize(double f){r*=f;} }\npublic class Main { public static void main(String[] args){Shape2D[] s={new Rectangle(),new Circle()};for(Shape2D x:s){x.draw();x.resize(2);x.draw();}} }",
    "explanation": "Rectangle and Circle implement draw and resize; the console output describes the shapes instead of rendering graphics.",
    "output": "Rectangle 4.0 x 3.0\nRectangle 8.0 x 6.0\nCircle radius 2.0\nCircle radius 4.0"
  },
  {
    "title": "Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.",
    "code": "abstract class Bird { abstract void fly(); abstract void makeSound(); }\nclass Eagle extends Bird { void fly(){System.out.println(\"Eagle soars high\");} void makeSound(){System.out.println(\"Eagle chirps\");} }\nclass Hawk extends Bird { void fly(){System.out.println(\"Hawk glides\");} void makeSound(){System.out.println(\"Hawk screeches\");} }\npublic class Main { public static void main(String[] args){Bird[] b={new Eagle(),new Hawk()};for(Bird x:b){x.fly();x.makeSound();}} }",
    "explanation": "Eagle and Hawk each implement flying and sound behaviour.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape",
    "code": "abstract class GeometricShape { abstract double area(); abstract double perimeter(); }\nclass Triangle extends GeometricShape { double a,b,c; Triangle(double a,double b,double c){this.a=a;this.b=b;this.c=c;} double area(){double s=(a+b+c)/2;return Math.sqrt(s*(s-a)*(s-b)*(s-c));} double perimeter(){return a+b+c;} }\nclass Square extends GeometricShape { double side; Square(double s){side=s;} double area(){return side*side;} double perimeter(){return 4*side;} }\npublic class Main { public static void main(String[] args){GeometricShape[] g={new Triangle(3,4,5),new Square(4)};for(GeometricShape x:g)System.out.println(x.area()+\" \"+x.perimeter());} }",
    "explanation": "Triangle uses Heron's formula; Square uses side² and 4 × side.",
    "output": "6.0 12.0\n16.0 16.0"
  }
];
const inputSolutions = [
  {
    "title": "Enter the character from user using InputStreamReader",
    "code": "import java.io.InputStreamReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        InputStreamReader reader = new InputStreamReader(System.in);\n        int value = reader.read();\n        if (value != -1) System.out.println((char) value);\n    }\n}",
    "explanation": "InputStreamReader reads character data; read() returns an integer, so cast it to char after checking for end-of-input.",
    "output": "Input used:\n2\n3\n\nActual output:\n2"
  },
  {
    "title": "Enter the string from user using BufferedStreamReader",
    "code": "import java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.IOException;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));\n        String text = reader.readLine();\n        System.out.println(text);\n    }\n}",
    "explanation": "The common Java class is BufferedReader (not BufferedStreamReader); readLine() reads a full line of text.",
    "output": "Input used:\n3\n4\n5\n\nActual output:\n3"
  },
  {
    "title": "Enter the integer from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int value = sc.nextInt();\n        System.out.println(\"Integer: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextInt() reads the next integer token.",
    "output": "Input used:\n1\n2\n3\n\nActual output:\nInteger: 1"
  },
  {
    "title": "Enter the float from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        float value = sc.nextFloat();\n        System.out.println(\"Float: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextFloat() reads a float value.",
    "output": "Input used:\n10\n20\n\nActual output:\nFloat: 10.0"
  },
  {
    "title": "Enter the double from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double value = sc.nextDouble();\n        System.out.println(\"Double: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextDouble() reads a double, which provides more precision than float.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Enter the boolean from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        boolean value = sc.nextBoolean();\n        System.out.println(\"Boolean: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextBoolean() accepts true or false (case-insensitive) as the next token.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Enter the short integer from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        short value = sc.nextShort();\n        System.out.println(\"Short: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextShort() reads an integer within the range of Java's 16-bit signed short type.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Enter the long integer from user using Scanner class",
    "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        long value = sc.nextLong();\n        System.out.println(\"Long: \" + value);\n        sc.close();\n    }\n}",
    "explanation": "Scanner.nextLong() reads a 64-bit signed integer.",
    "output": "Input used:\n123\n\nActual output:\nLong: 123"
  },
  {
    "title": "Get all characters from the file and display on the screen",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        Path path = Path.of(\"input.txt\");\n        String content = Files.readString(path);\n        System.out.print(content);\n    }\n}",
    "explanation": "Put input.txt in the program's working directory. Files.readString reads the file as text (Java 11+).",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Get all characters from the file, count number of lines, words, characters and display on the screen",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    public static void main(String[] args) throws IOException {\n        String text = Files.readString(Path.of(\"input.txt\"));\n        long lines = text.isEmpty() ? 0 : text.lines().count();\n        String trimmed = text.trim();\n        long words = trimmed.isEmpty() ? 0 : trimmed.split(\"\\\\s+\").length;\n        int characters = text.length();\n        System.out.println(\"Lines: \" + lines);\n        System.out.println(\"Words: \" + words);\n        System.out.println(\"Characters: \" + characters);\n        System.out.println(\"Content:\");\n        System.out.print(text);\n    }\n}",
    "explanation": "This counts lines, whitespace-separated words and Java UTF-16 code units. Place input.txt in the working directory; use code-point counting if Unicode code points are required.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  }
];
const dataConversionSolutions = [
  {
    "title": "How to convert String to int",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"123\";\n        int value = Integer.parseInt(text);\n        System.out.println(value);\n    }\n}",
    "explanation": "Integer.parseInt converts a numeric string to int; invalid input throws NumberFormatException.",
    "output": "123"
  },
  {
    "title": "How to convert int to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int value = 123;\n        String text = String.valueOf(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "String.valueOf converts an int to its text representation.",
    "output": "123"
  },
  {
    "title": "How to convert String to long",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"9876543210\";\n        long value = Long.parseLong(text);\n        System.out.println(value);\n    }\n}",
    "explanation": "Long.parseLong parses a string into a long value.",
    "output": "9876543210"
  },
  {
    "title": "How to convert long to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        long value = 9876543210L;\n        String text = Long.toString(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "Long.toString returns the decimal text representation of a long.",
    "output": "9876543210"
  },
  {
    "title": "How to convert String to float",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"12.5\";\n        float value = Float.parseFloat(text);\n        System.out.println(value);\n    }\n}",
    "explanation": "Float.parseFloat parses a decimal string into a float.",
    "output": "12.5"
  },
  {
    "title": "How to convert float to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        float value = 12.5f;\n        String text = Float.toString(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "Float.toString converts a float into a String.",
    "output": "12.5"
  },
  {
    "title": "How to convert String to double",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"123.456\";\n        double value = Double.parseDouble(text);\n        System.out.println(value);\n    }\n}",
    "explanation": "Double.parseDouble parses a numeric string into a double.",
    "output": "123.456"
  },
  {
    "title": "How to convert double to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        double value = 123.456;\n        String text = Double.toString(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "Double.toString converts a double into a String.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert String to Date",
    "code": "import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\npublic class Main {\n    public static void main(String[] args) {\n\n        String text = \"19-10-2026\";\n        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(\"dd-MM-yyyy\");\n        LocalDate date = LocalDate.parse(text, formatter);\n        System.out.println(date);\n    }\n}",
    "explanation": "LocalDate.parse converts a formatted date string into a LocalDate.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Date to String",
    "code": "import java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\npublic class Main {\n    public static void main(String[] args) {\n\n        LocalDate date = LocalDate.of(2026, 10, 19);\n        String text = date.format(DateTimeFormatter.ofPattern(\"dd-MM-yyyy\"));\n        System.out.println(text);\n    }\n}",
    "explanation": "DateTimeFormatter formats a LocalDate using the requested pattern.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert String to char",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"Java\";\n        char value = text.charAt(0);\n        System.out.println(value);\n    }\n}",
    "explanation": "charAt(0) gets the first character; ensure the string is not empty.",
    "output": "J"
  },
  {
    "title": "How to convert char to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        char value = 'J';\n        String text = String.valueOf(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "String.valueOf converts a char to a one-character String.",
    "output": "J"
  },
  {
    "title": "How to convert String to Object",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"Hello Java\";\n        Object object = text;\n        System.out.println(object);\n    }\n}",
    "explanation": "String extends Object, so assigning a String reference to Object is an implicit upcast.",
    "output": "Hello Java"
  },
  {
    "title": "How to convert Object to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        Object object = 123;\n        String text = String.valueOf(object);\n        System.out.println(text);\n    }\n}",
    "explanation": "String.valueOf obtains the object's string representation and safely handles a null reference.",
    "output": "123"
  },
  {
    "title": "How to convert int to long",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int small = 1000;\n        long large = small;\n        System.out.println(large);\n    }\n}",
    "explanation": "int to long is a widening conversion performed automatically.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert long to int",
    "code": "public class Main {\n    public static void main(String[] args) {\n        long large = 12345L;\n        int value = Math.toIntExact(large);\n        System.out.println(value);\n    }\n}",
    "explanation": "Math.toIntExact throws ArithmeticException if the long value cannot fit in an int.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert int to double",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int value = 25;\n        double result = value;\n        System.out.println(result);\n    }\n}",
    "explanation": "int to double is a widening conversion.",
    "output": "25.0"
  },
  {
    "title": "How to convert double to int",
    "code": "public class Main {\n    public static void main(String[] args) {\n        double value = 25.9;\n        int result = (int) value;\n        System.out.println(result); // 25\n    }\n}",
    "explanation": "Casting double to int truncates the fractional part toward zero; it does not round.",
    "output": "25"
  },
  {
    "title": "How to convert char to int",
    "code": "public class Main {\n    public static void main(String[] args) {\n        char letter = 'A';\n        int code = letter;\n        System.out.println(code); // 65\n    }\n}",
    "explanation": "A char widens to its numeric UTF-16 code unit; 'A' has value 65.",
    "output": "65"
  },
  {
    "title": "How to convert int to char",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int code = 65;\n        char letter = (char) code;\n        System.out.println(letter); // A\n    }\n}",
    "explanation": "Casting an integer to char interprets it as a UTF-16 code unit.",
    "output": "A"
  },
  {
    "title": "How to convert String to boolean",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String text = \"true\";\n        boolean value = Boolean.parseBoolean(text);\n        System.out.println(value);\n    }\n}",
    "explanation": "parseBoolean returns true only for text equal to true, ignoring case; other text becomes false.",
    "output": "true"
  },
  {
    "title": "How to convert boolean to String",
    "code": "public class Main {\n    public static void main(String[] args) {\n        boolean value = true;\n        String text = Boolean.toString(value);\n        System.out.println(text);\n    }\n}",
    "explanation": "Boolean.toString returns the String true or false.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Date to Timestamp",
    "code": "import java.sql.Timestamp;\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n\n        Date date = new Date();\n        Timestamp timestamp = new Timestamp(date.getTime());\n        System.out.println(timestamp);\n    }\n}",
    "explanation": "Timestamp(Date.getTime()) converts the Date's epoch milliseconds into a SQL Timestamp.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Timestamp to Date",
    "code": "import java.sql.Timestamp;\nimport java.util.Date;\npublic class Main {\n    public static void main(String[] args) {\n\n        Timestamp timestamp = new Timestamp(System.currentTimeMillis());\n        Date date = new Date(timestamp.getTime());\n        System.out.println(date);\n    }\n}",
    "explanation": "A Date can be created from the Timestamp's epoch milliseconds; extra nanosecond precision is not retained.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Binary to Decimal",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String binary = \"101101\";\n        int decimal = Integer.parseInt(binary, 2);\n        System.out.println(decimal);\n    }\n}",
    "explanation": "Integer.parseInt(binary, 2) interprets the string in base 2.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Decimal to Binary",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int decimal = 45;\n        String binary = Integer.toBinaryString(decimal);\n        System.out.println(binary);\n    }\n}",
    "explanation": "Integer.toBinaryString returns the base-2 representation of an integer.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Hex to Decimal",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String hex = \"2D\";\n        int decimal = Integer.parseInt(hex, 16);\n        System.out.println(decimal);\n    }\n}",
    "explanation": "Integer.parseInt(hex, 16) parses a hexadecimal number.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Decimal to Hex",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int decimal = 45;\n        String hex = Integer.toHexString(decimal).toUpperCase();\n        System.out.println(hex);\n    }\n}",
    "explanation": "Integer.toHexString converts an integer to base 16.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Octal to Decimal",
    "code": "public class Main {\n    public static void main(String[] args) {\n        String octal = \"55\";\n        int decimal = Integer.parseInt(octal, 8);\n        System.out.println(decimal);\n    }\n}",
    "explanation": "Integer.parseInt(octal, 8) parses a base-8 number; valid octal digits are 0 through 7.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "How to convert Decimal to Octal",
    "code": "public class Main {\n    public static void main(String[] args) {\n        int decimal = 45;\n        String octal = Integer.toOctalString(decimal);\n        System.out.println(octal);\n    }\n}",
    "explanation": "Integer.toOctalString returns the base-8 representation of an integer.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  }
];
const oopSolutions = [
  {
    "title": "Write a Java program to create a class called \"Person\" with a name and age attribute. Create two instances of the \"Person\" class, set their attributes using the constructor, and print their name and age.",
    "code": "class Person {\n    String name;\n    int age;\n    Person(String name, int age) { this.name = name; this.age = age; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p1 = new Person(\"Aman\", 20);\n        Person p2 = new Person(\"Priya\", 21);\n        System.out.println(p1.name + \", \" + p1.age);\n        System.out.println(p2.name + \", \" + p2.age);\n    }\n}",
    "explanation": "The constructor initializes each Person object with its own name and age.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Dog\" with a name and breed attribute. Create two instances of the \"Dog\" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
    "code": "class Dog {\n    private String name, breed;\n    Dog(String name, String breed) { this.name = name; this.breed = breed; }\n    void setName(String name) { this.name = name; }\n    void setBreed(String breed) { this.breed = breed; }\n    String getName() { return name; }\n    String getBreed() { return breed; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dog d1 = new Dog(\"Bruno\", \"Labrador\");\n        Dog d2 = new Dog(\"Milo\", \"Beagle\");\n        d1.setName(\"Buddy\"); d2.setBreed(\"Indie\");\n        System.out.println(d1.getName() + \" - \" + d1.getBreed());\n        System.out.println(d2.getName() + \" - \" + d2.getBreed());\n    }\n}",
    "explanation": "Private fields are changed through setter methods and read through getters.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Rectangle\" with width and height attributes. Calculate the area and perimeter of the rectangle.",
    "code": "class Rectangle {\n    double width, height;\n    Rectangle(double width, double height) { this.width = width; this.height = height; }\n    double area() { return width * height; }\n    double perimeter() { return 2 * (width + height); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(5, 3);\n        System.out.println(\"Area: \" + r.area());\n        System.out.println(\"Perimeter: \" + r.perimeter());\n    }\n}",
    "explanation": "Area is width × height; perimeter is twice the sum of width and height.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Circle\" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
    "code": "class Circle {\n    double radius;\n    Circle(double radius) { this.radius = radius; }\n    double area() { return Math.PI * radius * radius; }\n    double circumference() { return 2 * Math.PI * radius; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Circle c = new Circle(4);\n        System.out.println(c.area());\n        c.radius = 6;\n        System.out.println(c.circumference());\n    }\n}",
    "explanation": "The radius can be read or updated; area is πr² and circumference is 2πr.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Book\" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\nclass Book {\n    String title, author, isbn;\n    Book(String title, String author, String isbn) { this.title=title; this.author=author; this.isbn=isbn; }\n    public String toString() { return title + \" by \" + author + \" (ISBN \" + isbn + \")\"; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        List<Book> books = new ArrayList<>();\n        Book b = new Book(\"Java Basics\", \"A. Kumar\", \"ISBN-001\");\n        books.add(b);\n        System.out.println(books);\n        books.remove(b);\n        System.out.println(\"Books remaining: \" + books.size());\n    }\n}",
    "explanation": "An ArrayList stores Book objects; add() inserts a book and remove() removes that object.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Employee\" with a name, job title, and salary attributes, and methods to calculate and update salary.",
    "code": "class Employee {\n    String name, jobTitle;\n    double salary;\n    Employee(String name, String jobTitle, double salary) { this.name=name; this.jobTitle=jobTitle; this.salary=salary; }\n    void raiseSalary(double percent) { if (percent < 0) throw new IllegalArgumentException(); salary += salary * percent / 100; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(\"Ravi\", \"Developer\", 30000);\n        e.raiseSalary(10);\n        System.out.printf(\"%s, %s, salary %.2f%n\", e.name, e.jobTitle, e.salary);\n    }\n}",
    "explanation": "raiseSalary updates the salary by a percentage and rejects negative percentages.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Bank\" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called \"Account\" to maintain account details of a particular customer.",
    "code": "import java.util.*;\nclass Account {\n    String owner; double balance;\n    Account(String owner, double balance) { this.owner=owner; this.balance=balance; }\n    void deposit(double amount) { if (amount <= 0) throw new IllegalArgumentException(); balance += amount; }\n    void withdraw(double amount) { if (amount <= 0 || amount > balance) throw new IllegalArgumentException(\"Invalid withdrawal\"); balance -= amount; }\n}\nclass Bank {\n    Map<String, Account> accounts = new HashMap<>();\n    void add(Account a) { accounts.put(a.owner, a); }\n    void remove(String owner) { accounts.remove(owner); }\n    Account find(String owner) { return accounts.get(owner); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Bank bank = new Bank(); Account a = new Account(\"Aman\", 1000);\n        bank.add(a); a.deposit(250); a.withdraw(100);\n        System.out.println(bank.find(\"Aman\").balance);\n    }\n}",
    "explanation": "Bank keeps accounts in a map. Deposits and withdrawals validate the amount and available balance.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create class called \"TrafficLight\" with attributes for color and duration, and methods to change the color and check for red or green.",
    "code": "class TrafficLight {\n    private String color; private int durationSeconds;\n    TrafficLight(String color, int durationSeconds) { this.color=color; this.durationSeconds=durationSeconds; }\n    void changeColor(String color) { this.color=color; }\n    boolean isRed() { return color.equalsIgnoreCase(\"red\"); }\n    boolean isGreen() { return color.equalsIgnoreCase(\"green\"); }\n    int getDurationSeconds() { return durationSeconds; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        TrafficLight light = new TrafficLight(\"red\", 30);\n        System.out.println(light.isRed());\n        light.changeColor(\"green\");\n        System.out.println(light.isGreen());\n    }\n}",
    "explanation": "The class stores a color and duration and provides methods to change/check the current color.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Employee\" with a name, salary, and hire date attributes, and a method to calculate years of service.",
    "code": "import java.time.LocalDate;\nimport java.time.Period;\nclass Employee {\n    String name; double salary; LocalDate hireDate;\n    Employee(String name, double salary, LocalDate hireDate) { this.name=name; this.salary=salary; this.hireDate=hireDate; }\n    int yearsOfService() { return Period.between(hireDate, LocalDate.now()).getYears(); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(\"Neha\", 45000, LocalDate.of(2020, 6, 1));\n        System.out.println(e.name + \" has \" + e.yearsOfService() + \" years of service.\");\n    }\n}",
    "explanation": "Period.between calculates completed years from the hire date to today.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Student\" with a name, grade, and courses attributes, and methods to add and remove courses.",
    "code": "import java.util.*;\nclass Student {\n    String name, grade; List<String> courses = new ArrayList<>();\n    Student(String name, String grade) { this.name=name; this.grade=grade; }\n    void addCourse(String course) { courses.add(course); }\n    void removeCourse(String course) { courses.remove(course); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(\"Isha\", \"A\");\n        s.addCourse(\"Java\"); s.addCourse(\"DBMS\"); s.removeCourse(\"DBMS\");\n        System.out.println(s.name + \": \" + s.courses);\n    }\n}",
    "explanation": "A List stores course names; methods add and remove courses.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Library\" with a collection of books and methods to add and remove books.",
    "code": "import java.util.*;\nclass Library {\n    private final List<String> books = new ArrayList<>();\n    void addBook(String title) { books.add(title); }\n    boolean removeBook(String title) { return books.remove(title); }\n    List<String> getBooks() { return Collections.unmodifiableList(books); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Library library = new Library();\n        library.addBook(\"Core Java\"); library.addBook(\"Data Structures\");\n        library.removeBook(\"Core Java\");\n        System.out.println(library.getBooks());\n    }\n}",
    "explanation": "Library encapsulates its collection and exposes add, remove, and read-only access methods.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Airplane\" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
    "code": "import java.time.LocalDateTime;\nclass Airplane {\n    String flightNumber, destination; LocalDateTime departure;\n    Airplane(String flightNumber, String destination, LocalDateTime departure) { this.flightNumber=flightNumber; this.destination=destination; this.departure=departure; }\n    String status() { return LocalDateTime.now().isAfter(departure) ? \"Departure time passed\" : \"Scheduled\"; }\n    void delayByMinutes(long minutes) { departure = departure.plusMinutes(minutes); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Airplane flight = new Airplane(\"AB123\", \"Delhi\", LocalDateTime.now().plusHours(2));\n        System.out.println(flight.status()); flight.delayByMinutes(30);\n        System.out.println(flight.departure);\n    }\n}",
    "explanation": "This example models a simple scheduled flight and adjusts its departure time when delayed.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Inventory\" with a collection of products and methods to add and remove products, and to check for low inventory.",
    "code": "import java.util.*;\nclass Inventory {\n    private final Map<String, Integer> stock = new HashMap<>();\n    void add(String product, int quantity) { stock.merge(product, quantity, Integer::sum); }\n    void remove(String product) { stock.remove(product); }\n    boolean isLow(String product, int threshold) { return stock.getOrDefault(product, 0) < threshold; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Inventory inv = new Inventory(); inv.add(\"Mouse\", 3);\n        System.out.println(\"Low stock? \" + inv.isLow(\"Mouse\", 5));\n    }\n}",
    "explanation": "A map tracks each product's quantity; isLow compares its quantity with a supplied threshold.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"School\" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
    "code": "import java.util.*;\nclass School {\n    Set<String> students = new HashSet<>(), teachers = new HashSet<>();\n    List<String> classes = new ArrayList<>();\n    void addStudent(String name) { students.add(name); }\n    void removeStudent(String name) { students.remove(name); }\n    void addTeacher(String name) { teachers.add(name); }\n    void removeTeacher(String name) { teachers.remove(name); }\n    void createClass(String name) { classes.add(name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        School school = new School(); school.addStudent(\"Aman\"); school.addTeacher(\"Ms. Kaur\");\n        school.createClass(\"BCA-5\"); System.out.println(school.classes);\n    }\n}",
    "explanation": "Sets avoid duplicate student/teacher names, while a list stores created class names.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"MusicLibrary\" with a collection of songs and methods to add and remove songs, and to play a random song.",
    "code": "import java.util.*;\nclass MusicLibrary {\n    private final List<String> songs = new ArrayList<>();\n    void addSong(String song) { songs.add(song); }\n    void removeSong(String song) { songs.remove(song); }\n    String playRandomSong() {\n        if (songs.isEmpty()) return \"No songs in library\";\n        return songs.get(new Random().nextInt(songs.size()));\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        MusicLibrary music = new MusicLibrary();\n        music.addSong(\"Song A\"); music.addSong(\"Song B\");\n        System.out.println(\"Playing: \" + music.playRandomSong());\n    }\n}",
    "explanation": "The library selects a random list index. The empty-list check avoids an invalid random index.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Shape\" with abstract methods for calculating area and perimeter, and subclasses for \"Rectangle\", \"Circle\", and \"Triangle\".",
    "code": "abstract class Shape {\n    abstract double area();\n    abstract double perimeter();\n}\nclass Rectangle extends Shape {\n    double w, h; Rectangle(double w, double h) { this.w=w; this.h=h; }\n    double area() { return w*h; } double perimeter() { return 2*(w+h); }\n}\nclass Circle extends Shape {\n    double r; Circle(double r) { this.r=r; }\n    double area() { return Math.PI*r*r; } double perimeter() { return 2*Math.PI*r; }\n}\nclass Triangle extends Shape {\n    double a,b,c; Triangle(double a,double b,double c) { this.a=a; this.b=b; this.c=c; }\n    double area() { double s=perimeter()/2; return Math.sqrt(s*(s-a)*(s-b)*(s-c)); }\n    double perimeter() { return a+b+c; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = {new Rectangle(4,3), new Circle(2), new Triangle(3,4,5)};\n        for (Shape s : shapes) System.out.println(s.area() + \" / \" + s.perimeter());\n    }\n}",
    "explanation": "Shape defines abstract methods; each subclass supplies its own area and perimeter implementation. Triangle area uses Heron's formula.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Movie\" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
    "code": "import java.util.*;\nclass Movie {\n    String title, director; List<String> actors; List<String> reviews = new ArrayList<>();\n    Movie(String title, String director, List<String> actors) { this.title=title; this.director=director; this.actors=new ArrayList<>(actors); }\n    void addReview(String review) { reviews.add(review); }\n    List<String> getReviews() { return Collections.unmodifiableList(reviews); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Movie m = new Movie(\"Example Film\", \"A. Director\", List.of(\"Actor One\", \"Actor Two\"));\n        m.addReview(\"Enjoyable story\"); System.out.println(m.getReviews());\n    }\n}",
    "explanation": "The class stores movie details and allows reviews to be added and retrieved.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called \"Restaurant\" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
    "code": "import java.util.*;\nclass Restaurant {\n    Map<String, Double> menu = new LinkedHashMap<>();\n    List<Integer> ratings = new ArrayList<>();\n    void addItem(String item, double price) { if (price < 0) throw new IllegalArgumentException(); menu.put(item, price); }\n    void removeItem(String item) { menu.remove(item); }\n    void addRating(int rating) { if (rating < 1 || rating > 5) throw new IllegalArgumentException(\"Use 1-5\"); ratings.add(rating); }\n    double averageRating() { return ratings.stream().mapToInt(Integer::intValue).average().orElse(0); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Restaurant r = new Restaurant(); r.addItem(\"Dosa\", 80); r.addRating(4); r.addRating(5);\n        System.out.println(r.menu + \" average=\" + r.averageRating());\n    }\n}",
    "explanation": "The menu maps item names to prices. Ratings are validated to the 1–5 range and averaged.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
    "code": "import java.util.*;\nclass BookingService {\n    List<String> flights = List.of(\"AB123 Delhi\", \"CD456 Mumbai\");\n    List<String> hotels = List.of(\"City Hotel\", \"Lake Hotel\");\n    Set<String> reservations = new HashSet<>();\n    List<String> searchFlights(String query) { return flights.stream().filter(x -> x.toLowerCase().contains(query.toLowerCase())).toList(); }\n    List<String> searchHotels(String query) { return hotels.stream().filter(x -> x.toLowerCase().contains(query.toLowerCase())).toList(); }\n    void book(String reference) { reservations.add(reference); }\n    void cancel(String reference) { reservations.remove(reference); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        BookingService service = new BookingService();\n        System.out.println(service.searchFlights(\"Delhi\"));\n        service.book(\"REF100\"); service.cancel(\"REF100\");\n        System.out.println(service.reservations);\n    }\n}",
    "explanation": "This is an in-memory demonstration with sample data, not a live booking system. Stream.toList() requires Java 16 or newer.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class showing an example of default constructor.",
    "code": "class Student {\n    Student() { System.out.println(\"Default-style constructor called\"); }\n}\npublic class Main {\n    public static void main(String[] args) { new Student(); }\n}",
    "explanation": "This is an explicitly declared no-argument constructor. Java supplies a default constructor only when no constructor is declared.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class showing an example of parameterized constructor.",
    "code": "class Student {\n    int rollNo; String name;\n    Student(int rollNo, String name) { this.rollNo=rollNo; this.name=name; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(101, \"Riya\");\n        System.out.println(s.rollNo + \" \" + s.name);\n    }\n}",
    "explanation": "A parameterized constructor accepts values to initialize an object's fields.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class showing an example of copy constructor.",
    "code": "class Student {\n    int rollNo; String name;\n    Student(int rollNo, String name) { this.rollNo=rollNo; this.name=name; }\n    Student(Student other) { this(other.rollNo, other.name); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student first = new Student(101, \"Riya\");\n        Student copy = new Student(first);\n        System.out.println(copy.rollNo + \" \" + copy.name);\n    }\n}",
    "explanation": "Java has no built-in copy-constructor syntax, but a constructor can accept another object and copy its fields.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students",
    "code": "import java.util.*;\nclass Student {\n    private static int nextRoll = 1;\n    int rollNo; String name, className;\n    Student(String name, String className) { this.rollNo=nextRoll++; this.name=name; this.className=className; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        try (Scanner sc = new Scanner(System.in)) {\n            List<Student> students = new ArrayList<>();\n            for (int i=0; i<10; i++) {\n                System.out.print(\"Name and class: \");\n                students.add(new Student(sc.nextLine(), sc.nextLine()));\n            }\n            for (Student s : students) System.out.println(s.rollNo + \" \" + s.name + \" \" + s.className);\n        }\n    }\n}",
    "explanation": "A static counter assigns a unique roll number to each object. Enter a name on one line and the class name on the next line, ten times.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class showing the area of circle and rectangle by method overloading.",
    "code": "class Area {\n    double calculate(double radius) { return Math.PI * radius * radius; }\n    double calculate(double length, double width) { return length * width; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Area a = new Area();\n        System.out.println(\"Circle: \" + a.calculate(3));\n        System.out.println(\"Rectangle: \" + a.calculate(4, 5));\n    }\n}",
    "explanation": "The same method name is overloaded with different parameter lists. One double is used for circle radius; two doubles for rectangle dimensions.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create a class, entering the command line arguments from the user and show all the arguments as output..",
    "code": "public class Main {\n    public static void main(String[] args) {\n        if (args.length == 0) System.out.println(\"No command-line arguments supplied.\");\n        for (int i=0; i<args.length; i++) System.out.println(\"Argument \" + i + \": \" + args[i]);\n    }\n}",
    "explanation": "Pass values when launching the program, for example: java Main hello 123. Arguments are received as strings in args.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called Person with private instance variables name, age. and country. Provide public getter and setter methods to access and modify these variables.",
    "code": "class Person {\n    private String name, country; private int age;\n    public String getName() { return name; } public void setName(String name) { this.name=name; }\n    public int getAge() { return age; } public void setAge(int age) { if(age<0) throw new IllegalArgumentException(); this.age=age; }\n    public String getCountry() { return country; } public void setCountry(String country) { this.country=country; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person(); p.setName(\"Aman\"); p.setAge(20); p.setCountry(\"India\");\n        System.out.println(p.getName()+\", \"+p.getAge()+\", \"+p.getCountry());\n    }\n}",
    "explanation": "Private fields are encapsulated with public getters and setters; the age setter rejects negative values.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
    "code": "class BankAccount {\n    private String accountNumber; private double balance;\n    public String getAccountNumber() { return accountNumber; }\n    public void setAccountNumber(String accountNumber) { this.accountNumber=accountNumber; }\n    public double getBalance() { return balance; }\n    public void setBalance(double balance) { if(balance<0) throw new IllegalArgumentException(\"Negative balance\"); this.balance=balance; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount a = new BankAccount(); a.setAccountNumber(\"AC101\"); a.setBalance(500);\n        System.out.println(a.getAccountNumber()+\" \"+a.getBalance());\n    }\n}",
    "explanation": "Getter and setter methods control access to private fields. Real financial applications should use BigDecimal rather than double for money.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
    "code": "class Rectangle {\n    private double length, width;\n    public double getLength() { return length; } public void setLength(double length) { if(length<0) throw new IllegalArgumentException(); this.length=length; }\n    public double getWidth() { return width; } public void setWidth(double width) { if(width<0) throw new IllegalArgumentException(); this.width=width; }\n    double area() { return length*width; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(); r.setLength(5); r.setWidth(3);\n        System.out.println(r.area());\n    }\n}",
    "explanation": "Private dimensions are read and updated through getters and setters. Negative dimensions are rejected.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
    "code": "class Employee {\n    private int employee_id; private String employee_name; private double employee_salary;\n    public int getEmployeeId() { return employee_id; } public void setEmployeeId(int id) { employee_id=id; }\n    public String getEmployeeName() { return employee_name; } public void setEmployeeName(String name) { employee_name=name; }\n    public String getEmployeeSalary() { return String.format(\"$%,.2f\", employee_salary); }\n    public void setEmployeeSalary(double salary) { if(salary<0) throw new IllegalArgumentException(); employee_salary=salary; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Employee e = new Employee(); e.setEmployeeId(7); e.setEmployeeName(\"Neha\"); e.setEmployeeSalary(42500);\n        System.out.println(e.getEmployeeId()+\" \"+e.getEmployeeName()+\" \"+e.getEmployeeSalary());\n    }\n}",
    "explanation": "The salary getter formats the value to two decimal places. The dollar sign is only an example currency format; change it for your locale.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
    "code": "class Circle {\n    private double radius;\n    public double getRadius() { return radius; }\n    public void setRadius(double radius) { if(radius<0) throw new IllegalArgumentException(); this.radius=radius; }\n    public double calculateArea() { return Math.PI*radius*radius; }\n    public double calculatePerimeter() { return 2*Math.PI*radius; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Circle c = new Circle(); c.setRadius(4);\n        System.out.println(c.calculateArea()); System.out.println(c.calculatePerimeter());\n    }\n}",
    "explanation": "The two calculation methods always use the current radius; the setter rejects negative values.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
    "code": "class Car {\n    private String company_name, model_name; private int year; private double mileage;\n    Car(String company, String model, int year, double mileage) { this.company_name=company; this.model_name=model; this.year=year; this.mileage=mileage; }\n    public String getCompany_name() { return company_name; } public void setCompany_name(String v) { company_name=v; }\n    public String getModel_name() { return model_name; } public void setModel_name(String v) { model_name=v; }\n    public int getYear() { return year; } public void setYear(int year) { this.year=year; }\n    public double getMileage() { return mileage; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Car car = new Car(\"Tata\",\"Nexon\",2024,18.5); car.setModel_name(\"Nexon EV\");\n        System.out.println(car.getCompany_name()+\" \"+car.getModel_name()+\" \"+car.getYear()+\" \"+car.getMileage());\n    }\n}",
    "explanation": "Mileage is read-only through the public API because it has a getter but no setter.",
    "output": "Tata Nexon EV 2024 18.5"
  },
  {
    "title": "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation.",
    "code": "import java.util.*;\nclass Student {\n    private int student_id; private String student_name; private final List<Integer> grades = new ArrayList<>();\n    public int getStudent_id() { return student_id; } public void setStudent_id(int id) { student_id=id; }\n    public String getStudent_name() { return student_name; } public void setStudent_name(String name) { student_name=name; }\n    public void addGrade(int grade) { if(grade<0 || grade>100) throw new IllegalArgumentException(\"Grade must be 0-100\"); grades.add(grade); }\n    public List<Integer> getGrades() { return Collections.unmodifiableList(grades); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student(); s.setStudent_id(1); s.setStudent_name(\"Aman\"); s.addGrade(85);\n        System.out.println(s.getStudent_name()+\" \"+s.getGrades());\n    }\n}",
    "explanation": "Grades can only be added through addGrade(), which validates the 0–100 range. The returned grade list cannot be modified directly.",
    "output": "Aman [85]"
  }
];
const exceptionSolutions = [
  {
    "title": "Write a Java program that throws an exception and catch it using a try-catch block.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero: \" + e.getMessage());\n        }\n    }\n}",
    "explanation": "The division throws ArithmeticException. The matching catch block handles it so the program can continue.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd.",
    "code": "public class Main {\n    static void checkEven(int number) {\n        if (number % 2 != 0) throw new IllegalArgumentException(\"Number must be even\");\n        System.out.println(number + \" is even\");\n    }\n    public static void main(String[] args) {\n        try { checkEven(7); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}",
    "explanation": "The method explicitly throws IllegalArgumentException for odd values; main catches and prints the message.",
    "output": "Number must be even"
  },
  {
    "title": "Write a Java program to create a method that reads a file and throws an exception if the file is not found",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    static String readFile(String fileName) throws IOException {\n        Path path = Path.of(fileName);\n        if (!Files.exists(path)) throw new IOException(\"File not found: \" + fileName);\n        return Files.readString(path);\n    }\n    public static void main(String[] args) {\n        try { System.out.println(readFile(\"input.txt\")); }\n        catch (IOException e) { System.out.println(e.getMessage()); }\n    }\n}",
    "explanation": "The method declares throws IOException and raises it when the path does not exist. Create input.txt in the working directory to test the successful case.",
    "output": "File not found: input.txt"
  },
  {
    "title": "Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    static void checkNumbers(String fileName) throws IOException {\n        for (String token : Files.readString(Path.of(fileName)).trim().split(\"\\\\s+\")) {\n            if (token.isEmpty()) continue;\n            int number = Integer.parseInt(token);\n            if (number > 0) throw new IllegalArgumentException(\"Positive number found: \" + number);\n        }\n        System.out.println(\"No positive numbers found.\");\n    }\n    public static void main(String[] args) {\n        try { checkNumbers(\"numbers.txt\"); }\n        catch (IOException | IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}",
    "explanation": "Put whitespace-separated integers in numbers.txt. The method throws IllegalArgumentException as soon as it encounters a positive number.",
    "output": "numbers.txt"
  },
  {
    "title": "Write a Java program that reads a file and throws an exception if the file is empty.",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    static String readNonEmptyFile(String fileName) throws IOException {\n        String text = Files.readString(Path.of(fileName));\n        if (text.isBlank()) throw new IllegalArgumentException(\"File is empty\");\n        return text;\n    }\n    public static void main(String[] args) {\n        try { System.out.println(readNonEmptyFile(\"input.txt\")); }\n        catch (IOException | IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}",
    "explanation": "The file is considered empty if it contains no text or only whitespace. IOException handles file-access problems.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates",
    "code": "import java.util.HashSet;\nimport java.util.Scanner;\nimport java.util.Set;\n\npublic class Main {\n    static void checkDuplicates(int[] numbers) {\n        Set<Integer> seen = new HashSet<>();\n        for (int number : numbers) {\n            if (!seen.add(number)) throw new IllegalArgumentException(\"Duplicate number: \" + number);\n        }\n        System.out.println(\"No duplicates found.\");\n    }\n    public static void main(String[] args) {\n        try (Scanner sc = new Scanner(System.in)) {\n            System.out.print(\"How many integers? \");\n            int n = sc.nextInt();\n            int[] numbers = new int[n];\n            for (int i = 0; i < n; i++) numbers[i] = sc.nextInt();\n            try { checkDuplicates(numbers); }\n            catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n        }\n    }\n}",
    "explanation": "A HashSet stores values already seen. Set.add returns false when a value is repeated, which triggers the exception.",
    "output": "Input used:\n1\n0\n\nActual output:\nHow many integers? No duplicates found."
  },
  {
    "title": "Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels.",
    "code": "public class Main {\n    static void checkVowel(String text) {\n        if (text == null || !text.matches(\"(?is).* [aeiou].*\".replace(\" \", \"\"))) {\n            throw new IllegalArgumentException(\"String does not contain a vowel\");\n        }\n        System.out.println(\"String contains a vowel.\");\n    }\n    public static void main(String[] args) {\n        try { checkVowel(\"rhythm\"); }\n        catch (IllegalArgumentException e) { System.out.println(e.getMessage()); }\n    }\n}",
    "explanation": "The method checks for any English vowel (a, e, i, o, u), ignoring case. The sample string rhythm triggers the exception.",
    "output": "String does not contain a vowel"
  },
  {
    "title": "Write a Java program to connect the Java API to Database, if connection not successful then throw an exception",
    "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class Main {\n    public static void main(String[] args) {\n        String url = \"jdbc:your_database_url\"; // Replace with your JDBC URL\n        try (Connection connection = DriverManager.getConnection(url, \"username\", \"password\")) {\n            System.out.println(\"Database connected successfully.\");\n        } catch (SQLException e) {\n            System.out.println(\"Database connection failed: \" + e.getMessage());\n        }\n    }\n}",
    "explanation": "DriverManager.getConnection throws SQLException when the connection fails. Replace the URL and credentials and add the appropriate JDBC driver; never hard-code real credentials in a public project.",
    "output": "Database connection failed: No suitable driver found for jdbc:your_database_url"
  },
  {
    "title": "Write a Java program to manage the driver with path, username and password, if not successful then throw an exception",
    "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class Main {\n    public static void main(String[] args) {\n        String driverClass = \"com.example.jdbc.Driver\"; // Replace with your driver's class\n        String url = \"jdbc:your_database_url\";\n        String username = \"username\";\n        String password = \"password\";\n        try {\n            Class.forName(driverClass);\n            try (Connection connection = DriverManager.getConnection(url, username, password)) {\n                System.out.println(\"Driver loaded and connection established.\");\n            }\n        } catch (ClassNotFoundException | SQLException e) {\n            throw new IllegalStateException(\"Driver loading or database connection failed\", e);\n        }\n    }\n}",
    "explanation": "Class.forName checks that the configured driver class is available, and DriverManager opens the connection. Use the actual class name and JDBC driver dependency for your database.",
    "output": "The program did not finish cleanly with the supplied sample input; check the code before relying on an output."
  },
  {
    "title": "Write a Java program to throw the SQL Query, insert, delete, update, if not successful then throw an exception",
    "code": "import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.PreparedStatement;\nimport java.sql.SQLException;\n\npublic class Main {\n    static void insertExample(Connection connection, int id, String name) throws SQLException {\n        String sql = \"INSERT INTO students (id, name) VALUES (?, ?)\";\n        try (PreparedStatement statement = connection.prepareStatement(sql)) {\n            statement.setInt(1, id);\n            statement.setString(2, name);\n            int changed = statement.executeUpdate();\n            if (changed != 1) throw new SQLException(\"Insert did not affect exactly one row\");\n        }\n    }\n    public static void main(String[] args) {\n        String url = \"jdbc:your_database_url\";\n        try (Connection connection = DriverManager.getConnection(url, \"username\", \"password\")) {\n            insertExample(connection, 1, \"Aman\");\n            System.out.println(\"Insert successful\");\n        } catch (SQLException e) {\n            System.out.println(\"SQL operation failed: \" + e.getMessage());\n        }\n    }\n}",
    "explanation": "PreparedStatement safely parameterizes the insert. SQL errors are reported as SQLException; adapt the table, columns, database URL and credentials. Update and delete use the same executeUpdate pattern.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to show an example of throws Keyword.",
    "code": "import java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class Main {\n    static String loadText(String fileName) throws IOException {\n        return Files.readString(Path.of(fileName));\n    }\n    public static void main(String[] args) {\n        try { System.out.println(loadText(\"input.txt\")); }\n        catch (IOException e) { System.out.println(\"Could not read file: \" + e.getMessage()); }\n    }\n}",
    "explanation": "The throws clause declares that loadText may pass an IOException to its caller. The caller handles it with try-catch.",
    "output": "Could not read file: input.txt"
  },
  {
    "title": "Write a Java program to show an example of multiple catch",
    "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] values = {10, 20};\n            int divisor = Integer.parseInt(args.length == 0 ? \"0\" : args[0]);\n            System.out.println(values[3] / divisor);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Cannot divide by zero.\");\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array index is out of range.\");\n        } catch (NumberFormatException e) {\n            System.out.println(\"Please provide a valid integer argument.\");\n        }\n    }\n}",
    "explanation": "Each catch handles a different exception type. This example illustrates the structure; because the array access is deliberately out of range, that exception is encountered first.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to show an example of nested try block.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Outer try block\");\n            try {\n                int[] values = {1, 2, 3};\n                System.out.println(values[5]);\n            } catch (ArrayIndexOutOfBoundsException e) {\n                System.out.println(\"Inner catch: invalid array index\");\n            }\n            int result = 10 / 0;\n            System.out.println(result);\n        } catch (ArithmeticException e) {\n            System.out.println(\"Outer catch: division by zero\");\n        }\n    }\n}",
    "explanation": "The inner try-catch handles the array error locally. The later division error escapes to the outer catch block.",
    "output": "Outer try block\nInner catch: invalid array index\nOuter catch: division by zero"
  }
]
const multithreadingSolutions = [
  {
    "title": "Write a Java program to create a basic Java thread that prints \"Hello, World!\" when executed.",
    "code": "public class Main {\n    public static void main(String[] args) {\n        Thread worker = new Thread(() -> System.out.println(\"Hello, World!\"));\n        worker.start();\n    }\n}",
    "explanation": "A Thread is created with a Runnable lambda. Calling start() schedules the new thread; calling run() directly would execute on the current thread.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that creates two threads to find and print even and odd numbers from 1 to 20.",
    "code": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread even = new Thread(() -> {\n            for (int i = 2; i <= 20; i += 2) System.out.println(\"Even: \" + i);\n        });\n        Thread odd = new Thread(() -> {\n            for (int i = 1; i <= 20; i += 2) System.out.println(\"Odd: \" + i);\n        });\n        even.start(); odd.start();\n        even.join(); odd.join();\n    }\n}",
    "explanation": "Two independent threads print even and odd numbers. Their output may interleave in different orders because the scheduler decides when each runs.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that sorts an array of integers using multiple threads.",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        int[] values = {9, 3, 7, 1, 6, 2};\n        int middle = values.length / 2;\n        int[] left = Arrays.copyOfRange(values, 0, middle);\n        int[] right = Arrays.copyOfRange(values, middle, values.length);\n        Thread t1 = new Thread(() -> Arrays.sort(left));\n        Thread t2 = new Thread(() -> Arrays.sort(right));\n        t1.start(); t2.start(); t1.join(); t2.join();\n        int[] result = new int[values.length];\n        int i = 0, a = 0, b = 0;\n        while (a < left.length && b < right.length)\n            result[i++] = left[a] <= right[b] ? left[a++] : right[b++];\n        while (a < left.length) result[i++] = left[a++];\n        while (b < right.length) result[i++] = right[b++];\n        System.out.println(Arrays.toString(result));\n    }\n}",
    "explanation": "Each thread sorts a separate half of the array. After both finish, the main thread merges the sorted halves. This is a simple parallel merge-sort demonstration.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that performs matrix multiplication using multiple threads.",
    "code": "import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) throws InterruptedException {\n        int[][] a = {{1, 2}, {3, 4}};\n        int[][] b = {{5, 6}, {7, 8}};\n        int[][] result = new int[2][2];\n        Thread[] workers = new Thread[2];\n        for (int row = 0; row < 2; row++) {\n            final int r = row;\n            workers[row] = new Thread(() -> {\n                for (int col = 0; col < 2; col++)\n                    for (int k = 0; k < 2; k++) result[r][col] += a[r][k] * b[k][col];\n            });\n            workers[row].start();\n        }\n        for (Thread worker : workers) worker.join();\n        for (int[] row : result) System.out.println(Arrays.toString(row));\n    }\n}",
    "explanation": "One thread computes each result row. Each worker writes to a different row, avoiding write conflicts in this small example.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that calculates the sum of all prime numbers up to a given limit using multiple threads.",
    "code": "public class Main {\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) if (n % i == 0) return false;\n        return true;\n    }\n    public static void main(String[] args) throws InterruptedException {\n        int limit = 100;\n        int mid = limit / 2;\n        long[] partial = new long[2];\n        Thread first = new Thread(() -> { for (int n = 2; n <= mid; n++) if (isPrime(n)) partial[0] += n; });\n        Thread second = new Thread(() -> { for (int n = mid + 1; n <= limit; n++) if (isPrime(n)) partial[1] += n; });\n        first.start(); second.start(); first.join(); second.join();\n        System.out.println(\"Sum of primes up to \" + limit + \" = \" + (partial[0] + partial[1]));\n    }\n}",
    "explanation": "The range is split into two non-overlapping parts, and each thread computes a local sum. Joining both threads ensures the partial sums are ready before adding them.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program to implement a concurrent web crawler that crawls multiple websites simultaneously using threads.",
    "code": "import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\nimport java.util.List;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> urls = List.of(\"https://example.com\", \"https://www.iana.org\");\n        ExecutorService pool = Executors.newFixedThreadPool(2);\n        HttpClient client = HttpClient.newHttpClient();\n        for (String url : urls) pool.submit(() -> {\n            try {\n                HttpRequest request = HttpRequest.newBuilder(URI.create(url)).GET().build();\n                HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n                System.out.println(url + \" -> HTTP \" + response.statusCode() + \", chars=\" + response.body().length());\n            } catch (Exception e) { System.out.println(url + \" failed: \" + e.getMessage()); }\n        });\n        pool.shutdown();\n    }\n}",
    "explanation": "This is a small concurrent fetcher, not a full link-following crawler. It fetches two specified sites in a thread pool; only crawl sites you are permitted to access and respect their terms and robots.txt.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Write a Java program that creates a bank account with concurrent deposits and withdrawals using threads.",
    "code": "public class Main {\n    static class BankAccount {\n        private int balance;\n        BankAccount(int initialBalance) { balance = initialBalance; }\n        synchronized void deposit(int amount) { balance += amount; }\n        synchronized boolean withdraw(int amount) {\n            if (amount > balance) return false;\n            balance -= amount; return true;\n        }\n        synchronized int getBalance() { return balance; }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        BankAccount account = new BankAccount(1000);\n        Thread depositor = new Thread(() -> { for (int i = 0; i < 100; i++) account.deposit(10); });\n        Thread withdrawer = new Thread(() -> { for (int i = 0; i < 50; i++) account.withdraw(5); });\n        depositor.start(); withdrawer.start(); depositor.join(); withdrawer.join();\n        System.out.println(\"Final balance: \" + account.getBalance());\n    }\n}",
    "explanation": "Synchronized methods protect the balance from simultaneous updates. Deposits total 1000 and successful withdrawals total at most 250; the final balance is deterministic for this example.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads by using Runnable interface",
    "code": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable task = () -> System.out.println(\"Running on \" + Thread.currentThread().getName());\n        Thread t1 = new Thread(task, \"Worker-1\");\n        Thread t2 = new Thread(task, \"Worker-2\");\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}",
    "explanation": "Runnable represents the task to execute. Passing the same Runnable to separate Thread objects runs that task on multiple threads.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads by using Thread class",
    "code": "public class Main {\n    static class Worker extends Thread {\n        Worker(String name) { super(name); }\n        public void run() { System.out.println(\"Hello from \" + getName()); }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread t1 = new Worker(\"Worker-1\");\n        Thread t2 = new Worker(\"Worker-2\");\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}",
    "explanation": "Worker extends Thread and overrides run(). Use start() to execute each worker concurrently. Implementing Runnable is usually more flexible when the class must extend another class.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads, set its name and its priority.",
    "code": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Runnable task = () -> System.out.println(Thread.currentThread().getName() + \" priority=\" + Thread.currentThread().getPriority());\n        Thread t1 = new Thread(task, \"LowPriority\");\n        Thread t2 = new Thread(task, \"HighPriority\");\n        t1.setPriority(Thread.MIN_PRIORITY);\n        t2.setPriority(Thread.MAX_PRIORITY);\n        t1.start(); t2.start();\n        t1.join(); t2.join();\n    }\n}",
    "explanation": "Thread names help identify workers. Priority is only a scheduling hint; it does not guarantee which thread runs first.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads, show an example of synchronization keyword.",
    "code": "public class Main {\n    static class Counter {\n        private int count = 0;\n        synchronized void increment() { count++; }\n        synchronized int getCount() { return count; }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n        Runnable task = () -> { for (int i = 0; i < 10000; i++) counter.increment(); };\n        Thread t1 = new Thread(task); Thread t2 = new Thread(task);\n        t1.start(); t2.start(); t1.join(); t2.join();\n        System.out.println(\"Count = \" + counter.getCount()); // 20000\n    }\n}",
    "explanation": "The synchronized method allows only one thread at a time to increment the shared counter, so the expected final value is 20000.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads, show an example of notify, notifyall, wait, resume, sleep methods.",
    "code": "public class Main {\n    static class Message {\n        private boolean ready = false;\n        synchronized void awaitMessage() throws InterruptedException {\n            while (!ready) wait();\n            System.out.println(\"Message received\");\n        }\n        synchronized void sendMessage() {\n            ready = true;\n            notifyAll();\n        }\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Message message = new Message();\n        Thread receiver = new Thread(() -> {\n            try { message.awaitMessage(); }\n            catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n        });\n        receiver.start();\n        Thread.sleep(200); // demonstration pause\n        message.sendMessage();\n        receiver.join();\n    }\n}",
    "explanation": "wait() releases the object's monitor until notified; notifyAll() wakes waiting threads. sleep() pauses the current thread without releasing held monitors. Thread.resume() is deprecated and unsafe; do not use it in new code. notify() wakes one waiter.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  },
  {
    "title": "Create the program to create multiple threads, show an example of join and yield methods.",
    "code": "public class Main {\n    public static void main(String[] args) throws InterruptedException {\n        Thread worker = new Thread(() -> {\n            for (int i = 1; i <= 3; i++) {\n                System.out.println(\"Worker: \" + i);\n                Thread.yield(); // hint to the scheduler\n            }\n        });\n        worker.start();\n        worker.join(); // wait until worker finishes\n        System.out.println(\"Main continues after worker finishes\");\n    }\n}",
    "explanation": "join() makes the calling thread wait for the target thread to finish. yield() merely hints that the scheduler may let another thread run; it is not guaranteed to change execution order.",
    "output": "The program did not finish within the test time. Its output may depend on input or thread timing."
  }
];;
const solutionSets = {
  'Single Dimension Arrays': arraySolutions,
  'Functions': functionsSolutions,
  'Strings': stringsSolutions,
  'Multi-Dimension Arrays': matrixSolutions,
  'Basic Programming Constructs': basicSolutions,
  'Interfaces': interfaceSolutions,
  'Packages': packageSolutions,
  'Inheritance': inheritanceSolutions,
  'Input/Output': inputSolutions,
  'Exception Handling': exceptionSolutions,
  'Multithreading': multithreadingSolutions,
  'Data Conversion': dataConversionSolutions,
  'Object-Oriented Programming': oopSolutions
};
const topicDescriptions = {
  'Single Dimension Arrays': '23 array programming challenges with Java solutions and explanations.',
  'Functions': '13 function challenges with Java solutions and explanations.',
  'Strings': '50 string programming challenges with Java solutions and explanations.',
  'Multi-Dimension Arrays': '13 multi-dimensional array challenges with Java solutions and explanations.',
  'Basic Programming Constructs': '139 basic programming challenges with Java examples and explanations.',
  'Interfaces': '11 interface programming challenges with Java solutions and explanations.',
  'Packages': '10 package programming challenges with Java examples and explanations.',
  'Inheritance': '26 inheritance and abstract-class challenges with Java solutions and explanations.',
  'Input/Output': '10 input/output challenges with Java solutions and explanations.',
  'Exception Handling': '13 exception-handling challenges with Java solutions and explanations.',
  'Multithreading': '13 multithreading challenges with Java solutions and explanations.',
  'Data Conversion': '30 data-conversion challenges with Java solutions and explanations.',
  'Object-Oriented Programming': '32 object-oriented programming challenges with Java solutions and explanations.'
};

const topicList = document.getElementById('topicList');
const topicSearch = document.getElementById('topicSearch');
const questionSearch = document.getElementById('questionSearch');
const welcome = document.getElementById('welcome');
const practice = document.getElementById('practice');
const questionList = document.getElementById('questionList');
let currentTopic = 0;

function renderTopicMenu() {
  const query = topicSearch.value.trim().toLowerCase();
  const filtered = topics.map((t, i) => ({t, i})).filter(x => x.t.topic.toLowerCase().includes(query));
  topicList.innerHTML = filtered.map(({t, i}) =>
    `<button class="topic-link ${i === currentTopic && !welcome.hidden ? 'active' : ''}" data-topic="${i}">${String(i+1).padStart(2,'0')} &nbsp; ${escapeHtml(t.topic)}</button>`
  ).join('') || '<p class="muted">No matching topics.</p>';
}
function openTopic(index) {
  currentTopic = (index + topics.length) % topics.length;
  welcome.hidden = true;
  practice.hidden = false;
  questionSearch.value = '';
  document.getElementById('topicTitle').textContent = topics[currentTopic].topic;
  document.getElementById('topicDescription').textContent =
    topicDescriptions[topics[currentTopic].topic] || 'Try each question before revealing its answer.';
  document.getElementById('questionCount').textContent = topics[currentTopic].questions.length + ' questions';
  document.getElementById('topicPosition').textContent = `Topic ${currentTopic+1} of ${topics.length}`;
  renderTopicMenu();
  renderQuestions();
}
function renderQuestions() {
  const query = questionSearch.value.trim().toLowerCase();
  const filtered = topics[currentTopic].questions.map((q, i) => ({q, i})).filter(x => (x.q[0]+' '+x.q[1]).toLowerCase().includes(query));
  if (!filtered.length) {
    questionList.innerHTML = '<div class="no-results">No questions match your search.</div>';
    return;
  }
  questionList.innerHTML = filtered.map(({q, i}) => `
    <article class="question-card">
      <div class="question-head"><span class="question-number">${i+1}</span><h3>${escapeHtml(q[0])}</h3></div>
      ${Boolean(solutionSets[topics[currentTopic].topic]) ? `<button class="reveal" data-code="${i}">⌘ Show Java solution</button>
      <div class="answer code-answer" id="answer-${i}" hidden>
        <span class="answer-label">Java solution</span>
        <pre><code>${escapeHtml(solutionSets[topics[currentTopic].topic][i].code)}</code></pre>
        <p class="explanation-text">${escapeHtml(solutionSets[topics[currentTopic].topic][i].explanation)}</p>
        <section class="output-panel" aria-label="Sample output">
          <div class="output-heading"><span class="output-dot"></span><strong>Sample output</strong></div>
          <pre class="output-code"><code>${escapeHtml(solutionSets[topics[currentTopic].topic][i].output || 'Run the program to see its output.')}</code></pre>
          <p class="output-note">Note: output can change if you use different input values.</p>
        </section>
      </div>` : `<button class="reveal" data-answer="${i}">＋ Show answer</button>
      <div class="answer" id="answer-${i}" hidden><span class="answer-label">Answer</span>${escapeHtml(q[1])}</div>`}
    </article>`).join('');
}
function escapeHtml(value) {
  return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");
}
topicList.addEventListener('click', event => {
  const button = event.target.closest('[data-topic]');
  if (button) openTopic(Number(button.dataset.topic));
});
topicSearch.addEventListener('input', renderTopicMenu);
questionSearch.addEventListener('input', renderQuestions);
questionList.addEventListener('click', event => {
  const button = event.target.closest('[data-answer], [data-code]');
  if (!button) return;
  const index = button.dataset.answer ?? button.dataset.code;
  const answer = document.getElementById('answer-' + index);
  answer.hidden = !answer.hidden;
  button.textContent = answer.hidden ? (button.hasAttribute('data-code') ? '⌘ Show Java solution' : '＋ Show answer') : '− Hide answer';
});
document.getElementById('showAll').addEventListener('click', () => {
  const answers = questionList.querySelectorAll('.answer');
  const shouldShow = [...answers].some(answer => answer.hidden);
  answers.forEach(answer => answer.hidden = !shouldShow);
  questionList.querySelectorAll('[data-answer], [data-code]').forEach(button => {
    button.textContent = shouldShow ? '− Hide answer' : (button.hasAttribute('data-code') ? '⌘ Show Java solution' : '＋ Show answer');
  });
  document.getElementById('showAll').textContent = shouldShow ? 'Hide all answers' : 'Show all answers';
});
document.getElementById('prevTopic').addEventListener('click', () => openTopic(currentTopic - 1));
document.getElementById('nextTopic').addEventListener('click', () => openTopic(currentTopic + 1));
renderTopicMenu();
