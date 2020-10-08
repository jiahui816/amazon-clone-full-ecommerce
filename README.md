This project is created using 
  1. React
  2. Material-UI
  3. Firebase
  4. Firebase Cloud Function (Node.js)
  5. Stripe Payment API

There are few functionality that are built in this project that you could try it out.

1. Sign in/Sign Out
2. Register using your email address (Log In Page)
3. Add item to basket
4. Click the basket icon, it will redirect you to the checkout page
5. On the checkout page you can remove the item from basket
6. Click the checkout , will redirect you to the payment page.
7. it will automatically calculate the total, and for the card number,date,CVC , type 42 all the way (Stripe Testing) 
If the payment is sucessfull, it will add the record to the database, and by clicking the return and order, you can see your purchase history.


To use this file, you have to create a firebase account, and create your own config file for security reason. 
replace the config code on firebase.js 

1. Download or Clone the code.
2. npm install 
3. npm start.

