import React from 'react'
import ThemeChanger from '../../utils/ThemeChanger'
import { useTranslation } from 'react-i18next'

const Section2 = () => {
    var { t } = useTranslation()
    return (
        <section id="features" className="py-8 md:py-12 lg:py-24 container">
            <div className="z-10 relative flex flex-col md:flex-row items-end">
                <div className="flex flex-col items-start space-y-4 text-left py-4">
                    <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                        {t("section2.h1")}
                    </h2>
                    <p className="text-left max-w-[65%] leading-normal text-mutedForeground sm:text-lg sm:leading-7">
                        {t("section2.p")}
                    </p>
                </div>
                <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`relative -mb-4 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/look_down.svg" />
            </div>
            <div className="z-0 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/interactive.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card1.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card1.p")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/books.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card2.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card2.p")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/mix.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card3.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card3.p")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/backend.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card4.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card4.p")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/frontend.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card5.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card5.p")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`relative overflow-hidden rounded-lg border ${ThemeChanger("bg-white", "bg-[#020817]")} p-2 cursor-default hover:bg-secondary hover:shadow-lg transition-all duration-200 ease-in-out`}>
                    <div className="flex flex-col gap-3 justify-between rounded-md p-6">
                        <img alt="team" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className={`w-20 h-20 ${ThemeChanger("filter invert-0", "filter invert-[0.9]")}`} style={{ color: 'transparent' }} src="https://42.uz/home/features/mobile.svg" />
                        <div className="space-y-2">
                            <h3 className="font-bold">
                                {t("section2.card6.h1")}
                            </h3>
                            <p className="text-sm text-mutedForeground">
                                {t("section2.card6.p")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-12 pb-4 mx-auto text-center md:max-w-2xl">
                <p className="leading-normal text-mutedForeground sm:text-lg sm:leading-7">
                    {t("section2.span")}
                </p>
            </div>
            <div className="w-full flex justify-center py-2">
                <a className={`inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${ThemeChanger("bg-[#0f172a] text-[#f8fafc]", "bg-[#f8fafc] text-[#0f172a]")} hover:bg-primary/90 h-11 rounded-md px-8  md:text-xl md:py-8`} href="/courses">
                    <img alt="ZapIcon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="mr-2" srcSet="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fanimated%2FZapIcon-64.gif&amp;w=48&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75" style={{ color: 'transparent' }} />
                    {t("button")}
                </a>
            </div>
        </section>
    )
}

export default Section2