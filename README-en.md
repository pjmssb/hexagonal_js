# YAPAE - Yet another Ports & Adapters (a.k.a. Hexagonal Architecture) example

I've talked now and then to several development teams about the Ports & Adapters pattern and the hexagonal architecture. The usual hexagon showing where the models and use cases are located and the ports showing how beautifully connect now to a PostgreSQL database and then it is migrated almost effortlessly to a No-SQL database says nothing to them. 

I feel I've failed to convey the advantage of this architecture to the more junior team members. The seniors can remember many cases where this architecture could save them hours of tedious labor to update a dependency or migrate to a different SMS or email service provider or change the repository technology from SQL to No-SQL.

As a result, after 45 minutes of hearing me, the people that already knew about hexagonal architecture got nothing and the people that didn't know about hexagonal architecture got confused. They have a new tool that forces them to code more (a port and an adapter) for something they can usually resolve in 1 or 2 lines of code. 

A no-win - no-win situation... :-S
## Now what?
OK, the idea is to create a new example with some additional steps as POC of some of the advantages of using the hexagonal architecture. As an example, the usual TODO list application is implemented as a serverless lambda with one primary port to create, update, get, or delete tasks from the list.

In addition, the documentation will be provided in English and Spanish. I feel there is very little information in Spanish. I know, I know, the universal language of the trade is English, but to add the complexity of translation while learning concepts that at first sight are alien and complex is not the best pedagogic approach. As I am living in Portugal, I expect to learn enough Portuguese to also translate this document (with AI help of course) to this language, which will be highly pedagogic for me :-D.

##The TODO list application
The use case is really simple. The user is able to manage a list of tasks through the usual CRUD operations. Will be developed a simplistic model for the task list as the interesting part of this sample are the ports and the adapters

The ports and adapters structure will be:

Primary port: This is the command port managing the requests from the user to create, delete, update, and get tasks.
CLI primary adapter: Will be used to execute the program for development and testing. Yes, I know Serverless Application Model exists, but I believe this way the code is better integrated in the Software Development process for the team.
Lambda primary adapter: This is the entry point when the code is invoked as a lambda function. It is noticeable 
Persistence port: This port implements the methods to execute the CRUDs actions in the repository.
Mock persistence adapter: Too simplistic for the real case, but allows to develop and test without a database installed. In real life, I would never move to production code that hasn’t been tested with real infrastructure. 
DynamoDb persistence adapter: The implementation to DynamoDB.
Loggin port: We need a log to store all the actions
Text file logging adapter: Stores all log entries in a text file in the local drive.
S3 logging adapter: Stores all log entries in a text file in an S3 bucket.

