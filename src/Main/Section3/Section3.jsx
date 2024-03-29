import React from 'react'
import ThemeChanger from '../../utils/ThemeChanger'

const Section3 = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
          Shu kunga qadar
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Bizning maqsadimiz - o'quvchilarni IT sohasida professional mutaxassislar bo'lishiga yordam berish.
        </p>
      </div>
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            O'rtacha jamoaviy tajriba
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            5+ yil
          </dd>
        </div>
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            Umumiy o'quvchilar soni
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            422+
          </dd>
        </div>
        <div className={`rounded-lg px-4 py-5 ${ThemeChanger("bg-[#f1f5f9]", "bg-[#1e293b]")} shadow flex flex-col gap-4 sm:p-6 hover:bg-secondary cursor-default transition-all hover:shadow-md`}>
          <dt className="truncate text-xl font-medium text-secondary-foreground">
            Yozilgan darslar davomiyligi
          </dt>
          <dd className="mt-1 text-5xl font-semibold tracking-tight text-foreground">
            61+ soat
          </dd>
        </div>
      </dl>
    </section>
  )
}

export default Section3