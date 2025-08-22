

'use client';
import { Card } from '@/shared/components/card/card';
import style from './reviews-view.module.scss';
import { Icon } from '@/shared/components/icon/icon';
import { Button } from '@/shared/components/button/button';
import { ReviewItem } from './review-item/review-item';
import { RefObject, useEffect, useRef } from 'react';
import gsap from 'gsap';
export const ReviewsView = ({spacerRef}: {spacerRef: RefObject<HTMLElement | null>}) => {

    const reviews = [
        {
            photo: '1',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '2',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '3',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '4',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '1',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '2',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '3',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        },
        {
            photo: '4',
            name: 'John Doe',
            review: 'Lorem ipsum dolor sit amet consectetur. Duis sed eget at sed tincidunt rhoncus dolor justo aliquam.'
        }
    ]

    const reviewsRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        animate();
    },[]);

    function animate(){
        
        gsap.set(reviewsRefs.current, { opacity: 0, translateY: 200 });

        gsap.fromTo(reviewsRefs.current, {
            translateY: 200,
            opacity: 0
        }, {
            translateY: 0,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: spacerRef.current,
                scroller: document.querySelector(`#smooth-wrapper`),
                start: '50% top',
                end: '+=120%',
                scrub: true,
            }
        });
    }

    return <>
        <div className={`scroll-custom scroll-yellow review-view ${style['reviews-view']}`}>
            {reviews.map((item, index) => (
                <ReviewItem key={index} {...item} ref={el => {reviewsRefs.current[index] = el}} />
            ))}
        </div>
    </>

}