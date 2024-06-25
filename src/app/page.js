import Login from "@/components/Login";


export default function Home() {
  return (
  <div className="flex items-center flex-col justify-center m-4">
    <h1 className="text-3xl my-3">Hey, Time to sign In</h1>
    <Login/>
  </div>
  );
}
