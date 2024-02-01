import { createStitches } from "@stitches/react"; 
import localFont from 'next/font/local'

const BrownStdBold = localFont({ src: '../assets/fonts/BrownStd-Bold.ttf', weight: '400' });
const BrownStdLight = localFont({ src: '../assets/fonts/BrownStd-Light.ttf', weight: '400' });
const BrownStdRegular = localFont({ src: '../assets/fonts/BrownStd-Regular.ttf', weight: '400' });
const BrownStdThin = localFont({ src: '../assets/fonts/BrownStd-Thin.ttf', weight: '400' });

export const { styled, globalCss, keyframes, getCssText, theme} =
createStitches({
    theme: {
        colors: {
            branco: '#f5f5f5',
               verde: '#45fdd6',
               roxo: '#3d3245',
               azul: '#5a78ff',
               rosa: '#E71D8D;',
        },
        fonts: {
            BrownStdBold: `${BrownStdBold.style.fontFamily}, sans-serif`,
            BrownStdLight: `${BrownStdLight.style.fontFamily}, sans-serif`,
            BrownStdRegular: `${BrownStdRegular.style.fontFamily}, sans-serif`,
            BrownStdThin: `${BrownStdThin.style.fontFamily}, sans-serif`,
        }
    }
})