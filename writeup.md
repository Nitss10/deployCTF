# Writeup for Web/how-do-I-meet-friend

Authors: [Niti Mangwani](https://github.com/Nitss10)

## Description

There are 3 levels to this challenge where the user gets directed to the subsequent challenge from the clues in the current challenge.
The user will be able to find the flag at the end of the challenge.


## Challenge


### Level 1:

Playing with HTML and JS:
In this level, we have Blackberry given at the top, which strikes a keypad phone image which gives certain hints openly for mapping few things. Plus user can play with the JS, headers to get more info to get to the next challenges.

As there is no information displayed upfront, the user needs to figure out a way to get information by inspecting the source code and getting the information from the script section and then map it to the desired output using the keypad hints.

### Level 2:

Playing with Geography, Problem-solving, Console logging  and Programming:
Here the two friends who want to meet have been named X and Y and they have some information. Also, a picture of the map has been displayed hinting that the information could lead us to coordinates. When we go down on the page and see there are a lot of spaces in front of X and Y  but no information. Use can hover or select that empty space to find out that the information is in white color. The user can then think take both the information and think of that information as coordinates to find out a location to meet. That would be the first answer.

Once that is done and validated, there comes a link that directs the user to a problem statement, which calculates longest common subsequence. We have one string but we do not have the second string. 
To find the second string we would inspect the code and find that a string has come in the console log. Once we take that string and find the longest common subsequence of both, we get the answer for this step. Once that is validated , we get the link to directly go to.

### Level 3:

Playing with the file structure: 
Here we got a zip file with an empty txt file, whose name gives a lot of hint about the location to find the route that directs to the flag. User has to play a little with the directory structure and find out that there is a hidden file in this case inside the folder which contains the route that will be appended to the localhost to get the final flag. 


<!-- Includes why do you want to create challenge on this subject -->

<!-- Includes what types of challenge you are creating -->