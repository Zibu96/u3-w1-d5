import ProfileMain from "./ProfileMain";
import ProfileNav from "./ProfileNav";

let Profile = function () {
  return (
    <>
      <header>
        <ProfileNav />
      </header>
      <ProfileMain />
    </>
  );
};
export default Profile;
