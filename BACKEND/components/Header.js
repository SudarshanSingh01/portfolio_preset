import { RiBarChartHorizontalLine } from "react-icons/ri";

export default function Header({handleAsideOpen}) {

    return <>

        <header className="header flex flex-sb">
            <div className="logo flex gap-2">
                <h1>ADMIN</h1>
                <div className="headerham flex flex-center" onClick={handleAsideOpen}>
                    <RiBarChartHorizontalLine />
                </div>

            </div>

        </header>

    </>
}