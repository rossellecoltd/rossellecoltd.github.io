import { Select } from "antd"
import { redirect, usePathname } from "next/navigation"

import { fallbackLng } from "@/app/i18n/settings"

import styles from './LanguageSwitcher.module.css'

const items = [
  { value: 'th', label: 'ไทย' },
  { value: 'en', label: 'English' },
]

const LanguageSwitcher: React.FC<{ currentLang: string }> = ({ currentLang }) => {
  const pathname = usePathname()
  const currentLangData = items.find(item => item.value === currentLang)
  if (!currentLangData) { // Invalid language
    redirect('/' + fallbackLng + pathname.replace(`/${currentLang}`, ''))
  }

  return (
    <Select
      className={styles.languageSwitcher}
      value={currentLang}
      options={items}
      onChange={(value) => {
        console.log(value)
        console.log(currentLang)
        console.log(pathname)
        redirect('/' + value + pathname.replace(`/${currentLang}`, ''))
      }}
    />
  )
}

export default LanguageSwitcher