import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import whitelist from '../assets/whitelist.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Token Swap Dapp</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p> This project is a token swap dapp built with 0x API. The dapp allows users to swap tokens for other tokens. </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Staking Application</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>The staking application dapp allows users to stake tokens and get rewards in the form of native token. </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Whitelist Application</h3>
                    <img src={whitelist} alt="whitelist-dapp" />
                    <p>A whitelist dapp where addresses can whitelist themselves for NFT mints or token presale.</p>

                    <a href="https://whitelist-dapp-example.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/0xcontrib/whitelist-dapp-example" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;