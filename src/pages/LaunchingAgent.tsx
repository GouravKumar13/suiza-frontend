import { Link } from 'react-router-dom';
import ConnectGears from '../components/connectGears';
import ConnectSocials from '../components/connectSocials';


import Navbar from '../components/navbar';
import VerticalLinearStepper from '../components/ui/stepper';
import useGlobalStorage from '../store';
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import Launcher from '../components/launcher';

const LaunchAgent = () => {
    const wallet = useWallet();
    const { activeStep, setActiveStep } = useGlobalStorage();

    return (
        <div className="relative bg-[#0a0f1b]       text-white

font-chakra min-h-screen flex flex-col items-center px-4 md:px-8">
            <Navbar />
            <div className="mt-44 w-full">
                <div className="text-4xl  font-bold text-center">
                    Launch your Agent
                </div>

                <div className="text-center text-sm md:text-2xl font-semibold opacity-90 pt-5 md:pt-20 text-white">
                    Connect Your Socials – Stay Synced with Suiza
                </div>
                <p className="text-lg  opacity-50 leading-loose py-5 text-center">
                    Enhance Suiza’s AI capabilities by linking your favorite
                    platforms for smarter recommendations,<br /> seamless scheduling,
                    and a truly personalized experience.
                </p>
                <Link to={'/YourAgent'} className='text-white' />
            </div>
            <div className="flex flex-col md:flex-row items-center py-10  mx-auto container gap-6 md:gap-x-6">
                <VerticalLinearStepper />
                {activeStep === 0 ? (
                    <ConnectSocials />
                ) : activeStep === 1 ? (
                    <ConnectGears />
                ) : activeStep === 2 ? (
                    <div className="border border-[#79DFED] p-6 rounded-xl    bg-gradient-to-br from-[#4DA2FF]/30 via-[#0a0f1b] to-[#0e1525] h-full w-full md:size-[400px] mx-4 md:ml-20 text-center md:text-left">
                        <div className="bg-[radial-gradient(circle,_#FFFFFF_0%,_#FF5800_100%)] bg-clip-text text-transparent uppercase text-lg md:text-xl">
                            connect wallet
                        </div>
                        <p className="text-lg py-3 md:py-5">
                            Securely store your fitness data and transactions on
                            the blockchain.
                        </p>
                        <ConnectButton
                            style={
                                wallet.account
                                    ? {
                                        color: 'white',
                                        width: '100%',
                                    }
                                    : {
                                        backgroundColor: 'transparent',
                                        width: '100%',
                                    }
                            }
                            children={
                                <button className="border border-[#FF5800] p-2 rounded-lg w-full md:w-auto">
                                    Connect wallet
                                </button>
                            }
                            onConnectSuccess={() => {
                                setActiveStep(3);
                            }}
                        />
                    </div>
                ) : (
                    <Launcher />
                )}
            </div>

        </div>

    );
};

export default LaunchAgent;
