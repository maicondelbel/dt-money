import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard } from '../SummaryCard'
import { useSummary } from './../../hooks/useSummary'
import { SummaryWrapper } from './styles'

import 'swiper/css'

export function Summary() {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <SummaryWrapper>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        grabCursor={true}
        breakpoints={{
          576: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SummaryCard
            icon={<ArrowCircleUp size={32} color={theme['green-300']} />}
            title="Entradas"
            bgColor="default"
            amount={priceFormatter.format(summary.income)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SummaryCard
            icon={<ArrowCircleDown size={32} color={theme['red-300']} />}
            title="Saídas"
            bgColor="default"
            amount={priceFormatter.format(summary.outcome)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SummaryCard
            icon={<CurrencyDollar size={32} />}
            title="Saldo"
            bgColor={
              summary.total === 0
                ? 'default'
                : summary.total < 0
                ? 'red'
                : 'green'
            }
            amount={priceFormatter.format(summary.total)}
          />
        </SwiperSlide>
      </Swiper>
    </SummaryWrapper>
  )
}
