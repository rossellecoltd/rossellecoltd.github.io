import { Button, Dropdown, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import styles from './Menu.module.css'

export function Menu({
  items,
  onClick,
}: Readonly<{
  items: MenuProps['items'];
  onClick: MenuProps['onClick']
}>) {
  return (
    <Dropdown overlayClassName={styles.menu} menu={{ items, onClick }} placement="bottomLeft">
      <Button icon={<MenuOutlined />} shape="circle" block size="large" />
    </Dropdown>
  )
}