import React from 'react'
import ThemeChanger from '../../utils/ThemeChanger'
import { useTranslation } from 'react-i18next'

const Section6 = () => {
    var { t } = useTranslation()
    return (
        <section className="p-8 md:pt-24 pb-0 flex flex-col gap-12 undefined">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
                    {t("section6.h1")}
                </h2>
                <p className="max-w-5xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    {t("section6.p")}
                </p>
                <div className="w-full flex flex-col md:flex-row justify-center py-2 gap-1 md:gap-3">
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" href="/courses">
                        <img alt="ZapIcon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="mr-1" style={{ color: "transparent" }} src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75" />
                        {t("button")}
                    </a>
                    <span className="border-l">
                    </span>
                    <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" href="/faq">
                        {t("section6.button")}
                    </a>
                </div>
            </div>
            <img alt="team" loading="lazy" width="620" height="200" decoding="async" data-nimg="1" className={`w-full md:w-2/5 mx-auto ${ThemeChanger("", "filter invert-[0.85]")}`} style={{ color: "transparent" }} src="https://42.uz/home/hero-2.svg" />
        </section>
    )
}

export default Section6