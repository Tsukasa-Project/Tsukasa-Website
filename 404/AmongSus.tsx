import {Image} from "@chakra-ui/react";
import susyle from "./amongsus.module.css";
import {CSSProperties, useEffect, useState} from "react";

const AmongSus = ({msg, onClick}: { msg: string, onClick?: () => void }) => {
    const [stars, setStars] = useState<CSSProperties[]>([]);

    useEffect(() => {
        const tmp = [] as CSSProperties[];
        for (let i = 0; i < 80; i++) {
            const size = getRandomInt(10, 3) + "px";

            let star = {
                width: size,
                height: size,
                animationDuration: getRandomInt(60, 30) + "s",
                animationDelay: getRandomInt(0, -45) + "s",
                top: getRandomInt(100, 0) + "vh"
            } as CSSProperties;

            tmp.push(star);
        }
        setStars(tmp);
    }, []);

    const [text, setText] = useState<string>("");
    const [typing, setTyping] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (typing) {
                setText(msg.slice(0, text.length + 1));
                if (msg.length === text.length)
                    sleep(500).then(_ => setTyping(false));

            } else {
                setText(text.slice(0, -1));
                if (text.length === 0)
                    sleep(500).then(_ => setTyping(true));
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [msg, text, typing]);

    return <>
        <div className={susyle.background}>
            <h1 className={susyle.sustext}>{text}</h1>
            {stars.map((star, idx) => <i key={idx} className={susyle.star} style={star}/>)}
        </div>
        {/*<Image src="/images/sus.svg" boxSize="96px" alt="sus" className={susyle.amongsus} draggable="false" onClick={onClick}/>*/}
        <Image src="/images/sus.svg" boxSize="128px" alt="sus" className={susyle.amongsus} draggable="false" onClick={onClick}/>
    </>;
};

function getRandomInt(max: number, min: number) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}


function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default AmongSus;