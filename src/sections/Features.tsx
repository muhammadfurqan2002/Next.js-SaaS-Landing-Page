import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import avatar5 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";

import Key from "@/components/Key";
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">   <Tag>Features</Tag></div>

            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1 group">
                    <div className="aspect-video flex  items-center justify-center">
                        <Avatar className="z-40">
                            <Image className="rounded-full" src={avatar1} alt="Ashwin Santiago" />
                        </Avatar>
                        <Avatar className="z-30 -ml-6 border-indigo-500">
                            <Image className="rounded-full" src={avatar2} alt="Lula Meyers" />
                        </Avatar>
                        <Avatar className="z-20 -ml-6 border-amber-500">
                            <Image className="rounded-full" src={avatar3} alt="Florence Shaw" />
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent group-hover:border-green-200">
                            <div className="relative size-full bg-neutral-800 rounded-full flex items-center justify-center ">
                                <Image className="rounded-full absolute size-full opacity-0 group-hover:opacity-100 transition duration-500" src={avatar4} alt="Owen Garcia" />
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <span key={index} className="size-1.5 bg-white rounded-full"></span>
                                ))}
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1 group">
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center">We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative"><span className="inline-block"> incredible</span>
                            <video src={'/gif-incredible.mp4'} autoPlay loop muted playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500" />
                        </span>

                            growth this year</p>
                    </div>
                </FeatureCard>
                <FeatureCard title="Keyboard Quick Actions" description="Navigate and edit faster with powerful keyboard shortcuts" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group">
                    <div className="aspect-video flex items-center justify-center gap-4">

                        <Key className="w-28 group-hover:outline outline-2 outline-offset-4 outline-lime-400 group-hover:translate-y-1 transition-all duration-500">
                            shift
                        </Key>
                        <Key className="group-hover:outline outline-2 outline-offset-4 outline-lime-400 group-hover:translate-y-1  transition-all duration-500 delay-150">
                            alt
                        </Key>
                        <Key className="group-hover:outline outline-2 outline-offset-4 outline-lime-400 group-hover:translate-y-1  transition-all duration-500 delay-300">
                            C
                        </Key>
                    </div>
                </FeatureCard>

            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center group">
                {features.map((feature, index) => (
                    <div key={index} className="bg-neutral-900 border border-white/10 inline-flex px-3 py1.5 rounded-2xl gap-3 items-center hover:scale-105 transition-all duration-500">
                        <span className=" bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition-all duration-500">
                            &#10038;
                        </span>
                        <span className="font-medium">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
