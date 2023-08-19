## Trendy Mobile App
A social network application for trending topics and activities
### Configuration and Installation
Follow the following steps to run Trendy mobile app on your phone:

First you need to have expo app installed on your phone and then have an expo account created 

Once you have expo installed, clone this repository.


Create a directory on your machine and do a git clone of the command you copied from github repo to create your local repository

`git clone <url to the repository ie the copied url above>`
Once you have the local repository on your machine, go to the directory and run yarn command to install all the dependencies

// once in the mobile app directory run the yarn command
`yarn`
NOTE:  If you encounter an error ‘yarn is not a command’, then you will have to install it by running the command below to install it globally

`npm install --global yarn`

Once all the dependencies have been successfully installed, create an an environment variable file (.env) file in the root directory and copy the environment variables for your Firebase into the file 
## NOTE - You need to have a firebase project setup in your firebase console

```javascript
API_KEY=<your API key>
AUTH_DOMAIN=<your auth domain>
PROJECT_ID=<your project id>
STORAGE_BUCKET=<your storage bucket>
MESSAGING_SENDER_ID=<your message sender id>
APP_ID=<your App ID>
GOOGLE_CLIENT_ID=<your google client id>
```
The next step is to start the application development server. Run either of the following commands in the application directory to start the application. The expo CLI will generate a QR code


`yarn start`
//OR 
`yarn expo start`
Scan the QR code displayed on the terminal after starting the application. Us the QR code scanner that comes with the expo app for android while for IOS,  use the device's camera to scan the QR code. Make sure both devices are connected on the same network. The terminal will show some useful and alternative commands that you can use to run the application.  
NOTE: Some of the commands will require some environment setups, eg, to run the android app using the command provided, you will need android studio installed so that it can run on the emulator. Using expo is the easiest way to have it running. 

## Sample Screenshots
### Authentication
![Screenshot_20230819_134540_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/3e7be87b-a6f6-4332-ab3a-662b9b9ac252)
![Screenshot_20230819_134424_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/309d6aea-be06-4ff7-87d1-0c81b28fecab)
### Home
![Screenshot_20230819_133640_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/99e768ed-e8f6-4c05-ab72-7d89a0f8e4af)
### Topics
![Screenshot_20230819_133724_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/6343435e-9c01-44ad-a68e-f0316b5650e1)
### Profile
![Screenshot_20230819_134403_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/7bbc617f-06e5-469a-a095-ab02d05ea3f7)
### Notifications
![Screenshot_20230819_134335_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/0dd48e32-cfbd-4bd6-84c7-0d6641079c0b)
![Screenshot_20230819_134351_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/0ddf64c9-79c7-4e2f-b66c-77e6ce1b2c69)
### Comments And Replies
![Screenshot_20230819_133816_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/b97be3d4-6617-4ea9-8d67-04dfdeef344a)
![Screenshot_20230819_133749_Expo Go](https://github.com/chibukasia/trendy-app/assets/39667302/0964166f-686c-41fe-8cf5-17e281f12a74)
