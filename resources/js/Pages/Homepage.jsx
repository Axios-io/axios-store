import { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/react";
import {
    Button,
    Card,
    Divider,
    Flex,
    Grid,
    Metric,
    Title,
    Text,
    TextInput
} from "@tremor/react";
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Welcome(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleFetchProducts = async () => await await fetch("https://jsonplaceholder.ir/posts", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => setProducts([...data]));
            
        handleFetchProducts();
    }, []);

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
        }
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 left-0 flex p-6 bg-white dark:bg-gray-800 z-10">
                    <Flex
                        flexDirection="row"
                        style={{ gap: "15px", justifyContent: "start" }}
                        className="nav"
                    >
                        {menu.map((item) => (
                            <Link className="font-semibold p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white duration-200 hover:ring-2 hover:ring-blue-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
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

                <div className="w-full mx-auto">
                    <Flex
                        flexDirection="col"
                        className="hero-section bg-dots-darker dark:bg-dots-lighter"
                    >
                        <TextInput
                            icon={MagnifyingGlassIcon}
                            placeholder="جستجوی محصولات..."
                            width={800}
                        />
                    </Flex>
                    <Flex
                        flexDirection="col"
                        className="main-section text-right"
                    >
                        <h3 className="text-gray-900 dark:text-gray-50 text-6xl mb-10 text-right">
                            محصولات
                        </h3>
                        <Grid
                            numItemsLg={5}
                            numItemsMd={4}
                            numItemsSm={3}
                            numItems={2}
                            className="products-wrapper"
                        >
                            {products.length &&
                                products.map((product) => (
                                    <Card
                                        key={product.id}
                                        decoration="bottom"
                                        decorationColor="blue"
                                        className="product-card"
                                        style={{ textAlign: "right" }}
                                    >
                                        <motion.div
                                            initial={{
                                                translateX: "100%",
                                                opacity: 0,
                                            }}
                                            animate={{
                                                translateX: 0,
                                                opacity: 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Title>{product.title}</Title>
                                            <Text>{product.body}</Text>
                                            <Divider />
                                            <Flex
                                                flexDirection="col"
                                                className="meta"
                                            >
                                                <Metric>159000 تومان</Metric>
                                                <Flex
                                                    flexDirection="row"
                                                    style={{
                                                        margin: "15px 0",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Button
                                                        variant="primary"
                                                        color="blue"
                                                        icon={ShoppingCartIcon}
                                                    >
                                                        افزودن به سید خرید
                                                    </Button>
                                                    <Button
                                                        className="bookmark-btn"
                                                        variant="secondary"
                                                        color="green"
                                                        icon={HeartIcon}
                                                        title="افزودن به علاقه مندی ها"
                                                    />
                                                </Flex>
                                            </Flex>
                                        </motion.div>
                                    </Card>
                                ))}
                        </Grid>
                    </Flex>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
