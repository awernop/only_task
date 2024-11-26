'use client'
import { useState } from 'react';

import style from './page.module.scss';

type Year = {
  firstYear: number;
  secondYear: number;
}

const years: Year = {firstYear: 2015, secondYear: 2022}

export default function Home() {

  const [year, setYears] = useState<Year>(years)

  return (
    <div className="container">
      <div className={style.title}>
        <svg
          width="6"
          height="120"
          viewBox="0 0 6 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 0L2.99999 120"
            stroke="url(#paint0_linear_1_56)"
            stroke-width="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_56"
              x1="3.5"
              y1="-6"
              x2="3.49999"
              y2="102"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3877EE" />
              <stop offset="1" stop-color="#EF5DA8" />
            </linearGradient>
          </defs>
        </svg>
        <span>Исторические даты</span>
      </div>

      <div className={style.circle__container}>
        <div className={style.years}>
          <span className={style.years__first}>{years.firstYear}</span>
          <span className={style.years__second}>{years.secondYear}</span>
        </div>
        <div className={style.circle}>
          <div className={style.circle__figure}>
          <svg
            width="536"
            height="530"
            viewBox="0 0 536 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="533" cy="265" r="3" fill="#42567A"/>
            <circle cx="138" cy="34" r="3" fill="#42567A" />
            <circle cx="397" cy="34" r="3" fill="#42567A" />
            <circle cx="402" cy="492" r="3" fill="#42567A" />
            <circle cx="126" cy="489" r="3" fill="#42567A" />
            <circle cx="3" cy="265" r="3" fill="#42567A" />
          </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
}
