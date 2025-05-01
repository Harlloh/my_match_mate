
import HomeFeatures from ".";


export default function Home() {


  return (
    <div className="container flex-col justify-start mt-9 items-center gap-16">
      <div>
        <h1>
          Welcome MatchMate
        </h1>
        <p className="italic">Your Football, Your way.</p>
      </div>
      <HomeFeatures />
    </div>
  );
}
