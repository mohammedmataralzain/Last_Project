import { StyleFooterLogin } from './styled';

const FooterLoginPage = () => {
  return (
    <StyleFooterLogin>
        <p>© {new Date().getFullYear() - 8} - {new Date().getFullYear()} Upwork® Global Inc. • Privacy Policy</p>
    </StyleFooterLogin>
  )
}

export default FooterLoginPage;