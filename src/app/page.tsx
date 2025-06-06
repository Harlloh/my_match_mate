
import HomeFeatures from './index';


export default function Home() {


  return (
    //add a short video to the background of a player scoring a goal.
    <div className="container flex-col justify-center h-screen  items-center gap-16" >
      <div className="flex flex-col justify-center items-center mb-6">
        <h1>
          Welcome to MatchMate
        </h1>
        <p className="italic">Your Football, Your way.</p>
      </div>
      <HomeFeatures />
    </div>
  );
}
