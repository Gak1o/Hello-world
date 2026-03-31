Angular file and folder structure.
Important files, 
1. package.json
This includes:
    all the details of the app.
    Scripts, this are commands eg ng test
    dependancies, this are the packages our app needs so that it can run,(they are stored in node modules)

2. tsconfig.json
This configures the ts by providing crucial info eg. where the output  dir is, etc

3. tsconfig.app.json
Also used for type config, but it configures only the source folder only.

4. tsconfig.spec.json
configures ts for test cases.

5. Readme
Provides guidelines to other users eg. what your project is about and how to install and run it on your local machine.

6. package-lock.json
This records exact version of dependancies installed

7. angular.json
This is the brain of the project, It defines how the cli builds your app, where the entry points are and which assets to include.

