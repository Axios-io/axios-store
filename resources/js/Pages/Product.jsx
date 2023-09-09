/**
 * External dependencies
 */
import {
    Button,
    Card,
    Col,
    Flex,
    Grid,
    Metric,
    Subtitle,
    Text,
    Title,
} from "@tremor/react";
import { Head } from "@inertiajs/react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Internal dependencies
 */
import Header from "@/Components/Header";
import Badge from "@/Components/Badge";

export default function Product(props) {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    return (
        <>
            <Head title={`Axios - ${props.title}`} />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <Header auth={props.auth} />

                <div className="w-full mx-auto">
                    <Flex
                        flexDirection="row"
                        className="hero-section bg-dots-darker dark:bg-dots-lighter"
                    >
                        <Flex flexDirection="col" style={{gap: '35px'}}>
                            <Title className="text-7xl">{props.title}</Title>
                            <Subtitle>{props.desc}</Subtitle>
                        </Flex>
                        <img src={props.thumbnail} />
                    </Flex>
                    <Grid numItems={1} numItemsMd={5} className="p-12 gap-12 mb-96">
                        <Col numColSpan={3}>
                            <Flex flexDirection="col">
                                <Text>{props.body}</Text>
                            </Flex>
                        </Col>
                        <Col
                            numColSpan={2}
                            className="rounded-tremor-default shadow-tremor-card dark:shadow-dark-tremor-card overflow-hidden"
                        >
                            <img src={props.banner} />
                        </Col>
                    </Grid>
                    <motion.div>
                        <Card className="fixed w-full h-fit bottom-0 rounded-none shadow-tremor-card dark:shadow-dark-tremor-card">
                            <Flex
                                flexDirection="row"
                                style={{ justifyContent: "space-between" }}
                            >
                                <Flex flexDirection="row" style={{justifyContent: 'start', gap: '5px', width: 'auto'}}>
                                    {props.badges.map((badge) => (
                                        <Badge key={badge} type={badge} title={badge} />
                                    ))}
                                </Flex>
                                <Metric>{props.sales} فروش</Metric>
                                <Metric>{props.price} تومان</Metric>
                                <Button variant="primary" color="blue">
                                    افزودن به سید خرید
                                </Button>
                            </Flex>
                            <motion.div
                                className="progress-bar"
                                style={{ scaleX }}
                            />
                        </Card>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
