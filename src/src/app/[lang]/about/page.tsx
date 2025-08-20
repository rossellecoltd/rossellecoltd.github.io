import { Carousel, Descriptions, DescriptionsProps, Divider } from "antd"
import Image from "next/image"

import { languages } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n"

import styles from "./About.module.css"

export const generateStaticParams = () => {
  return languages.map((lang) => ({ lang }))
}

const About: React.FC<{
  params: Promise<{ lang: string }>;
}> = async ({ params }) => {
  const { lang } = await params

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang, 'about')

  const descriptionsItems: DescriptionsProps['items'] = [{
    key: '1',
    label: t('table.companyName.title'),
    children: t('table.companyName.value')
  }, {
    key: '2',
    label: t('table.establishedDate.title'),
    children: t('table.establishedDate.value')
  }, {
    key: '3',
    label: t('table.registrationNo.title'),
    children: t('table.registrationNo.value')
  }, {
    key: '4',
    label: t('table.capital.title'),
    children: t('table.capital.value')
  }, {
    key: '5',
    label: t('table.address.title'),
    children: t('table.address.value')
  }]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>

      <Divider className={styles.divider} />

      <h2 className={styles.body}>{t('body')}</h2>
      <Carousel arrows autoplay>
        <Image src="/assets/carousel/about/pallet.jpeg" alt="pallet" fill />
        <Image src="/assets/carousel/about/stock1.jpeg" alt="stock1" fill />
        <Image src="/assets/carousel/about/stock2.jpeg" alt="stock2" fill />
      </Carousel>

      <Divider className={styles.divider} />

      <Descriptions title={t('table.title')} items={descriptionsItems} bordered column={1}/>
    </div>
  )
}

export default About