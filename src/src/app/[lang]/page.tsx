import { Divider } from "antd";

import { useTranslation } from "@/app/i18n";
import { languages } from '@/app/i18n/settings';

import styles from "./page.module.css";

export const generateStaticParams = () => {
  return languages.map((lang) => ({ lang }))
}

export default async function Home({
  params
}: Readonly<{
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang, 'home')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>
      <Divider className={styles.divider} />
      <div className={styles.subTitle}>{t('subTitle')}</div>
      <div className={styles.subTitleL2}>{t('gladToHelp')}</div>
    </div>
  );
}
