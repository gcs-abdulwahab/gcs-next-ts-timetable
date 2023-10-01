import Link from "next/link";

const Header = () => {

    const logo = "https://cdn2.vectorstock.com/i/1000x1000/96/41/timetable-rubber-stamp-vector-17549641.jpg"
    // Define an array of navigation items
    const navigationItems = [
        { label: "Home", url: "/" },
        { label: "Departments", url: "/department" },
        { label: "Rooms", url: "/room" },
        { label: "Days", url: "/day" },
        { label: "Slots", url: "/slot" },
        { label: "Allocation Demo", url: "/allocation" },
        { label: "Tabs Demo", url: "/tabs" },

    ];


    return (
        <header className="pb-6 bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* <!-- lg+ --> */}
                <nav className="flex items-center justify-between h-16 lg:h-20">

                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src={logo} alt="" />
                        </a>
                    </div>


                    <ul className="menu menu-horizontal  ">
                        {navigationItems.map((item, index) => (
                           <li> <Link key={index} href={item.url} title={item.label} className="link  ml-5 pt-4"  >
                                {item.label}
                            </Link>
                            </li>
                        ))}
                    </ul>

                    <a href="#" title="" className="btn btn-primary ml-5" role="button"> Login</a>
                </nav>


            </div>
        </header>

    )
}

export default Header