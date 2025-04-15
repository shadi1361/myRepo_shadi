import Container from "../../components/container/Container";

function Home() {
  return (
    <div className="bg-zinc-50 ">
      <Container>
        <h1 className="text-left font-bold mt-5 ">
          DigitalKamera 2025 für Foto & Video
        </h1>
        <div className="grid grid-cols-4 gap-1 mt-4">
          <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://images.pexels.com/photos/2095594/pexels-photo-2095594.jpeg"
            alt=""
          />
          <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://img.freepik.com/free-photo/high-angle-photo-camera-indoors-still-life_23-2150630620.jpg?t=st=1742896913~exp=1742900513~hmac=fe16eccbc03ce35ad9b6f44bb87403dc329478016cfaba09472a35e0eca7786a&w=740"
            alt=""
          />
          <div className="grid grid-rows-2 gap-1 h-full">
            <img
              className="rounded-sm h-full transform hover:scale-110 transition-all duration-300"
              src="https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="rounded-sm h-full transform hover:scale-110 transition-all duration-300"
              src="https://images.pexels.com/photos/821757/pexels-photo-821757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://images.pexels.com/photos/3693701/pexels-photo-3693701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
            <div className="grid grid-rows-2 gap-1 h-full">
            <img
              className="rounded-sm h-full transform hover:scale-110 transition-all duration-300"
              src="https://images.pexels.com/photos/1165006/pexels-photo-1165006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className="rounded-sm h-full transform hover:scale-110 transition-all duration-300"
              src="https://images.pexels.com/photos/2335052/pexels-photo-2335052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://images.pexels.com/photos/3135801/pexels-photo-3135801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://images.pexels.com/photos/3681405/pexels-photo-3681405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
            <img
            className="rounded-sm transform hover:scale-110 transition-all duration-300"
            src="https://images.unsplash.com/photo-1616707694571-f116451661c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />


        </div>
      </Container>
    </div>
  );
}

export default Home;
