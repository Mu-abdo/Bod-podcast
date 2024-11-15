import React from "react";
import HeroBodcast from "./Component/HeroBodcast";
import imgPanner from "./images/b1.jpg";
import Episodes from "./Component/Episodes";
import imgEp1 from "./images/s1.jpg";
import imgEp2 from "./images/s2.jpg";
import imgEp3 from "./images/s3.jpg";

function Pod(){
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
                <div className="grid grid-cols-2 mt-6 p-10 container m-auto">
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
        </>
    )
}

export default Pod;