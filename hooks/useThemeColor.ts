/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { COLORS } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof COLORS.accentLight & keyof typeof COLORS.accentDark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    // return Colors[theme][colorName];
    return colorFromProps;

  }
}


// import { COLORS } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// export function useThemeColor(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof COLORS['light'] & keyof typeof COLORS['dark']
// ): string {
//   const theme = useColorScheme() ?? 'light';

//   const colorFromProps = props[theme];
//   if (colorFromProps) return colorFromProps;

//   return COLORS[theme][colorName];
// }

