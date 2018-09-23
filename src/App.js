import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer';
import * as firebase from 'firebase';
var config = {
            apiKey: "AIzaSyDoZMfP0jRiNB7kmjtWuVV36uLRbpgUs8Q",
            authDomain: "react-ae9a4.firebaseapp.com",
            databaseURL: "https://react-ae9a4.firebaseio.com",
            projectId: "react-ae9a4",
            storageBucket: "react-ae9a4.appspot.com",
            messagingSenderId: "244704025842"
        };
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
var imageList=[];
var toto= {id:0,
               desc:"test",
               url:"www.google.fr"};
imageList.push(toto);
let getData = firebase.firestore().collection("react");
getData.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        let insertObj = [{id:doc.data().id, desc:doc.data().desc, url:doc.data().url}];
        console.log(insertObj);
        imageList=imageList.concat(insertObj);
    });
    
})
.catch(function(error) {
    console.log("Error getting documents: ", error);
});
const imageList2 = [{id:1,
                    desc: "Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia, tandem id ut optimum factu elegit: et Vrsicinum primum ad se venire summo cum honore mandavit ea specie ut pro rerum tunc urgentium captu disponeretur concordi consilio, quibus virium incrementis Parthicarum gentium a arma minantium impetus frangerentur.",
                    url: "https://picsum.photos/205/201"},
                   {id:2,
                    desc: "Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte.",
                    url: "https://picsum.photos/205/209"},
                   {id:3,
                    desc: "Dumque ibi diu moratur commeatus opperiens, quorum translationem ex Aquitania verni imbres solito crebriores prohibebant auctique torrentes, Herculanus advenit protector domesticus, Hermogenis ex magistro equitum filius, apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti. quo verissime referente quae Gallus egerat, damnis super praeteritis maerens et futurorum timore suspensus angorem animi quam diu potuit emendabat.",
                    url: "https://picsum.photos/206/219"}];

console.log(imageList);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collection: firebase.firestore().collection("react"),
      query: []
    }
  }
  componentDidMount(){
    this.renderCard()
  }
  renderCard(){
    let foo = []
    this.state.collection.get()
      .then(querySnapshot => querySnapshot.forEach(doc => {
        foo.push(doc.data())
        this.setState({query: foo})
      }))
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Broken React</h1>
        </header>
        <br/>
        <MyContainer myProps={this.state.query}/>
      </div>
    );
  }
}

export default App;