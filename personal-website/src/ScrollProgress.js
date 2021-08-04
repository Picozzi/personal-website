import { useEffect, useState } from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useMediaQuery } from "react-responsive";


const ProgressContainer = styled(motion.div)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 120px;
    height: 120px;
    color: #464646;
    font-family: Montserrat;
    font-weight: 300;
`;


const ScrollingAnimation = () => {
    const [currentPercent, setCurrentPercent] = useState(null)
    const [currentProgressColor, setCurrentProgressColor] = useState(null)
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    const [currentLeft, setCurrentLeft] = useState(40);
    const [currentTop, setCurrentTop] = useState(40);


    useEffect(
        () =>
            yRange.onChange((v) => {
                setCurrentPercent(Math.trunc(yRange.current))
            }),
        [yRange]
    );

    useEffect(() => {
        setCurrentProgressColor(
            currentPercent >= 90 ? "#1B9AAA" :
                currentPercent >= 45 ? "#21BFD4" :
                    currentPercent >= 20 ? "#3DCEE1" :
                        "#60D7E6"
        )
    }, [currentPercent])

    const Text = styled(motion.div)`
    position: "-webkit-sticky";
                    position: absolute;
                    top: ${currentTop}px;
                    left: ${currentLeft}px;
                    width: 120px;
                    height: 120px;
                    opacity: pathLength;
    `;

    const IncompletePercent = () => {
        setCurrentLeft(40);
        setCurrentTop(40);
        return (
            currentPercent != 0 ? currentPercent : null
        )
    }

    const CompleteIcon = () => {
        setCurrentLeft(36);
        setCurrentTop(38);
        return (
            <Icon name='check' size="large"/>
        )
    }
    
    return (
        <ProgressContainer>
                <svg className="progress-icon" viewBox="0 0 60 60">
                    <motion.path
                        fill= "none"
                        strokeWidth="8"
                        stroke={currentProgressColor}
                        strokeDasharray="0 1"
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{
                            pathLength,
                            rotate: 90,
                            translateX: 5,
                            translateY: 5,
                            opacity: pathLength,
                            scaleX: -1
                        }}
                    />
                </svg>
            <Text>
                {currentPercent != 100 ? <IncompletePercent/> : <CompleteIcon/>}
            </Text>
        </ProgressContainer>
    )
}

const ScrollProgress = () => {

    const IsScrollerSmall =  useMediaQuery({ query: '(min-width: 1000px)' });

    return (
            <div>
            { 
               IsScrollerSmall ? <ScrollingAnimation/> : null 
            }
            </div>

    
    )
}

export default ScrollProgress;

// <motion.div
// style={{
//     position: "-webkit-sticky",
//     position: "absolute",
//     top: "39px",
//     left: "38px",
//     width: "120px",
//     height: "120px",
//     opacity: pathLength,

// }}
// >
// {currentPercent != 100 ? currentPercent : <Icon name='check' size="large"/>}
// </motion.div>