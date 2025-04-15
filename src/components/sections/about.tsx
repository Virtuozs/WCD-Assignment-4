
export default function About() {
    return (
        <section className="bg-[#FFFFFF] my-[160px] mx-[80px]" id="about">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
                    <h2 className="text-3xl font-semibold text-black" >About</h2>
                </div>

                <div className="md:w-2/3">
                    <p className="text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </p>
                </div>
            </div>
        </section>
    )
}