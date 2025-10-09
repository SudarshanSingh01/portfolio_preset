import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";;
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect, useStae } from "react";
import { set } from "mongoose";
import { SiFiles } from "react-icons/si";
import { LiaOpencart } from "react-icons/lia";
import { SiPhotopea } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SlSettings } from "react-icons/sl";




export default function Aside({asideOpen, handleAsideOpen}) {
        const router = useRouter();
        const [clicked, setClicked] = useState(false);
        const [activeLink, setActiveLink] = useState('/');

        const handleClick = () => {
                setClicked(!clicked)
        }

        const handleLinkClick = (link) => {
                setActiveLink(preActive => (preActive === link ? null : link));
                setClicked(false);
        }

        useEffect(() => {
                setActiveLink(router.pathname)
        }, [router.pathname])

        return (
                <>
                        <aside className={asideOpen ? 'asideleft active' : 'asideleft'}>
                                <ul>
                                        <Link href="/">
                                                <li className="navactive">
                                                        <IoHome />
                                                        <span>Dashboard</span>
                                                </li>
                                        </Link>

                                        <li className={activeLink === '/blogs' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/blogs')}>

                                                <div className="flex gap-1">
                                                        <GiNewspaper />
                                                        <span> Blogs</span>

                                                </div>
                                                {activeLink === '/blogs' && (
                                                        <ul>
                                                                <Link href='/blogs'><li>All Blogs</li></Link>
                                                                <Link href='/blogs/draftblogs'><li>Draft Blogs</li></Link>
                                                                <Link href='/blogs/addblog'><li>Add Blog</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                        <li className={activeLink === '/projects' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/projects')}>

                                                <div className="flex gap-1">
                                                        <SiFiles />
                                                        <span> Projects</span>

                                                </div>
                                                {activeLink === '/projects' && (
                                                        <ul>
                                                                <Link href='/projects'><li>All Projects</li></Link>
                                                                <Link href='/projects/draftprojects'><li>Draft Projects</li></Link>
                                                                <Link href='/projects/addprojects'><li>Add Projects</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                        <li className={activeLink === '/Shops' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/Shops')}>

                                                <div className="flex gap-1">
                                                        <LiaOpencart />
                                                        <span> Shops</span>

                                                </div>
                                                {activeLink === '/Shops' && (
                                                        <ul>
                                                                <Link href='/shops'><li>All Products</li></Link>
                                                                <Link href='/shops/draftshop'><li>Draft Products</li></Link>
                                                                <Link href='/shops/addProducts'><li>Add Products</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                        <li className={activeLink === '/Gallery' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/Gallery')}>

                                                <div className="flex gap-1">
                                                        <SiPhotopea />
                                                        <span> Gallery</span>

                                                </div>
                                                {activeLink === '/Gallery' && (
                                                        <ul>
                                                                <Link href='/gallery'><li>All photos</li></Link>
                                                                <Link href='/gallery/addphotos'><li>Add photos</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                        <Link href='/contacts'>
                                                <li className={activeLink === '/contacts' ? 'navactive' : ''} onClick={() => handleLinkClick('/contacts')}>
                                                        <MdOutlineConnectWithoutContact />
                                                        <span> Contacts</span>
                                                </li>
                                        </Link>
                                        <Link href='/setting'>
                                                <li className={activeLink === '/setting' ? 'navactive' : ''} onClick={() => handleLinkClick('/setting')}>
                                                        <SlSettings />
                                                        <span>Settings</span>
                                                </li>
                                        </Link>
                                </ul>
                                <button className="logoutbtn"> Logout </button>
                        </aside>
                </>
        );
}
