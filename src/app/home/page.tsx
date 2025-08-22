'use client';
import { Footer } from "@/shared/components/footer/footer";
import { Section1 } from "./sections/section-1/section-1";
import { Section3 } from "./sections/section-3/section-3";
import { Section4 } from "./sections/section-4/section-4";
import { Section5 } from "./sections/section-5/section-5";
import Section6 from "./sections/section-6/section-6";
import { Section2 } from "./sections/sections-2/section-2";
import { Fragment, RefObject, useEffect, useRef } from "react";
import './page.scss';

import gsap, { snap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

import { ScrollSmoother } from "gsap/all";
import { Observer } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollSmoother);

export const dynamic = "force-static";

export default function HomeView() {
    
    const section1ref = useRef<HTMLDivElement | null>(null);
    const section2ref = useRef<HTMLDivElement | null>(null);
    
    
    useEffect(() => {
        document.querySelector(`html`)!.scrollTop = 0;        


        ScrollSmoother.create({
            smooth: .8,
            speed: 1,
            normalizeScroll: {
                allowNestedScroll: true
            } ,
            
            smoothTouch: 1,
            
        })

        return;
        const sections = [
            section1ref.current, section2ref.current
        ].filter(Boolean) as HTMLDivElement[];

        let currentIndex = 0;
        let animating = false;

        function goToSection(index: number) {
            if(animating || index < 0 || index >= sections.length) return;
        
            const height = sections[index].offsetTop;
            animating = true;
            gsap.to(window, {
                scrollTo: height,
                duration: 0.9,
                ease: "Power2.Out",
                onComplete: () => {animating = false;}
            })

            currentIndex = index;
        }


        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isHeroReady = () => document.querySelector('.hero-ready') !== null;

        Observer.create({
            type: 'wheel, touch, pointer',
            wheelSpeed: 1,
            tolerance: 5,
            onDrag: (self) => {
                if(!isTouchDevice || !isHeroReady()) return;
                if(self.event) self.event.preventDefault();
                if(self.deltaY > 0)
                    goToSection(currentIndex -1);
                else if(self.deltaY < 0 )
                    goToSection(currentIndex + 1);
            },
            onDown: (self) => {
                if(isTouchDevice || !isHeroReady()) return;
                self.event.preventDefault();
                goToSection(currentIndex + 1);
            },
            onUp: (self) => {
                if(isTouchDevice || !isHeroReady()) return;                

                self.event.preventDefault();
                goToSection(currentIndex - 1);
            },
        })


        
  
    },[])


    return (<>  
                <Section1 nextSection={section2ref} ref={section1ref} />
                <Section2 ref={section2ref} />
                <Section4  />
                <Section5 />
                <Section6 />
                <Footer  image="/images/footer/home.png"/> 

            </>

        )

}