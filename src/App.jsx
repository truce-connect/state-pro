import { useState } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState(
     {
      fullname: "John Doe",
      bio:"I am a full-stack developer",
      image:"https://th.bing.com/th?id=OIP.cDhRJSU3YESH2cX-Drsu5gHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      profession:"full stack developer"
    }
  )
  

    const [profileVisible, setProfileVisible] = useState(false);
   const viewProfile = () => {
        setProfileVisible(!profileVisible);
  }

   

  return (
    <>
    <div>
      {profileVisible ? (
    <div>
        <img src={profile.image} alt="" />
        <h1>{profile.fullname}</h1>
        <h3>{profile.profession}</h3>
        <p>{profile.bio}</p>
        <button onClick={viewProfile}>hide</button>
        </div>
      ) : (
        <button onClick={viewProfile}>view</button> 
      )}
      </div>
    </>
  )
}

export default App