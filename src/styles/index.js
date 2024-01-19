import { createStitches } from "@stitches/react"; 
import localFont from 'next/font/local'

const BROmnyBold = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyBold.ttf', weight: '400' });
const BROmnyMedium = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyMedium.ttf', weight: '400' });
const BROmnyRegular = localFont({ src: '../assets/fonts/FontsFreeNetBROmnyRegular.ttf', weight: '300' });

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
            BROmnyBold: `${BROmnyBold.style.fontFamily}, sans-serif`,
            BROmnyMedium: `${BROmnyMedium.style.fontFamily}, sans-serif`,
            BROmnyRegular: `${BROmnyRegular.style.fontFamily}, sans-serif`,
        }
    }
})