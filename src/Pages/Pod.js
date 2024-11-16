import React from "react";
import HeroBodcast from "./Component/HeroBodcast";
import imgPanner from "./images/b1.jpg";
import Episodes from "./Component/Episodes";
import imgEp1 from "./images/s1.jpg";
import imgEp2 from "./images/s2.jpg";
import imgEp3 from "./images/s3.jpg";
import { Link } from "react-router-dom";
import imgEpisodes1 from "./images/30.jpg";
import imgEpisodes2 from "./images/40.jpg";
import imgBoxGrid1 from "./images/n1.jpg";
import imgBoxGrid2 from "./images/n2.jpg";
import imgBoxGrid3 from "./images/n3.jpg";
import ImgPodcastEp from "./Component/ImgPodcastEp";
import imgarticle from "./images/imgarticle.jpg";



function Pod(){
    const imagesPod = [imgBoxGrid1, imgBoxGrid2, imgBoxGrid3, imgEpisodes1, imgEpisodes2];
    const blogsData = [
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
    ];

    return(
        <>
            <div className="container m-auto my-4">
                <h2 className="w-full text-right font-bold text-xl"><i className="fas fa-microphone-alt ml-2"></i> البودكاست</h2>
                <div className="panner-bodcast flex items-center text-right overflow-hidden mt-4">
                    <HeroBodcast
                        imgHero={imgPanner}
                        heroTitle="الاتصال المؤسسي : وأثره على القطاع الغير ربحي"
                        disHero={`
                        الاتصال المؤسسي وأثره على القطاع الغير ربحي 
                        الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره
                        على القطاع الغير ربحي الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال 
                        المؤسسي الاتصال المؤسسي وأثــــــــــره على القطاع الغير ربحي وأثره
                            `}
                        dateBlog="29 أكتوبر 2024"
                        catBlog="نشرة حقق الإسبوعية"
                    />
                </div>
            </div>
            <div className="bg-bgColor">
                <div className="grid grid-cols-2 mt-6 py-10 container m-auto">
                    <Episodes
                    width='1/2'
                    img={imgEp1}
                    epTitle="في لحظة خسرت كل شئ"
                    epDes="الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع
                    الغير ربحي الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي "
                    catEp="بودكاست بزنس من حقق"
                    date="29 أكتوبر 2024 "
                    />
                    <Episodes
                    width='1/2'
                    img={imgEp2}
                    epTitle="في لحظة خسرت كل شئ"
                    epDes="الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع
                    الغير ربحي الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي "
                    catEp="بودكاست بزنس من حقق"
                    date="29 أكتوبر 2024 "
                    />
                    <Episodes
                    width='1/2'
                    img={imgEp3}
                    epTitle="في لحظة خسرت كل شئ"
                    epDes="الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع
                    الغير ربحي الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي "
                    catEp="بودكاست بزنس من حقق"
                    date="29 أكتوبر 2024 "
                    />
                    <Episodes
                    width='1/2'
                    img={imgEp1}
                    epTitle="في لحظة خسرت كل شئ"
                    epDes="الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع
                    الغير ربحي الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي "
                    catEp="بودكاست بزنس من حقق"
                    date="29 أكتوبر 2024 "
                    />
                </div>
            </div>

            <div className="container m-auto border-b-2 py-10 border-black">
                <div className="flex justify-between title-new-episodes mb-8">
                    <h2 className="text-xl font-bold">
                        <i className="fas fa-star"></i> برامج متميزة
                    </h2>
                    <Link to="/" className="text-primaryColor border-b-2 border-primaryColor font-bold">
                        المــزيـد
                    </Link>
                </div>
                <div className="grid grid-cols-5 gap-6">
                    {imagesPod.map((image, index) => (
                        <ImgPodcastEp key={index} img={image} />
                    ))}
                </div>
            </div>
            
            <div className="container m-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogsData.map((blog, index) => (
                    <div className="mt-4 w-full" key={index}>
                        <div className="box-sm flex items-center text-right">
                            <Episodes
                                img={blog.img}
                                epTitle={blog.heroTitle}
                                epDes={blog.disHero}
                                date={blog.dateBlog}
                                catEp={blog.catBlog}
                            />
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default Pod;