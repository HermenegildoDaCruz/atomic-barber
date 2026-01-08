export default function Programms() {
    return (
        <section className="programms container">
            <div className="programms-container">
                <div className="program">
                    <div className="program-img-box">
                    {/* <img src="" alt="" /> */}

                    </div>
                    <div className="program-content">
                        <h3>Waves em 2 semanas</h3>
                    <ul>
                        <li>Tratamento 3 vezes por semana</li>
                        <li>Instruções via whatsapp</li>
                        <li>Kit para waves</li>
                        <li>1x ajustes por semana</li>
                    </ul>
                    <span className="program-price"> 16k AOA/mês</span>
                    </div>
                    
                </div>
                <div className="program">
                    <div className="program-img-box">
                    {/* <img src="" alt="" /> */}

                    </div>
                    <div className="program-content">
                        <h3>Tratamento de caspas</h3>
                    <ul>
                        <li>Limpeza profunda</li>
                        <li>Hidratação com produtos anti-caspa</li>
                        <li>Hidratação com óleos essenciais</li>
                        <li>2x cortes no prazo</li>
                    </ul>
                    <span className="program-price"> 25k AOA/mês</span>
                    </div>
                </div>
            </div>
        </section>
    );
}