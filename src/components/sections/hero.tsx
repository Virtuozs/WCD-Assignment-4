import profileImg from "../../assets/person.svg";

export default function Hero() {
  return (
    <section className="bg-[#C7D0D9] h-screen w-screen overflow-hidden">
      <nav className="flex justify-between items-center px-18 py-6 text-xl">
        <h1 className="font-semibold text-black">@Ayush Barnwal</h1>
        <ul className="flex gap-6 text-xl text-black">
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#work" className="hover:text-gray-600">Work</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </nav>

      <div className="relative h-full w-full text-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-[8vw] font-semibold text-white opacity-70 z-10 select-none leading-none whitespace-nowrap animate-move-right-to-left">
                Webflow Developer - UI/UX Designer - Web Designer
                </h2>
            </div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-0">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="h-[calc(100vh-40px)] max-h-screen w-auto object-contain"
                />
            </div>

            <div className="absolute right-2 top-1/4 z-20">
                <button className="group relative bg-black text-white px-6 py-3 rounded-full text-3xl flex items-center gap-4 transition-all duration-500 transform translate-x-[75%] hover:translate-x-7">
                👋 <span className="whitespace-nowrap">Hi I’m Ayush</span>
                </button>
            </div>
        </div>
    </section>
  );
}