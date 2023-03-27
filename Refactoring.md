# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The first test checks that the function returns 0 when called with no arguments. The second test checks that the function returns the provided partitionKey when called with an event that has a partitionKey property. The third test checks that the function returns the hash of the event when called with an event that does not have a partitionKey property. The fourth test checks that the function returns the hash of the JSON string of the provided candidate when it is not a string. The fifth test checks that the function returns the hash of the candidate when its length exceeds MAX_PARTITION_KEY_LENGTH.

I refactored the function to make it more readable by removing the unnecessary if statements and setting a default value for the candidate variable. I also changed the order of the if statements to make them more consistent.

I chose to use a default value for the candidate variable to simplify the code and make it more readable.