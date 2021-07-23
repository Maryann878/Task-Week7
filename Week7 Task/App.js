import './App.css';
import User from './User';

function App() {
  const user = [{
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      twitterLink: <a href = "https://twitter.com/Elonmusk">@Elonmusk</a>,
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      twitterLink: <a href = "https://twitter.com/Morgan45">@Morgan45</a>,
      avatar: 'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  ]

  return ( 
    <div className = "App">
    <User Object = {user}/>
    
    </div>
  );
}

export default App;