import NavItems from "./NavItems";


const ResponsiveNavbar = () => {
    const navItems = [
      {
        id: 1,
        path: "/home",
        name: "Home",
      },
      {
        id: 2,
        path: "/about",
        name: "About",
      },
      {
        id: 3,
        path: "/services",
        name: "Services",
      },
      {
        id: 4,
        path: "/contact",
        name: "Contact",
      },
      {
        id: 5,
        path: "/blog",
        name: "Blog",
      },
    ];

    return (
        <div>
            <ul className="">
                {
                    navItems.map(item=><NavItems key={item.id} item={item}></NavItems>)
                }
            </ul>
            
        </div>
    );
};

export default ResponsiveNavbar;