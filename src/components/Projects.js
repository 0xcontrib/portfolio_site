import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

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
                    <h3>NFT Marketplace</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This project is an NFT marketplace. The marketplace allows users to create an NFT and sell it for a price. </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;