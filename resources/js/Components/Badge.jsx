import { Icon } from "@tremor/react";
import { PlayIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function Badge(props) {
    switch (props.type) {
        case "vip":
            return (
                <Icon
                    icon={ArrowTrendingUpIcon}
                    title={props.title}
                    variant="solid"
                    size="lg"
                    color="cyan"
                />
            );
        case "video_guide":
            return (
                <Icon
                    icon={PlayIcon}
                    title={props.title}
                    variant="solid"
                    size="lg"
                    color="orange"
                />
            );
    }
}
