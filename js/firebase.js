
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAENfP13ErwSB6QrNmOJI78uWsbA2QBpS0",
    authDomain: "itmwebdev.firebaseapp.com",
    databaseURL: "https://itmwebdev.firebaseio.com",
    projectId: "itmwebdev",
    storageBucket: "itmwebdev.appspot.com",
    messagingSenderId: "349697271644",
    appId: "1:349697271644:web:c22b585706dcc757d4c399",
    measurementId: "G-0KNM14RN3Y"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



var ref = firebase.database().ref();
const test = firebase.database().ref('user_bought').child('yoyo_one');
const test2 = firebase.database().ref('user_bought').child('yoyo_two');
const test3 = firebase.database().ref('user_bought').child('yoyo_three');
var count = 0;
var count2 = 0;
var count3 = 0;/*
const test = firebase.database().ref('user_bought').child('yoyo_one');
test.once('value', async snapshot => {
  //grabs the data from specific data
  const count = snapshot.val();
  await this.setState({
    countS: count
  });
});
*/

/*
test.update({
  yoyo_one: 2
})
.catch((err) => {
  if (err) {
    this.setState({ error: err.toString() });
    reject(err);
  }
});

*/

function proYo1() {
  count++;
  test.update({
    count: count
  })
  console.log("returning value from FIREBASE DATABASE: yoyo_one");
  test.on('value', async snapshot => {
    //grabs the data from specific data
    console.log(count);
  });
}


function proYo2() {
  count2++;
  test2.update({
    count: count2
  })
  console.log("returning value from FIREBASE DATABASE: yoyo_two");
  test2.on('value', async snapshot => {
    //grabs the data from specific data
    console.log(count2);
  });
}


function proYo3() {
  count3++;
  test3.update({
    count: count3
  })
  console.log("returning value from FIREBASE DATABASE: yoyo_three");
  test2.on('value', async snapshot => {
    //grabs the data from specific data
    console.log(count3);
  });

}
