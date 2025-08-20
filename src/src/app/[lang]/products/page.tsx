import { Carousel, Collapse, CollapseProps, Descriptions, DescriptionsProps, Divider, Space, Splitter } from "antd"
import Image from "next/image"

import { languages } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n"

import styles from "./Products.module.css"

export const generateStaticParams = () => {
  return languages.map((lang) => ({ lang }))
}

const SplitterPanel = Splitter.Panel;

const Product: React.FC<{
  params: Promise<{ lang: string }>;
}> = async ({ params }) => {
  const { lang } = await params

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang, 'products')

  const collapseItems: CollapseProps['items'] = [{
    key: '1',
    label: t('details.general.title'),
    children: (
      <Splitter>
        <SplitterPanel>
          <span>{t('details.general.description')}</span>
        </SplitterPanel>
        <SplitterPanel defaultSize="30%" max="50%" min="20%">
          <Image className={styles.collapseImg} src="/assets/algae.jpg" alt="algae" fill />
        </SplitterPanel>
      </Splitter>
    )
  }, {
    key: '2',
    label: t('details.vsSodiumAlginate.title'),
    children: (
      <Splitter>
        <SplitterPanel>
          <span>{t('details.vsSodiumAlginate.description')}</span>
        </SplitterPanel>
        <SplitterPanel defaultSize="30%" max="50%" min="20%">
          <Image className={styles.collapseImg} src="/assets/thickening.jpg" alt="thickening" fill />
        </SplitterPanel>
      </Splitter>
    )
  }, {
    key: '3',
    label: t('details.beer.title'),
    children: (
      <Splitter>
        <SplitterPanel>
          <span>{t('details.beer.description')}</span>
        </SplitterPanel>
        <SplitterPanel defaultSize="30%" max="50%" min="20%">
          <Image className={styles.collapseImg} src="/assets/beer_foam.jpg" alt="beer" fill />
        </SplitterPanel>
      </Splitter>
    )
  }, {
    key: '4',
    label: t('details.breadAndNoodles.title'),
    children: (
      <Splitter>
        <SplitterPanel>
          <span>{t('details.breadAndNoodles.description')}</span>
        </SplitterPanel>
        <SplitterPanel defaultSize="30%" max="50%" min="20%">
          <Image className={styles.collapseImg} src="/assets/noodle.jpg" alt="noodle" fill />
          <Image className={styles.collapseImg} src="/assets/bread.jpg" alt="bread" fill />
        </SplitterPanel>
      </Splitter>
    )
  }]

  const descriptionsItems: DescriptionsProps['items'] = [{
    key: '1',
    label: t('summary.productName.title'),
    children: t('summary.productName.value')
  }, {
    key: '2',
    label: t('summary.certification.title'),
    children: (
      <Space className={styles.certificationLogos}>
        <a href="https://porta.fda.moph.go.th/fda_search_all/PRODUCT/FRM_PRODUCT_FOOD.aspx?fdpdtno=1031964610002" target="_blank">
          <Image src="/assets/thai_fda.jpg" alt="thai-fda-link" fill />
        </a>
        <Image src="/assets/ISO_9001_2015.svg" alt="iso-9001-2015" fill />
        <Image src="/assets/halal_icon.png" alt="halal-icon" fill />
      </Space>
    )
  }, {
    key: '3',
    label: t('summary.packaging.title'),
    children: t('summary.packaging.value')
  }, {
    key: '4',
    label: t('summary.moq.title'),
    children: t('summary.moq.value')
  }]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <h2 className={styles.subTitle}>{t('subTitle')}</h2>

      <Divider className={styles.divider} />
      
      <span className={styles.briefDescription}>{t('briefDescription')}</span>
      
      <Divider className={styles.divider} />

      <Carousel arrows autoplay>
        <Image src="/assets/carousel/product/pasta1.jpg" alt="pasta1" fill />
        <Image src="/assets/carousel/product/noodle1.jpg" alt="noodle1" fill />
        <Image src="/assets/carousel/product/noodle2.jpg" alt="noodle2" fill />
        <Image src="/assets/carousel/product/bread1.jpg" alt="bread1" fill />
      </Carousel>

      <Divider className={styles.divider} />

      <Collapse items={collapseItems} defaultActiveKey="1" />

      <Divider className={styles.divider} />

      <Descriptions title={t('summary.title')} items={descriptionsItems} bordered column={1} />
    </div>
  )
}


export default Product