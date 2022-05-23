import React from 'react'
import "../Styles/Footer.scss"


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__wrapper">
                <h3 className='footer__logo'>SP labs_</h3>
                <div className="footer__links-wrapper">
                    <div className="footer__splabs-links">
                        <h4>SP Labs</h4>
                        <h5>Política de Privacidade</h5>
                    </div>
                    <div className="footer__sp-links">
                        <h4>Sem Processo</h4>
                        <a href="https://www.semprocesso.com.br/">Site</a>
                        <a href="https://www.semprocesso.com.br/#produtos">Produtos</a>
                        <a href="https://www.semprocesso.com.br/blog">Blog</a>
                    </div>
                </div>
            </div>
            <p className="footer__credits">SP Labs 2022. Feito por CAROLINA NONATO</p>
        </div>
    )
}

export default Footer