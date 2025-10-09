import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BiExitFullscreen } from "react-icons/bi";
import { GoScreenFull } from "react-icons/go";
import { useState, useEffect } from "react"; // ✅ added useEffect

export default function Header({ handleAsideOpen }) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // ✅ Sync fullscreen state with actual browser fullscreen
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
                .catch((err) => console.error(err));
        } else {
            document.exitFullscreen();
        }
    };

    return <>


        <header className="header flex flex-sb">
            <div className="logo flex gap-2">
                <h1>ADMIN</h1>
                <div className="headerham flex flex-center" onClick={handleAsideOpen}>
                 <RiBarChartHorizontalLine />
                 </div>
                   
            </div>
            <div className="rightnav flex gap-2">
                <div onClick={toggleFullScreen}>
                    {isFullscreen ? <BiExitFullscreen /> : <GoScreenFull />}
                </div>
                <div className="notification">
                    <img src="/img/notification.png" alt="notification"/>
                </div>
                <div className="profilenav">
                    <img src="/img/user.png" alt="user"/>
                </div>
            </div>
        </header>
    </>
}
