Run this node.js app like:

node app.js

Functionality: Returns the sum of two numbers. 

App runs at port 8000 on localhost

Mocha Tests
__________________________

There are mocha tests written and placed inside folder /mocha. However currently
tests are being run using nodeunit on the tests placed inside the /test folder. 
If the mocha tests are to be used, please place them inside the /test folder 
(without the nodeunit test, as nodeunit conflicts with mocha and vice-versa). 

Run mocha test like: 
1. Start the server -- node app.js
2. In another terminal, run 'mocha' in the project's root directory. 

______________________________________________________________________
Nodeunit Test
_______________________________________________________________________

Nodeunit test is placed inside the /test folder. To run the test, do: 

nodeunit test/test_name.js

in the project's root directory. 

Currently there are 2 tests, one which passes all cases and one that fails 
all cases. 
_________________________________________________________________________
config.json
_________________________________________________________________________

The file config.json has input necessary for running the tests inside the /test
folder. 
_________________________________________________________________________
