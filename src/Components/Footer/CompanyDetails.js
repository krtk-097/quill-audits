import React from "react";
import "./companyDetails.css";
import logo from "../../Assets/Icon.svg";
import mailBox from "../../Assets/Email.svg";
import telegram from "../../Assets/Telegram.svg";
import location from "../../Assets/location.svg";
import { audits, tools, services, links } from "../../data";
import securityImage from "../../Assets/security.svg";
import governmentImage from "../../Assets/Government.svg"
import linkedinImage from "../../Assets/linkedin.svg"
import twitterImage from "../../Assets/X.svg";
import discordImage from "../../Assets/Discord.svg";
import mediumImage from "../../Assets/Discord.svg";
import reditImage from "../../Assets/redit.svg";
import youtubeImage from "../../Assets/Youtube.svg";

const CompanyDetails = () => {
    return (
        <div className="px-5 lg:px-24 py-10">

            <div className=" relative">
                <div className="flex items-center justify-center md:justify-start gap-3">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="text-white font-jost">
                        <p className="font-light text-3xl tracking-wider">QuillAudits</p>
                        <p className="text-xs ps-4 font-extralight">
                            Making Web3 a safer place
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-5 text-white mt-8 md:hidden">
                    <button className="w-32 px-1 py-2 text-xs text-center bg-blue-500 rounded-md">
                        WAGSI Grants
                    </button>

                    <button className="w-32 px-1 py-2 text-xs text-center bg-blue-500 rounded-md">
                        Ambassador Program
                    </button>

                    <button className="w-32 px-1 py-2 text-xs text-center bg-blue-500 rounded-md">
                        Refer-Earn-Secure
                    </button>

                    <button className="w-32 px-1 py-2 text-xs text-center bg-blue-500 rounded-md">
                        Partnership Program
                    </button>
                </div>

                <div className="flex justify-around md:justify-between flex-wrap-reverse md:flex-wrap  gap-6  text-white font-jost mt-10">

                    <div className="ms-2 md:ms-0">
                        <ul className="space-y-5">
                            <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md ">
                                More About Quill
                            </li>
                            <li>
                                <ul className="space-y-3 text-xs font-500">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">BlockChains We Audit</a>
                                    </li>
                                </ul>
                            </li>
                            <div className="space-y-2">
                                <li className="font-500">Contact Us:</li>
                                <ul className="space-y-2">
                                    <li className="flex gap-2">
                                        <img src={mailBox} alt="Telegram" />{" "}
                                        <span className="underline italic text-[#F1F1F1] font-light">
                                            audits@quillhash.com
                                        </span>
                                    </li>

                                    <li className="flex gap-2">
                                        <img src={telegram} alt="Telegram" />{" "}
                                        <span className="underline italic text-[#F1F1F1] font-light">
                                            t.me/quillaudits
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-2 ">
                                <li className="font-500 flex gap-2">
                                    <img src={location} alt="Location" />
                                    <span>Our Location:</span>
                                </li>
                                <li className="font-400 font-jost text-xs leading-5  w-[70%] md:w-[9.7rem] ">
                                    Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed
                                    Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O
                                    box: 416654
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                                Audit Services
                            </li>
                            <li>
                                <ul className="space-y-3 text-xs font-500">
                                    {audits.map((items) => {
                                        return <li>
                                            <a href="#">{items}</a>
                                        </li>
                                    })}
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <div>

                        <ul className="space-y-5">
                            <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                                Quill Ecosystem
                            </li>
                            <li>
                                <ul className="space-y-3 text-xs font-500">
                                    {tools.map((items) => {
                                        return <li>
                                            <a href="#">{items}</a>
                                        </li>
                                    })}

                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                                Other Services
                            </li>
                            <li>
                                <ul className="space-y-3 text-xs font-500">
                                    {services.map((items) => {
                                        return <li>
                                            <a href="#">{items}</a>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-5">
                            <li className="font-500 border-b-2 border-[#2D83EE] inline-block py-1 font-md">
                                Quick Links
                            </li>
                            <li>
                                <ul className="space-y-3 text-xs font-500">
                                    {links.map((items) => {
                                        return <li>
                                            <a href="#">{items}</a>
                                        </li>
                                    })}
                                    <li>
                                        <a href="#">Carrers </a>
                                        <span className="bg-[#2D83EE] px-2 py-0.5 rounded-sm ">Hiring</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-white hidden md:block font-500 font-jost space-y-5 absolute bottom-0 -right-3">
                    <p className=" border-b-2 border-[#2D83EE] inline-block py-1 font-md">Our Programmes</p>
                    <div className="flex gap-5">
                        <button className="px-5 py-2 text-xs text-center  rounded-md ">
                            Refer-Earn-Secure
                        </button>
                        <button className="px-5 py-2 text-xs text-center   rounded-md ">
                            WAGSI Grants
                        </button>
                        <button className="px-5 py-2 text-xs text-center   rounded-md ">
                            Ambassador Program
                        </button>
                        <button className="px-5 py-2 text-xs text-center   rounded-md ">
                            Partnership Program
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-0 justify-between items-center mt-16 mb-5">
                <div className="flex items-center gap-10">
                    <div><img src={securityImage} alt="Security" /></div>
                    <div><img src={governmentImage} alt="Government" /></div>
                </div>
                <div className="flex items-center gap-5">
                    <div><img src={twitterImage} alt="X" /></div>
                    <div><img src={linkedinImage} alt="Linkedin" /></div>
                    <div><img src={telegram} alt="Telegram" /></div>
                    <div><img src={reditImage} alt="Redit" /></div>
                    <div><img src={mediumImage} alt="Medium" /></div>
                    <div><img src={discordImage} alt="Discord" /></div>
                    <div><img src={youtubeImage} alt="Youtube" /></div>
                </div>
            </div>
            <hr className="border border-slate-600" />
            <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between items-center text-white text-xs font-jost font-400 mt-2">
                <p className="text-[11px] md:text-xs">All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
                <p>Privacy Policy</p>
            </div>

        </div>
    );
};

export default CompanyDetails;
