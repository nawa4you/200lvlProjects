extract srcfile.zip, remove the first layer (srcfile)


PS: the components folder was created by expo





Prerequisites
Before you begin, ensure you have the following installed on your development machine:

Node.js and npm: (v16 or later recommended).

Expo Go App: Install the Expo Go application on your physical iOS or Android device to run the project. It is available on the App Store and Google Play Store.


Setup and Installation
Follow these steps to get the project running on your local machine.

Get the Project Files:
Download the project folder to your computer.

Navigate to the Project Directory:
Open a terminal and change to the project's root folder.

cd /(path to project)/marias_app_new

Install Dependencies:
Install all the required Node.js packages using npm. This will create a node_modules folder.

npm install

Running the Application
To run the app, you will start the Expo development server and scan a QR code with your phone.

Start the Development Server:
Run the following command in your terminal.

npx expo start

Connect Your Device:
Once the server is running, a new tab will open in your web browser showing the Metro Bundler interface, which includes a QR code.

Open the Expo Go app on your mobile phone.

Scan the QR code displayed in the browser or terminal.

View the App:
The application will now load and run on your device. You can navigate between the "Profile" and "Order" tabs and interact with the UI. Any changes you make to the code will automatically reload in the app.

Project Structure
The project follows the standard Expo Router file-based routing structure.

app/(tabs)/: This directory contains the main screens for the application.

_layout.tsx: Configures the main tab navigator, including icons and header styles.

customer-profile.tsx: The UI code for the Customer Profile screen.

order-transaction.tsx: The UI code for the Order Transaction screen.

assets/: Contains static assets like the logo.png file.

models/: Contains the TypeScript type definitions (Customer.ts) for data structures.

package.json: Lists all project dependencies and scripts.