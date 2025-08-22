// 'use client';

// import { ViewSection } from '@/shared/components/view-sections/view-sections';
// import style from './section-3.module.scss';

// import { Button } from '@/shared/components/button/button';
// import { Icon } from '@/shared/components/icon/icon';
// import { useEffect, useRef, useState } from 'react';
// import { OnScrollInFn } from '@/shared/components/animated-container/libs/OnScrollFn';
// import { InFromRight } from '@/shared/components/animated-container/libs/Animations';
// import { CustomersReviews } from './customers-reviews/customers-reviews';


export const Section3 = () => { return null}

//     const slides = Array.from({ length: 7 }, (_, i) => {
//         const [inViewSignal, setInViewSignal] = useState(false);
//         return { i, ref: useRef<HTMLDivElement | null>(null), inView: inViewSignal, setInView: setInViewSignal };
//     });
//     const slide3Elements = Array.from({ length: 1 }, (_, i) => {
//         const [inViewSignal, setInViewSignal] = useState(false);
//         return { i, ref: useRef<HTMLDivElement | null>(null), inView: inViewSignal, setInView: setInViewSignal };
//     });

//     const [activeSlide, setActiveSlide] = useState<number>(0);

//     useEffect(() => {

//     }, [])



//     const delayStep = 300;


//     return (
//         <ViewSection className={`${style['section-3']} section-3`} >
//             <img className={`video-bg video-a ${activeSlide <= 2 ? 'active' : ''}`} src="/videos/home/2a.png" alt="" />
//             <img className={`video-bg video-b ${activeSlide === 3 ? 'active' : ''}`} src="/videos/home/2b.png" alt="" />
//             <img className={`video-bg video-c ${activeSlide === 4 ? 'active' : ''}`} src="/videos/home/2c.png" alt="" />
//             <img className={`video-bg video-d ${activeSlide === 5 ? 'active' : ''}`} src="/videos/home/2d.png" alt="" />
//             <div className={`section3-wrapper`}>
//                 <div className="slide-1 slide" ref={slides[0].ref}>
//                     <div className='title'>
//                         <h1>Every Fiber Designed for Perfection.</h1>
//                     </div>
//                     <div className='subtitle'>
//                         <span className="number-in-circle">
//                             1
//                         </span>
//                         <p>Hyper-realistic textures that mimic nature without compromise.</p>
//                     </div>
//                     <div >
//                         <Button border>
//                             <span>Learn more about us</span>
//                             <Button color={{ color: 'white', alpha: '100' }} circle>
//                                 <Icon color={{ color: 'orange-2', alpha: '100' }} icon='arrow-right-with-tail'></Icon>
//                             </Button>
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="slide-2 slide" ref={slides[1].ref}>
//                     <div className='title' >
//                         <h1>The most realistic synthetic roofing, blending seamlessly with nature.</h1>
//                     </div>
//                 </div>
//                 <div className="slide-3 slide" ref={slides[2].ref}>
//                     <div className='title' >
//                         <h1>Engineered to withstand nature's harshest conditions with ease.</h1>
//                     </div>
//                     <div className='subtitle'>
//                         <div className="number-in-circle-wrapper">
//                             <div className="number-in-circle-item">
//                                 <span className="number-in-circle">
//                                     2
//                                 </span>
//                                 <p>Wind and fire resistant</p>
//                             </div>
//                             <div className="number-in-circle-item" ref={slide3Elements[0].ref} inSignal={slide3Elements[0].inView} animationIn={InFromRight} delay={200}>
//                                 <span className="number-in-circle" >
//                                     3
//                                 </span>
//                                 <p>Heavy wind resistant</p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="slide-4 slide" ref={slides[3].ref}>
//                     <div className='title'>
//                         <h1>Sustainably sourced, helping reduce environmental impact.</h1>
//                     </div>
//                     <div className='subtitle'>
//                         <p>Our thatched roofing are crafted with sustainably sourced materials, minimizing environmental impact. By choosing our eco-friendly designs, you support responsible construction and the preservation of natural ecosystems.</p>
//                     </div>
//                     <div className='video'>
//                         <Button color={{ color: 'green', alpha: '60' }} >
//                             <span>Get a free quote</span>
//                             <Button circle color={{ color: 'white', alpha: '100' }}>
//                                 <Icon color={{ color: 'green-2', alpha: '100' }} icon='arrow-right-with-tail'></Icon>
//                             </Button>
//                         </Button>
//                     </div>
//                     <div className="spacer"></div>
//                     <div >
//                         <CustomersReviews />
//                     </div>

//                 </div>
//                 <div className="slide-5 slide" ref={slides[4].ref}>
//                     <div className='title'>
//                         <h1>Synthetic palm thatch roofing built to last</h1>
//                     </div>
//                     <div className='subtitle'>
//                         <p>Features durability, fire resistance, and UV stability.</p>
//                     </div>
//                     <div className=''>
//                         <Button color={{ color: 'green', alpha: '60' }} >
//                             <span>Explore</span>
//                             <Button circle color={{ color: 'white', alpha: '100' }}>
//                                 <Icon color={{ color: 'green-2', alpha: '100' }} icon='arrow-right-with-tail'></Icon>
//                             </Button>
//                         </Button>
//                     </div>
//                 </div>
//                 <div className="slide-6 slide" ref={slides[5].ref}>
//                     <div className='title'>
//                         <h1>Artificial bamboo with real aesthetics and superior durability</h1>
//                     </div>
//                     <div className='subtitle'>
//                         <p>Highlights its pest-resistant, customizable, and weather-proof properties.</p>
//                     </div>
//                     <div className=''>
//                         <Button color={{ color: 'green', alpha: '60' }} >
//                             <span>Explore</span>
//                             <Button circle color={{ color: 'white', alpha: '100' }}>
//                                 <Icon color={{ color: 'green-2', alpha: '100' }} icon='arrow-right-with-tail'></Icon>
//                             </Button>
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </ViewSection>
//     );
// };
