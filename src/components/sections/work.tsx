import ImageCarousel from "../carousel/carousel" 
import ServiceLinkCard from "../cards/recent-work-card";

import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"
import project3 from "../../assets/images/project3.png"
import project4 from "../../assets/images/project4.png"
import project5 from "../../assets/images/project5.png"
import project6 from "../../assets/images/project6.png"
import project7 from "../../assets/images/project7.png"
import project8 from "../../assets/images/project8.png"

export default function About() {
    const firstRowProjects = [
        {
            image:project1,
            link:"https://placeholder.com"
        },
        {
            image:project2,
            link:"https://placeholder.com"
        },
        {
            image:project3,
            link:"https://placeholder.com"
        },
        {
            image:project4,
            link:"https://placeholder.com"
        },
    ];
    
    const secondRowProjects = [
        {
            image:project5,
            link:"https://placeholder.com"
        },
        {
            image:project6,
            link:"https://placeholder.com"
        },
        {
            image:project7,
            link:"https://placeholder.com"
        },
        {
            image:project8,
            link:"https://placeholder.com"
        },
    ];

    const workItems = [
        {
            title: "Decodable.co",
            subtitle: "Brand Design – Webflow Development – Web Design",
            href: "https://decodable.co",
        },
        {
            title: "Gofirefly.io",
            subtitle: "Brand Design – Webflow Development – Web Design",
            href: "https://gofirefly.io",
        },
        {
            title: "Blinkops.com",
            subtitle: "Brand Design – Webflow Development – Web Design",
            href: "https://blinkops.com",
        },
        {
            title: "Withkanvas.com",
            subtitle: "Brand Design – Webflow Development – Web Design",
            href: "https://withkanvas.com",
        },
    ];
    return (
        <section className="bg-[#FFFFFF] h-full w-full" id="work">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
                    <h2 className="text-3xl font-semibold text-black" >Recent Work</h2>
                </div>

                <div className="md:w-2/3">
                    {workItems.map((item, index) => (
                        <div key={index}>
                            <ServiceLinkCard
                                title={item.title}
                                subtitle={item.subtitle}
                                href={item.href}
                            />
                            {index < workItems.length - 1 && (
                                <div className="border-t border-gray-300 my-8" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* TODO : Fix animation so its not snappy when reach end of animation */}
            <div className="container flex flex-col items-center min-w-full mt-40">
                <ImageCarousel
                    items={firstRowProjects} 
                    reverse={false} 
                    speed={20}       
                />
                <ImageCarousel
                    items={secondRowProjects} 
                    reverse={true}
                    speed={20}
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between mt-40">
                <div className="mb-8 md:mb-0 md:w-1/3 flex items-start">
                    <h2 className="text-3xl font-semibold text-black" >Testimonials</h2>
                </div>

                
            </div>
        </section>
    )
}