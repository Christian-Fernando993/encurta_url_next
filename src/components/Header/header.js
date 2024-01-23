import { Container } from "@/styles/global";
import { HeaderStyle } from './styles'
import Image from "next/image";
import Logo from '@/assets/icons/logo_loovi_azul.svg'

export default function Header() {
    return (
        <HeaderStyle>
            <Container>
                <Image src={Logo} alt='Logo da Loovi' className='logo'/>
            </Container>
        </HeaderStyle>
    )
}        