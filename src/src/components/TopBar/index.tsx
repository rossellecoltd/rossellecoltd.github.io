import { Button, Col, Row } from 'antd'
import Image from 'next/image';

import { Menu } from '../Menu'

import styles from './TopBar.module.css'
import LanguageSwitcher from '../LanguageSwitcher';
import { redirect } from 'next/navigation';
import { useContext } from 'react';
import ContactModalContext from '@/contexts/contact-modal.context';
import { InboxOutlined, InfoCircleOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';


export default function TopBar({
  lang,
}: Readonly<{
  lang: string;
}>) {
  const { setOpen: setContactModalOpen } = useContext(ContactModalContext)

  return (
    <Row
      gutter={{ md: 16, lg: 32 }}
      className={styles.container}
      justify='space-around'
    >
      <Col className={styles.menuContainer} md={1} lg={1}>
        <Menu
          items={[
            {
              key: 'products',
              label: (
                <Row gutter={8}>
                  <Col><InboxOutlined /></Col>
                  <Col>Products</Col>
                </Row>
              ),
            },
            {
              key: 'about',
              label: (
                <Row gutter={8}>
                  <Col><InfoCircleOutlined /></Col>
                  <Col>About</Col>
                </Row>
              )
            },
            {
              key: 'contact',
              label: (
                <Row gutter={8}>
                  <Col><PhoneOutlined /></Col>
                  <Col>Contact</Col>
                </Row>
              )
            },
          ]}
          onClick={(e) => {
            if (e.key === 'contact') {
              setContactModalOpen(true)
            } else {
              redirect(`/${lang}/${e.key}`)
            }
          }}
        />
      </Col>
      <Col className={styles.logoContainer} md={6} lg={5}>
        <Image
          className={styles.logo}
          src="/assets/rosselle.svg"
          alt="Rosselle"
          width={125}
          height={100 - 4 * 2}
        />
        <h1>Rosselle</h1>
      </Col>
      <Col md={10} lg={14} style={{ flex: 1 }}></Col>
      <Col md={3} lg={2}>
        <Button type="link" icon={<MailOutlined />} href='mailto:contact@rosselleth.com' />
      </Col>
      <Col md={4} lg={2}>
        <LanguageSwitcher currentLang={lang} />
      </Col>
    </Row>
  )
}