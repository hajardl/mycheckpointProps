import ProfileComponent from "./Profile/ProfileComponent";
import image from "./user.png"

function App() {
    const handleName = name => alert(name);
    const bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
  return (
    <div className="App">
        <ProfileComponent fullName="Hajar" bio={bio} profession="Developpeur" handleName={handleName}>
            <img style={{height:"148px"}} src={image}/>
        </ProfileComponent>
    </div>
  );
}

export default App;
