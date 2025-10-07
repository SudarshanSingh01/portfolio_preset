import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";;
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect, useStae } from "react";
import { set } from "mongoose";
import { MdWorkOutline } from "react-icons/md";
import { LiaOpencart } from "react-icons/lia";




export default function Aside() {
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
                        <aside className="asideleft active">
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
                                                                <Link href='/blogs/draft'><li>Draft Blogs</li></Link>
                                                                <Link href='/blogs/addblog'><li>Add Blog</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                        <li className={activeLink === '/projects' ? 'navactive flex-col flex-left' : 'flex-col flex-left'} onClick={() => handleLinkClick('/projects')}>

                                                <div className="flex gap-1">
                                                        <MdWorkOutline />
                                                        <span> Projects</span>

                                                </div>
                                                {activeLink === '/projects' && (
                                                        <ul>
                                                                <Link href='/projects'><li>All Projects</li></Link>
                                                                <Link href='/projects/draft'><li>Draft Projects</li></Link>
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
                                                                <Link href='/Products'><li>All Products</li></Link>
                                                                <Link href='/Products/draft'><li>Draft Products</li></Link>
                                                                <Link href='/Products/addProducts'><li>Add Products</li></Link>
                                                        </ul>
                                                )}

                                        </li>
                                </ul>
                        </aside>
                </>
        );
}
