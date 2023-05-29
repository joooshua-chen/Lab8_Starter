# Lab 8 - Starter

# Name: Joshua Chen

# Check Your Understanding Question 1
I would fit my automated tests within a Github action that runs whenever code is pushed. This is because for each iteration of the the Recipe website, you would want to test the pushed code to ensure that it maintains the same functionality along with the added developments. Manually running them locally does not ensure that it will work on other devices and running them all after development will cause difficulties in figuring out bugs.

# Check Your Understanding Question 2
No, you would not want to use an end to end test to check if a function is returning the correct output. Since E2E testing is emulating user actions from start to finish, it is checking the execution of code as a whole rather than a singular component like a function. A more suitable form of testing would be a unit test to check if a function is returning the correct output.

# Check Your Understanding Question 3
No, unit testing is for small scale debugging. the messaging feature for a messaging app is too broad for unit testing since its the main feature of the entire application

# Check Your Understanding Question 4
Yes, Since the max message length is a small part of a larger moving feature like messaging, I would use a unit test to test the max message length since it is something that should be isolated and will not affect other unit tests.