'use client'

import { useTranslation } from "@/app/i18n/client"
import ContactModalContext from "@/contexts/contact-modal.context"
import { MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { Col, Divider, Modal, Row } from "antd"
import { useContext } from "react"

import styles from './ContactModal.module.css'

const ContactModal: React.FC<{
  lang: string
}> = ({ lang }) => {
  const { t } = useTranslation(lang, 'contact')
  const { open, setOpen } = useContext(ContactModalContext)

  return (
    <Modal
    className={styles.container}
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
      title={t('title')}
      width="60vw"
    >
      <Row className={styles.phoneRow} gutter={16}>
        <Col sm={24} md={24} lg={4} xl={4}><PhoneOutlined /></Col>
        <Col sm={24} md={24} lg={20} xl={20} dangerouslySetInnerHTML={{ __html: t('phone') }}></Col>
      </Row>
      <Row className={styles.emailRow} gutter={16}>
        <Col sm={24} md={24} lg={4} xl={4}><MailOutlined /></Col>
        <Col sm={24} md={24} lg={20} xl={20} dangerouslySetInnerHTML={{ __html: t('email') }} />
      </Row>
      <Row gutter={16}>
        <Col sm={24} md={24} lg={4} xl={4}>{t('workingHour.label')}</Col>
        <Col sm={24} md={24} lg={20} xl={20}>{t('workingHour.value')}</Col>
      </Row>

      <Divider />

      <i>{t('gladToHelp')}</i>
    </Modal>
  )
}

export default ContactModal