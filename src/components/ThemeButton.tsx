
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { type MenuItem } from 'primereact/menuitem';
import { useRef } from 'react';
import useThemeStore, { setTheme } from '../stores/themeStore';


const ThemeButton = () => {
  const theme = useThemeStore((state) => state.theme);
  const menuLeft = useRef(null);

  const themes: MenuItem[] = [
    {
      items: [
        {
          command: () => setTheme('light'),
          disabled: theme === 'light',
          icon: 'pi pi-sun',
          label: `Light`,
        },
        {
          command: () => setTheme('dark'),
          disabled: theme === 'dark',
          icon: 'pi pi-moon',
          label: `Dark`,
        },
        {
          command: () => setTheme('system'),
          disabled: theme === 'system',
          icon: 'pi pi-cog',
          label: `System`,
        },
      ],
      label: `Theme`,
    },
  ];

  return (
    <>
      <Button
        aria-controls="popup_menu_left"
        aria-haspopup
        icon="pi pi-palette"
        onClick={(event) =>
          // @ts-expect-error fix later
          menuLeft.current.toggle(event)
        }
        rounded
      />
      <Menu id="popup_menu_left" model={themes} popup ref={menuLeft} />
    </>
  );
};

export default ThemeButton;
