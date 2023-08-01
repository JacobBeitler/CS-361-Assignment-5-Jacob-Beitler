To request data from the microservice, first, you much run the microservice, then use ZeroMQ to make a request starting with 1, 2, or 3. This will decide which algorithm to use.
Example code:
import zmq 
context = zmp.Context()

socket = context.socket(zmq.REQ)
socket.connect("tcp://localhost:5555")

socket.send_string("1testpass")

To receive data from the microservice, you would use socket.recv() to receive the request, and then to make it look nice, you would use .decode()
Example:
message = socket.recv()
message = message.decode()

So to sum it all up, we would send a string, for example, "1testpass," and we would receive "uftuqbtt" from the microservice.

![Louis's Microservice UML](https://github.com/JacobBeitler/CS-361-Assignment-5-Jacob-Beitler/assets/114364528/0eac8e4b-c3ce-47ea-a7e2-dfe3e6d4513c)
