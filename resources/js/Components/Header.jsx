import { Link } from "@inertiajs/react";
import { Flex } from "@tremor/react";

export default function Header(props) {
    const menu = [
        {
            name: "صفحه اصلی",
            link: "",
        },
        {
            name: "افزونه های وردپرس",
            link: "",
        },
        {
            name: "قالب های وردپرس",
            link: "",
        },
        {
            name: "سیستم های سفارشی",
            link: "",
        },
    ];

    return (
        <div className="sm:fixed sm:top-0 sm:right-0 left-0 flex p-6 bg-white dark:bg-gray-800 z-10">
            <Flex
                flexDirection="row"
                style={{ gap: "15px", justifyContent: "start" }}
                className="nav"
            >
                {menu.map((item) => (
                    <Link key={item.name} className="font-semibold p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white duration-200 hover:ring-2 hover:ring-blue-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                        {item.name}
                    </Link>
                ))}
            </Flex>
            {props.auth.user ? (
                <Link
                    href={route("dashboard")}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    پنل کاربری
                </Link>
            ) : (
                <Flex style={{ gap: "40px", justifyContent: "end" }}>
                    <Link
                        href={route("login")}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        ورود
                    </Link>

                    <Link
                        href={route("register")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        عضویت
                    </Link>
                </Flex>
            )}
        </div>
    );
}