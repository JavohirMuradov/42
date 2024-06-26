import React from 'react'
import { useTranslation } from 'react-i18next';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ThemeChanger from '../../utils/ThemeChanger';
import { Swiper, SwiperSlide } from 'swiper/react';

const Section5 = () => {
    var { t } = useTranslation()
    return (
        <section className="pt-3 container" id="reviews">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                    {t("section5.h1")}
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t("section5.p")}
                </p>
            </div>
            <img alt="team" loading="lazy" width="820" height="200" decoding="async" data-nimg="1" className="w-full md:w-2/3 mx-auto dark:filter dark:invert-[0.1]" style={{ color: "transparent" }} src="https://42.uz/home/heads.svg" />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                className='mt-10 xl:block hidden'
            >
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Javokhirbek Khaydaraliev" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Javokhirbek Khaydaraliev
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    STEP Intern @
                                                </span>
                                                <img alt="STEP Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer.
                                        I have always been so curious about working at Google and now I am super excited  ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/javokhirbek-kh_coding-google-intern-activity-7038846041785307136-_APB/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v"></path>
                                                <path d="M10 14 21 3"></path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Begnazar Akhmadjonov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1688940135044.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Begnazar Akhmadjonov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Student Developer @
                                                </span>
                                                <img alt="Student Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fericsson.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I am thrilled to announce that I have embarked on a new journey as a Student Developer at Ericsson. Additionally, I am immensely grateful to Azimjon Pulatov and Mukhammadyusuf S. for providing me wit ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/begnazarakh_bizyutdik-ericsson-activity-7079105208248598528-lQFc/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Shukhrat Mirrakhimov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1580794557770.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Shukhrat Mirrakhimov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Backend Developer Intern @
                                                </span>
                                                <img alt="Backend Developer Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I am delighted to announce that I will be joining TopTal as a Back-end Engineering Intern. I would like to thank my recruiter Silvana Palacios and Azimjon Pulatov for supporting me through the whole i ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/shux121995_internship-toptal-activity-6835889893911105536-Ojj1/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Mirvohid Azimov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1652076819849.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Mirvohid Azimov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Software Engineer Intern @
                                                </span>
                                                <img alt="Software Engineer Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fyandex.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I'm starting a new position as a Software Engineer Intern at Yandex! Also, my special thanks to Azimjon Pulatov and all YBKY team members for creating a pleasant community to enjoy coding! ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/ugcPost-7074797410685759488-77RB/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                className='mt-10 block xl:hidden'
            >
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Javokhirbek Khaydaraliev" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Javokhirbek Khaydaraliev
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    STEP Intern @
                                                </span>
                                                <img alt="STEP Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer.
                                        I have always been so curious about working at Google and now I am super excited  ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/javokhirbek-kh_coding-google-intern-activity-7038846041785307136-_APB/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v"></path>
                                                <path d="M10 14 21 3"></path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Begnazar Akhmadjonov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1688940135044.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Begnazar Akhmadjonov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Student Developer @
                                                </span>
                                                <img alt="Student Developer" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fericsson.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I am thrilled to announce that I have embarked on a new journey as a Student Developer at Ericsson. Additionally, I am immensely grateful to Azimjon Pulatov and Mukhammadyusuf S. for providing me wit ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/begnazarakh_bizyutdik-ericsson-activity-7079105208248598528-lQFc/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Shukhrat Mirrakhimov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1580794557770.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Shukhrat Mirrakhimov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Backend Developer Intern @
                                                </span>
                                                <img alt="Backend Developer Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Ftoptal.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I am delighted to announce that I will be joining TopTal as a Back-end Engineering Intern. I would like to thank my recruiter Silvana Palacios and Azimjon Pulatov for supporting me through the whole i ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/shux121995_internship-toptal-activity-6835889893911105536-Ojj1/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full h-full'>
                    <div>
                        <div className="px-2">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-b-none border-none">
                                <div className="p-6 bg-secondary pt-5 flex gap-2 items-start flex-col rounded-t-lg rounded-b-none border">
                                    <div className="flex gap-4 items-center">
                                        <img alt="Mirvohid Azimov" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="bg-primary-foreground" style={{ color: "transparent", borderRadius: "50%", width: "72px", height: "72px" }} src="https://42.uz/_next/image?url=%2Fstudents%2F1652076819849.jpeg&w=128&q=75" />
                                        <div className="flex flex-col text-left">
                                            <h2 className=" text-xl font-semibold">
                                                Mirvohid Azimov
                                            </h2>
                                            <p className="text-xs md:text-lg flex items-start flex-col md:flex-row md:items-center gap-2">
                                                <span>
                                                    Software Engineer Intern @
                                                </span>
                                                <img alt="Software Engineer Intern" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style={{ color: "transparent", height: "24px", width: "auto" }} className={`${ThemeChanger("", "bg-white p-1 rounded-md")}`} src="https://42.uz/_next/image?url=%2Fcompanies%2Fyandex.png&w=128&q=75" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-2 pb-12">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-default w-full rounded-t-none border-t-0">
                                <div className="p-6 text-left pt-5 flex flex-col gap-2">
                                    <p className="text-sm md:text-base">
                                        I'm starting a new position as a Software Engineer Intern at Yandex! Also, my special thanks to Azimjon Pulatov and all YBKY team members for creating a pleasant community to enjoy coding! ...
                                    </p>
                                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                                        <span className="mr-2">
                                            5.0
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-4 h-4 fill-yellow-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                                </path>
                                            </svg>
                                        </div>
                                        <a className="flex gap-1 items-center" href="https://www.linkedin.com/posts/ugcPost-7074797410685759488-77RB/?utm_source=sharemedium=member_desktop">
                                            on LinkedIn
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4">
                                                <path d="M15 3h6v">
                                                </path>
                                                <path d="M10 14 21 3">
                                                </path>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Section5