import React from "react";
import HeroSection from "./Component/HeroSection";
import ArticalsBlog from "./Component/Articals";
import Episodes from "./Component/Episodes";
import ImgPodcastEp from "./Component/ImgPodcastEp";
import Version from "./Component/ImgVersion";
import Videos from "./Component/Videos";
import imgarticle from "./images/imgarticle.jpg";
import imgPanner from "./images/200.jpg";
import imgUser1 from "./images/p1.png";
import imgUser2 from "./images/p2.png";
import imgEpisodes1 from "./images/30.jpg";
import imgEpisodes2 from "./images/40.jpg";
import imgBoxSmall from "./images/100.jpg";
import imgBoxGrid1 from "./images/n1.jpg";
import imgBoxGrid2 from "./images/n2.jpg";
import imgBoxGrid3 from "./images/n3.jpg";
import imgVersion1 from "./images/v1.png";
import imgVersion2 from "./images/v2.png";
import imgVideo1 from "./images/vd1.jpg";
import imgVideo2 from "./images/vd2.jpg";
import { Link } from "react-router-dom";

function Home() {
    const imagesPod = [imgBoxGrid1, imgBoxGrid2, imgBoxGrid3, imgEpisodes1, imgEpisodes2, imgBoxSmall];
    const imgVersion = [imgVersion1, imgVersion2, imgVersion1, imgVersion2];
    const blogsData = [
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgarticle,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
        {
            img: imgEpisodes2,
            heroTitle: "الاتصال المؤسسي : وأثره على القطاع الغير ربحي",
            disHero: `الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال وثره على القطاع الغير ربحي 
                      الاتصــــــــــــال المؤسسي وأثره ا لقطاع الغير ربحي الاتصال المؤسسي`,
            userNameSection: "ايمان حسن",
            userImage1: imgUser1,
            userImage2: imgUser2,
            userNumberSection: "1",
            dateBlog: "29 أكتوبر 2024",
            catBlog: "نشرة حقق الإسبوعية"
        },
    ];

    return (
        <section id="home">
            <div className="container m-auto panner-card flex items-center rounded-lg text-right overflow-hidden mb-16 mt-6">
                <HeroSection
                    imgHero={imgPanner}
                    heroTitle="الاتصال المؤسسي : وأثره على القطاع الغير ربحي"
                    disHero={`
                    الاتصال المؤسسي وأثره على القطاع الغير ربحي 
                    الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره
                    على القطاع الغير ربحي الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال 
                    المؤسسي الاتصال المؤسسي وأثــــــــــره على القطاع الغير ربحي وأثره
                        `}
                    userNameSection="ايمان حسن"
                    userImage1={imgUser1}
                    userImage2={imgUser2}
                    userNumberSection="1"
                    dateBlog="29 أكتوبر 2024"
                    catBlog="نشرة حقق الإسبوعية"
                />
            </div>

            <div className="container m-auto bottom-box-panner flex">
                <div className="box-sm md:w-1/2 flex items-center text-right">
                    <ArticalsBlog
                        img={imgBoxSmall}
                        heroTitle="الاتصال المؤسسي : وأثره على القطاع الغير ربحي"
                        disHero={`
                            الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال المؤسسي 
                            وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره على 
                            القطاع الغير ربحي الاتصال المؤسسي
                            `}
                        userNameSection="ايمان حسن"
                        userImage1={imgUser1}
                        userImage2={imgUser2}
                        userNumberSection="1"
                        dateBlog="29 أكتوبر 2024"
                        catBlog="نشرة حقق الإسبوعية"
                    />
                </div>
                <div className="box-sm md:w-1/2 flex items-center text-right">
                    <ArticalsBlog
                        img={imgBoxSmall}
                        heroTitle="الاتصال المؤسسي : وأثره على القطاع الغير ربحي"
                        disHero={`
                            الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال المؤسسي 
                            وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره على 
                            القطاع الغير ربحي الاتصال المؤسسي
                            `}
                        userNameSection="ايمان حسن"
                        userImage1={imgUser1}
                        userImage2={imgUser2}
                        userNumberSection="1"
                        dateBlog="29 أكتوبر 2024"
                        catBlog="نشرة حقق الإسبوعية"
                    />
                </div>
            </div>

            <div className="new-episodes bg-bgColor my-14 py-10">
                <div className="container m-auto">
                    <div className="flex justify-between title-new-episodes mb-8">
                        <h2 className="text-xl font-bold">
                            <i className="fas fa-microphone-alt ml-2"></i>الحلقات الجديده
                        </h2>
                        <Link to="/" className="text-primaryColor border-b-2 border-primaryColor font-bold">
                            المــزيـد
                        </Link>
                    </div>
                    <div className="episodes flex items-center">
                        <div className="md:w-2/5">
                            <Episodes
                                img={imgEpisodes1}
                                epTitle="نحقيق الاهداف التسويقية"
                                epDes={`الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال 
                                    وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره 
                                    القطاع الغير ربحي الاتصال المؤسسي`}
                                date="29 أكتوبر 2024"
                                catEp="نشرة التسويق من حقق"
                            />
                            <Episodes
                                img={imgEpisodes2}
                                epTitle="رحلة مثالية لزيادة مبيعاتك"
                                epDes={`الاتصال المؤسسي وأثره على القطاع الغير ربحي الاتصال 
                                    وأثره على القطاع الغير ربحي الاتصــــــــــــال المؤسسي وأثره 
                                    القطاع الغير ربحي الاتصال المؤسسي`}
                                date="29 أكتوبر 2024"
                                catEp="نشرة التسويق من حقق"
                            />
                        </div>
                        <div className="md:w-3/5">
                            <div className="grid grid-cols-3 gap-6">
                                {imagesPod.map((image, index) => (
                                    <ImgPodcastEp key={index} img={image} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="version container m-auto border-b-2 border-black my-14">
                <div className="version-head flex items-center justify-between">
                    <h2 className="font-bold text-xl">
                        <i className="fas fa-book ml-2"></i> اصدارات حقق
                    </h2>
                    <Link to="/" className="link-version text-primaryColor border-b-2 border-primaryColor font-bold">
                        المــزيـد
                    </Link>
                </div>
                <div className="flex items-center justify-between my-8 gap-6">
                    {imgVersion.map((image, index) => (
                        <Version key={index} img={image} />
                    ))}
                </div>
            </div>

            <div className="video container m-auto border-b-2 border-black my-14">
                <div className="video-head flex items-center justify-between">
                    <h2 className="font-bold text-xl">
                        <i className="fa fa-video ml-2"></i> الفيديوهات
                    </h2>
                    <Link to="/" className="link-version text-primaryColor border-b-2 border-primaryColor font-bold">
                        المــزيـد
                    </Link>
                </div>
                <div className="flex items-center justify-between my-8 gap-6">
                    <Videos
                    img = {imgVideo2}
                    title ="دليلك للإحتـــــراف في التسويق بسهولــــة"
                    cat = "اربــــح من حقق"
                    date = "29 أكتوبر 2024"
                    />
                    <Videos
                    img = {imgVideo1}
                    title ="دليلك للإحتـــــراف في التسويق بسهولــــة"
                    cat = "اربــــح من حقق"
                    date = "29 أكتوبر 2024"
                    />
                    <Videos
                    img = {imgVideo2}
                    title ="دليلك للإحتـــــراف في التسويق بسهولــــة"
                    cat = "اربــــح من حقق"
                    date = "29 أكتوبر 2024"
                    />
                </div>
            </div>

            <div className="articles container m-auto my-14 pb-10">
                <div className="articles-head flex items-center justify-between">
                    <h2 className="font-bold text-xl">
                        <i class="fa-solid fa-newspaper"></i> المقالات الجديدة
                    </h2>
                    <Link to="/" className="link-version text-primaryColor border-b-2 border-primaryColor font-bold">
                        المــزيـد
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {blogsData.map((blog, index) => (
                        <div className="mt-4 w-full" key={index}>
                            <div className="box-sm flex items-center text-right">
                                <ArticalsBlog
                                    img={blog.img}
                                    heroTitle={blog.heroTitle}
                                    disHero={blog.disHero}
                                    userNameSection={blog.userNameSection}
                                    userImage1={blog.userImage1}
                                    userImage2={blog.userImage2}
                                    userNumberSection={blog.userNumberSection}
                                    dateBlog={blog.dateBlog}
                                    catBlog={blog.catBlog}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;
