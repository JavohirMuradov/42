import React, { useContext, useEffect } from 'react'
import ThemeChanger from '../../utils/ThemeChanger'
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { t } = useTranslation();
  var language = localStorage.getItem('language');
  return (
    <div className={`${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow-sm rounded-md`}>
      <section className={`pt-6 md:pt-12 pb-0 md:pb-0 container flex items-start md:items-end flex-col md:flex-row gap-4 justify-between min-h-64`}>
        <div className="flex flex-col gap-4 pb-12">
          <h2 className={`${language === "uz" ? "inline-block" : "hidden"} w-max text-4xl md:text-5xl text-start xl:text-7xl font-bold`}>
            <TypeAnimation
              sequence={
                [
                  t("42 kunda frontend"),
                  1000,
                  t("42 kunda mobil"),
                  1000,
                  t("42 kunda backend"),
                  1000
                ]
              }
              wrapper='span'
              speed={50}
              className='text-4xl md:text-5xl w-max text-start xl:text-6xl font-bold text-foreground'
              repeat={Infinity}
            />
            <br />
            dasturlashni o'rganing
          </h2 >
          <h2 className={`${language === "ru" ? "inline-block" : "hidden"} w-max text-4xl md:text-5xl text-start xl:text-6xl font-bold`}>
            Изучите программирование
            <br />
            <TypeAnimation
              sequence={[
                "Через 42 дня frontend",
                1000,
                "Через 42 дня mobil",
                1000,
                "Через 42 дня backend",
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-4xl md:text-5xl w-max text-start xl:text-6xl font-bold text-foreground"
              repeat={Infinity} />
          </h2>
          <h2 className={`${language === "en" ? "inline-block" : "hidden"} w-max text-4xl md:text-5xl text-start xl:text-7xl font-bold`}>
            Learn Programming
            <br />
            <TypeAnimation
              sequence={[
                "In 42 days frontend",
                1000,
                "In 42 days mobil",
                1000,
                "In 42 days backend",
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-4xl md:text-5xl w-max text-start xl:text-6xl font-bold text-foreground"
              repeat={Infinity} />
          </h2>
          <p className="max-w-lg text-lg">
            ⚡️ {t("section1.p")}
          </p>
          <div className='flex flex-col md:flex-row items-start gap-2'>
            <a className={`inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${ThemeChanger("bg-[#0f172a] hover:bg-[#0f172a]/90 text-white", "bg-[#f8fafc] hover:bg-[#f8fafc]/90 text-[#0f172a]")} text-primary-foreground h-11 rounded-md px-8 md:text-xl md:py-8`} href="/courses">
              <img alt="ZapIcon" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="mr-2" srcSet="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&amp;w=32&amp;q=75 1x, /_next/image?url=%2Fanimated%2FZapIcon-64.gif&amp;w=48&amp;q=75 2x" src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75" style={{ color: 'transparent' }} />
              {t("button")}
            </a>
          </div>
        </div>
        <img alt="team" loading="lazy" width="620" height="200" decoding="async" data-nimg="1" className={`w-full md:w-2/5 ${ThemeChanger("invert-0", "filter invert-[0.9]")}`} src="https://42.uz/home/hey.svg" style={{ color: 'transparent' }} />
      </section>
    </div>

  )
}

export default Hero