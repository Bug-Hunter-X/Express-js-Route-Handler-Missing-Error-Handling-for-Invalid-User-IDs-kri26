# Express.js Route Handler Missing Error Handling for Invalid User IDs

This repository demonstrates a common error in Express.js route handlers: the lack of error handling for invalid input.  The provided code attempts to access a user using a numerical ID passed in the request parameters. However, it fails to handle cases where the ID is not a valid number, potentially leading to crashes or unexpected behavior.  The solution demonstrates best practices for handling such scenarios.

## Bug

The `bug.js` file contains the erroneous code.  The `parseInt(userId)` call can throw an error if `userId` is not a valid integer representation. This missing error handling is the primary bug.

## Solution

The `bugSolution.js` file provides a corrected version.  It includes comprehensive error handling using a `try...catch` block to gracefully manage cases where the ID is invalid.  It returns appropriate HTTP status codes to inform the client about errors.

## How to Reproduce

1. Clone the repository.
2. Run `node bug.js` and send a request to `/users/abc` (or similar invalid ID).
3. Observe the error. 
4. Run `node bugSolution.js` and send the same request. 
5. Observe the improved error handling.