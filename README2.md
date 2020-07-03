#####
1.
GIVEN I need a new, secure password
WHEN I click the button to generate a password
2, 3. 
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
4.
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
5.
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


1. The new password will be a mix of Upper case and lower case letters, numbers and symbols to make it secure.
2. A validated prompt will ask the user for a number between 8 - 128 and will not accept non numbers.
3. 4 Confirms will allow the user to decide what types of characters to incorporate into their password.
4. To validate that at least one of each character type is incorporated in the password, random chracters are pulled from each type of character of the same type. ie. if numbers is chosen atleast one number will be pulled from the number array and added to the password. This number will not affect the total length of the password.
5. The remaining characters of the password are randomly chosen from a combined array of the chosen element types and unshifted to the password array then are joined to create and display the randomized password.
