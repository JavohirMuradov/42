import React from 'react'
import ThemeChanger from '../../utils/ThemeChanger'
import { useTranslation } from 'react-i18next'

const Section3 = () => {
  var { t } = useTranslation()
  return (
    <section className='container'>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
          {t("section3.h1")}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t("section3.p")}
        </p>
      </div>
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            {t("section3.card1.h1")}
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            {t("section3.card1.p")}
          </dd>
        </div>
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            {t("section3.card2.h1")}
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            {t("section3.card2.p")}
          </dd>
        </div>
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            {t("section3.card3.h1")}
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            {t("section3.card3.p")}
          </dd>
        </div>
      </dl>
    </section>
  )
}

export default Section3