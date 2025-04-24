// import { Link } from 'expo-router';
// import { openBrowserAsync } from 'expo-web-browser';
// import { type ComponentProps } from 'react';
// import { Platform } from 'react-native';

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

// export function ExternalLink({ href, ...rest }: Props) {
//   return (
//     <Link
//       target="_blank"
//       {...rest}
//       href={href}
//       onPress={async (event) => {
//         if (Platform.OS !== 'web') {
//           // Prevent the default behavior of linking to the default browser on native.
//           event.preventDefault();
//           // Open the link in an in-app browser.
//           await openBrowserAsync(href);
//         }
//       }}
//     />
//   );
// }


import React from 'react';
import { Platform, GestureResponderEvent } from 'react-native';
import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href' | 'onPress'> & {
  href: string;
};

/**
 * ExternalLink opens links externally on native using `openBrowserAsync`,
 * and defaults to standard `<Link>` behavior on web.
 */
export function ExternalLink({ href, ...rest }: Props) {
  const handlePress = async (event: GestureResponderEvent) => {
    if (Platform.OS !== 'web') {
      event.preventDefault();
      try {
        await openBrowserAsync(href);
      } catch (error) {
        console.error('Failed to open browser:', error);
      }
    }
  };

  return (
    <Link
      {...rest}
      href={href as any}
      onPressIn={handlePress}
      // Ensure consistent behavior across platforms
      target={Platform.OS === 'web' ? '_blank' : undefined}
    />
  );
}

