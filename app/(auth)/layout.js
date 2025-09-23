"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLink = [
    {
        name:"Register",href:"/register"
    },
    {
        name:"Login",href:"/login"
    },
    // {
    //     name:"Forget Password",href:"/forgotpass"
    // }
]

export default function AuthLayout({children}){
    const pathname = usePathname()
    console.log(pathname)
    return (
        <>
            {navLink.map((link)=>{
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4":"text-blue-200 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}