import Header from '../Header/Header';
import Profile from '../Profile/Profile';

function ProtectedPageProfile ({ userName, onSignOut, onUpdateUser }) {
   return (
    <>
      <Header />
      <Profile userName={userName} onSignOut={onSignOut} onUpdateUser={onUpdateUser}/>
    </>
   )
}

export default ProtectedPageProfile;