import React from 'react';
import { Menu, Button, Text } from '@mantine/core';
import MenuHoverApple from './MenuHoverApple';

export default function MenuMantine() {
  return (
    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400} position="right-start">
      <Menu.Target>
        <a>Toggle menu</a>
      </Menu.Target>

      <Menu.Dropdown>
        <MenuHoverApple/>
      </Menu.Dropdown>
    </Menu>
  )
}
