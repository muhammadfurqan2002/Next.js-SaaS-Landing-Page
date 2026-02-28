"use client";
import Button from "@/components/Button";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    const [leftDesignScope, animateLeftDesign] = useAnimate();
    const [rightDesignScope, animateRightDesign] = useAnimate();
    const [pointerLeftScope, animateLeftPointer] = useAnimate();
    const [pointerRightScope, animateRightPointer] = useAnimate();

    useEffect(()=>{
        animateLeftDesign([
            [leftDesignScope.current,{opacity:[0,1]},{duration:0.5}],
            [leftDesignScope.current,{y:0,x:0},{duration:0.5}]
        ]);
        animateLeftPointer([
            [pointerLeftScope.current,{opacity:[0,1]},{duration:0.5}],
            [pointerLeftScope.current,{y:0,x:-100},{duration:0.5}],
            [pointerLeftScope.current,{x:0,y:[0,16,0]},{duration:0.5,ease:"easeInOut"}],
        ])

        animateRightDesign([
            [rightDesignScope.current,{opacity:[0,1]},{duration:0.5,delay:1.5}],
            [rightDesignScope.current,{x:0,y:0},{duration:0.5}]
        ])
        animateRightPointer([
            [pointerRightScope.current,{opacity:[0,1]},{duration:0.5,delay:1.5}],
            [pointerRightScope.current,{x:175,y:0},{duration:0.5}],
            [pointerRightScope.current,{x:0,y:[0,20,0]},{duration:0.5,ease:"easeInOut"}]
        ])

    },[])

    return <section className="py-24 overflow-x-clip" style={{
        cursor:`url(${cursorYouImage.src}), auto`
    }}>
    
        <div className="container relative">
            <motion.div drag  initial={{opacity:0,y:100,x:-100}} ref={leftDesignScope} className="hidden lg:block absolute -left-32 top-16"><Image src={design1} draggable="false" alt="design1" /></motion.div>
            <motion.div initial={{opacity:0,y:100,x:-200}} ref={pointerLeftScope} className="hidden lg:block absolute top-96 left-56">
                <Pointer name="Andrea" color="blue" />
            </motion.div>

            <motion.div drag  initial={{opacity:0,x:100,y:100}} ref={rightDesignScope} className="hidden lg:block absolute -right-64 -top-16"><Image src={design2} draggable="false" alt="design1" /></motion.div>

            <motion.div initial={{opacity:0,x:200,y:100}} ref={pointerRightScope} className="hidden lg:block absolute -top-4 right-80">
                <Pointer name="Furqan" color="red" />
            </motion.div>

            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold"> ✨ $5.5M seed round raised</div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">Impactful design, created effortlessly</h1>
            <p className="text-center max-w-2xl mx-auto text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface to help you create beautiful designs faster than ever before.</p>
            <form className="flex border border-white/50 rounded-full p-2 mt-8 max-w-lg mx-auto min-w-0">
                <input type="email" placeholder="Enter your email" className=" bg-transparent px-4 flex-1 min-w-0" />
                <Button variant="primary" size="sm" className="whitespace-nowrap">Sign Up</Button>
            </form>
        </div>
    </section>;
}
